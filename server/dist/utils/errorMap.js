"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMap = exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["DefaultError"] = 10000] = "DefaultError";
    ErrorCode[ErrorCode["RegisterDuplicated"] = 10001] = "RegisterDuplicated";
    ErrorCode[ErrorCode["LoginError"] = 10002] = "LoginError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
exports.errorMap = {
    [ErrorCode.DefaultError]: {
        code: ErrorCode.DefaultError,
        message: '系统错误',
    },
    [ErrorCode.RegisterDuplicated]: {
        code: ErrorCode.RegisterDuplicated,
        message: '该手机号已被注册',
    },
    [ErrorCode.LoginError]: {
        code: ErrorCode.LoginError,
        message: '登录失败，账号密码错误',
    },
};
//# sourceMappingURL=errorMap.js.map