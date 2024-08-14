import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import type { FormProps } from 'antd';
import { Content } from "antd/es/layout/layout";
import "./styles.css"

const Login = () => {

    type FieldType = {
        username?: string;
        password?: string
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Content className="container">
            <Row justify={"center"} align={"middle"} className="login">
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    style={{width:"100%"}}
                >
                    <Form.Item<FieldType>
                        label="Usuario:"
                        name="username"
                        rules={[{ required: true, message: 'Insira o usuario!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Senha:"
                        name="password"
                        rules={[{ required: true, message: 'Insira a senha!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width:"100%", marginTop:"20px", height:"40px"}}>
                            ENTRAR
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </Content>
    )
}

export default Login;