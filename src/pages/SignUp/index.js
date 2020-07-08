import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/logo.png';

import { signUp as signUpAction } from './actions';
import { isSigned } from '../../utils/session';

const SignUp = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = values => {
        setLoading(true);

        signUpAction(values);

        setLoading(false);
    };

    if (isSigned()) {
        return <Redirect to="/products" />;
    }

    return (
        <Container>
            <div>
                <div>
                    <img src={logo} alt="MyProducts" />
                </div>
                <Form
                    layout={{
                        labelCol: { span: 8 },
                        wrapperCol: { span: 16 },
                    }}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input size={'large'} placeholder={'Name'} prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            size={'large'}
                            type="email"
                            placeholder={'Email'}
                            prefix={<MailOutlined />}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            size={'large'}
                            placeholder={'Password'}
                            prefix={<LockOutlined />}
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" size={'large'} block>
                        {loading ? 'Loading...' : 'Create account'}
                    </Button>
                    <div className="login-link">
                        <Link to="/">Login</Link>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default SignUp;
