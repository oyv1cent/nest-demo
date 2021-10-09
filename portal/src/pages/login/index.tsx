import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons'
import { LoginForm, ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form'
import { message, Tabs } from 'antd'
import axios from 'axios'
import React, { useMemo, useState } from 'react'
import LogoIcon from '../../assets/svgs/logo.svg'
import './index.less'

type LoginType = 'login' | 'register'

type FormData = {
  name: string
  password: string
  autoLogin?: boolean
  phone?: string
  captcha?: string
}

function LoginPage() {
  const [loginType, setLoginType] = useState<LoginType>('login')
  const isLogin = useMemo(() => loginType === 'login', [loginType])

  const login = async (values: FormData) => {
    try {
      await axios.post('http://localhost:3002/login', values)
      message.success('登录成功')
    } catch (_) {
      message.error('账号或密码错误，登录失败')
    }
  }

  const register = async (values: FormData) => {
    try {
      await axios.post('http://localhost:3002/register', values)
      message.success('注册成功')
    } catch (_) {}
  }
  return (
    <div className='login'>
      <LoginForm
        logo={LogoIcon}
        title='Portal'
        subTitle='Demo测试后台网站'
        onFinish={isLogin ? login : register}
        submitter={{
          searchConfig: {
            submitText: loginType === 'login' ? '登录' : '注册',
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
      >
        <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
          <Tabs.TabPane key={'login'} tab={'登录'} />
          <Tabs.TabPane key={'register'} tab={'注册'} />
        </Tabs>
        {loginType === 'login' && (
          <>
            <ProFormText
              name='name'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名: '}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name='password'
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码: '}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <ProFormCheckbox noStyle name='autoLogin'>
                自动登录
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
              >
                忘记密码
              </a>
            </div>
          </>
        )}
        {loginType === 'register' && (
          <>
            <ProFormText
              name='name'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              initialValue={'user'}
              placeholder={'用户名: '}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name='password'
              initialValue={'123456'}
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码: '}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={'prefixIcon'} />,
              }}
              name='phone'
              initialValue={'13888888888'}
              placeholder={'手机号'}
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              initialValue={'1234'}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`
                }
                return '获取验证码'
              }}
              name='captcha'
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async () => {
                message.success('获取验证码成功！验证码为：1234')
              }}
            />
          </>
        )}
      </LoginForm>
    </div>
  )
}

export default LoginPage
