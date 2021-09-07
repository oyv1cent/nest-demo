const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve('./dist'),
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.html$/,
        loader: 'string-replace-loader',
        options: {
          search: '    <script type="module" src="/src/main.tsx"></script>',
          replace: '',
        }
      }
    ],
  },
};
