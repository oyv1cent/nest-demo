const Ora = require("ora");
const path = require("path");
const { RawSource } = require("webpack-sources");
require('events').EventEmitter.defaultMaxListeners=50;

const PLUGIN_NAME = 'ImageMinimizerPlugin';

class ImageMinimizerPlugin {

  constructor(options) {
    this.options = options || {}
  }

  async squooshMinify(assets, filePath) {
    const encodeOptions = {
      mozjpeg: {}, // an empty object means 'use default settings'
      oxipng: {
        level: 1,
      },
      jxl: {
        quality: 90,
      },
    }
    const targets = {
      ".png": "oxipng",
      ".jpg": "mozjpeg",
      ".jpeg": "mozjpeg",
      ".jxl": "jxl",
      ".webp": "webp",
      ".avif": "avif",
      ".svg": "oxipng"
    };
    const ext = path.extname(filePath).toLowerCase();
    const targetCodec = targets[ext];
    const file = assets[filePath].source()
    const squoosh =
      require("@squoosh/lib");

    let imagePool;
    let image;

    try {
      imagePool = new squoosh.ImagePool();
      image = imagePool.ingestImage(file);
      await image.encode(encodeOptions);
    } catch (error) {
      console.log(error)
      if (imagePool) {
        await imagePool.close();
      }
      Promise.reject()
    }

    await imagePool.close();
    const encodedImage = await image.encodedWith[targetCodec];
    assets[filePath] = new RawSource(Buffer.from(encodedImage.binary));
    return Promise.resolve(assets[filePath].size())
  }

  apply(compiler) {
    let uncompressedSize = 0, compressedSize = 0
    const IMG_REGEXP = /\.(jpe?g|png)$/;

    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
      compilation.hooks.processAssets.tapPromise(
        PLUGIN_NAME,
        async (assets) => {
          const imgs = Object.keys(assets).filter(v => IMG_REGEXP.test(v));
          if (!imgs.length) return;
          uncompressedSize = imgs.reduce((pre, next) => pre += assets[next].size(), 0)
          const spinner = Ora("Image is compressing......").start();
          for(const img of imgs) {
            await this.squooshMinify(assets, img)
          }
          spinner.stop()
          const compressedImages = Object.keys(assets).filter(v => IMG_REGEXP.test(v));
          compressedSize = compressedImages.reduce((pre, next) => pre += assets[next].size(), 0)
          console.log(
            `uncompressedSize: ${uncompressedSize}
            compressedSize: ${compressedSize}
           `
          )
          return Promise.resolve()
        }
      );
    });
  }
}

module.exports = ImageMinimizerPlugin
