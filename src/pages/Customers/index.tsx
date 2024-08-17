import { Button, Col, Row, Table, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import Form from "./Form";

import { ReactElement, useRef } from "react";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'E-mail',
        dataIndex: 'mail',
        key: 'mail',
    },
]

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        mail: 'jailton@gmail.com'
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        mail: 'jailton@gmail.com'
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        mail: 'jailton@gmail.com'
    },
]

const Customers = () => {
    const formModalRef = useRef<any>();

    return (
        <Content>
            <Row justify={"space-between"} align={"middle"}>
                <Col> <Typography.Title level={2}>Clientes</Typography.Title></Col>
                <Col>
                <Button 
                    type="primary" 
                    onClick={() => {formModalRef.current.showModal()}}
                    > 
                    Registrar Novo
                </Button>
                </Col>
            </Row>
            <Row style={{marginTop:"15px"}}>
                <Col span={24}>
                    <Table
                        columns={columns} dataSource={data}
                    />
                </Col>
            </Row>
            <Form ref={formModalRef} title="Novo Cliente"/>
        </Content>
    )
}

export default Customers;