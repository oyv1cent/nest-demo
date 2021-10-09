export enum ErrorCode {
  DefaultError = 10000,
  RegisterDuplicated = 10001,
  LoginError = 10002,
}

export const errorMap = {
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
