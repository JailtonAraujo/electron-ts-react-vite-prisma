import Sider from "antd/es/layout/Sider";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React from "react";
import { Menu, Typography } from "antd";
import "./styles.less"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="side-content">
                <div className="img-side"></div>
                <div className="user-info">
                    <Typography.Text className="user-info" ellipsis={true}>
                        Jailton de Araujo Santos
                    </Typography.Text>
                </div>
            </div>
            <Menu theme="dark" mode="inline" items={[
                {
                    key: "customers",
                    label: "Clientes",
                    icon: <UserOutlined />,
                    onClick: () => {navigate('customers')}
                },
                {
                    key: "users",
                    label: "Usuarios",
                    icon: <UserOutlined />,
                    onClick: () => {navigate('users')}
                },
                {
                    key: "products",
                    label: "Produtos",
                    icon: <UserOutlined />
                },
                {
                    key: "fornecr",
                    label: "Fornecedores",
                    icon: <UserOutlined />
                }
            ]} />
        </Sider>
    )
}
export default Sidebar;