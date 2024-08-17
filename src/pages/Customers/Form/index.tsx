import { Button, Modal, Form, Input, Row, Col, Switch } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import type { FormProps } from 'antd';

type FieldType = {
    username?: string;
    password?: string;
};


interface Props {
    title: string
}

const FormCustomer = ({
    title
}: Props, ref: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formRef] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        formRef.resetFields();
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useImperativeHandle(
        ref,
        () => {
            return {
                showModal
            }
        }
    )

    return (
        <>
            <Modal
                title={title}
                open={isModalOpen}
                onCancel={handleCancel}
                onClose={handleCancel}
                centered
                maskClosable={false}

                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancelar
                    </Button>,
                    <Button key="submit" type="primary" onClick={() => formRef.submit()}>
                        Salvar
                    </Button>,
                ]}
            >
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                    form={formRef}
                >
                    <Row>
                        <Col>
                            <Form.Item<FieldType>
                                label="Ativo:"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Switch />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col>
                            <Form.Item<FieldType>
                                label="Nome:"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item<FieldType>
                                label="CPF:"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col>
                            <Form.Item<FieldType>
                                label="E-mail:"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item<FieldType>
                                label="Telefone:"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={24}>
                            <Form.Item<FieldType>
                                label="Localidade:"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item<FieldType>
                                label="Referência:"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={24}>
                            <Form.Item<FieldType>
                                label="Débito Inicial:"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}

export default forwardRef(FormCustomer);