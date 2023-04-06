import React from 'react'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Space } from 'antd'

interface LoginType {
	email: string,
	password: string,
}

const Login = () => {
	
	return (
		<Space style={{ width: '100%', height: '100vh', justifyContent: 'center' }} align='center'>
				<LoginForm<LoginType>
					logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title="Antd"
          subTitle="Simple Dashboard"
				>
					<>
						<ProFormText
							name="username"
							fieldProps={{
								size: 'large',
								prefix: <UserOutlined />,
							}}
							placeholder={'Email'}
							rules={[
								{
									required: true,
									message: 'Email cannot be empty!',
								},
							]}
						/>
						<ProFormText.Password
							name="password"
							fieldProps={{
								size: 'large',
								prefix: <LockOutlined />,
							}}
							placeholder={'Password'}
							rules={[
								{
									required: true,
									message: 'Password cannot be empty!',
								},
							]}
						/>
					</>
				</LoginForm>
		</Space>
	)
}

export default Login