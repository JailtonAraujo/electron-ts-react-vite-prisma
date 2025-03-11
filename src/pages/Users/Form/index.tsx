import { Button, Modal, Form, Input, Row, Col, Switch, notification } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import type { FormProps } from 'antd';

type FieldType = {
    active?:boolean;
    name?:string;
    phone?:string;
    email?:string;
    username?: string;
    password?: string;
};


interface Props {
    title: string
}

const FormUser = ({
    title
}: Props, ref: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formRef] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [initialValues, setInitialValues] = useState<FieldType>({
        active:true
    });

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
        formRef.resetFields();
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        setLoading(true);
        window.ipcRenderer.invoke('user:create', values).then((result) => {
            setLoading(false);
            notification.success({
                message:"Sucesso!",
                description:"Usuario criado com sucesso."
            });
            handleClose();
        }).catch(error => {
            console.error(error);
            setLoading(false);
        });
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
                onCancel={handleClose}
                onClose={handleClose}
                centered
                maskClosable={false}

                footer={[
                    <Button key="back" onClick={handleClose} loading={loading}>
                        Cancelar
                    </Button>,
                    <Button key="submit" type="primary" onClick={() => formRef.submit()} loading={loading}>
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
                    initialValues={initialValues}
                >
                    <Row>
                        <Col>
                            <Form.Item<FieldType>
                                label="Ativo:"
                                name="active"
                            >
                                <Switch/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24}>
                            <Form.Item<FieldType>
                                label="Nome:"
                                name="name"
                                rules={[{ required: true, message: 'Insira o nome!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item<FieldType>
                                label="E-mail:"
                                name="email"
                                rules={[{ required: true, message: 'Insira o email!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item<FieldType>
                                label="Telefone:"
                                name="phone"
                                rules={[{ required: true, message: 'Insira o telefone!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item<FieldType>
                                label="Nome de Usuario:"
                                name="username"
                                rules={[{ required: true, message: 'Insira o nome de usuario!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item<FieldType>
                                label="Senha:"
                                name="password"
                                rules={[{ required: true, message: 'Insira a senha!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}

export default forwardRef(FormUser);