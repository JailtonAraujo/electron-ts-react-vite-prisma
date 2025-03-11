import { Button, Col, Row, Table, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import Form from "./Form";

import { useEffect, useRef, useState } from "react";

const columns = [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Nome de Usuario',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Telefone',
        dataIndex: 'phone',
        key: 'phone',
    },
]

const Users = () => {
    const formModalRef = useRef<any>();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState({
        page:1,
        size:5
    });
    
    const onLoadUsers = () => {
        setLoading(true);
        window.ipcRenderer.invoke('user:list', {
            pagination:page
        }).then((data) => {
            const {usersTotal, users} = data;
            setLoading(false);
            setUserData(users);
            setTotal(usersTotal);
        }).catch((error) => {
            setLoading(false);
            console.error(error);
        });
    }

    useEffect(() => {
        onLoadUsers();
    }, []);

    return (
        <Content>
            <Row justify={"space-between"} align={"middle"}>
                <Col> <Typography.Title level={2}>Usuarios</Typography.Title></Col>
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
                        loading={loading}
                        columns={columns} 
                        dataSource={userData}
                        pagination={{
                            onChange: (currentPage) => setPage({page:currentPage, size:page.size}),
                            pageSize: page.size,
                            total: total,
                            current: page.page
                        }}
    
                    />
                </Col>
            </Row>
            <Form ref={formModalRef} title="Novo Usuario"/>
        </Content>
    )
}

export default Users;