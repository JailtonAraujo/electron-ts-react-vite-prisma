import { Button, Modal } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';

interface FormProps {
    title: string
}

const Form = ({
    title
}: FormProps, ref: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
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
                centered
                maskClosable={false}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancelar
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Salvar
                    </Button>,
                ]}
            >

            </Modal>
        </>
    )
}

export default forwardRef(Form);