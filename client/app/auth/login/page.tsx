"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import { LoginInterface } from "@/types/interfaces";
import { signIn } from "next-auth/react";

const Login = () => {
  const onFinish =async (values: LoginInterface) => {
    const result = await signIn('credentials',{
        username: values.username,
        password: values.password,
        redirect: true,
        callbackUrl: '/'
    })
    console.log('result', result)
  };

  return (
    <div className="login-container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
