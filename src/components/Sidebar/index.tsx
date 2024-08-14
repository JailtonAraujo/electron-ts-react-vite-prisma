import Sider from "antd/es/layout/Sider";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React from "react";
import { Menu } from "antd";

const items = [
    {
        key:"customers",
        label:"Clientes",
        icon:<UserOutlined/>
    },
    {
        key:"users",
        label:"Usuarios",
        icon:<UserOutlined/>
    },
    {
        key:"products",
        label:"Produtos",
        icon:<UserOutlined/>
    },
    {
        key:"fornecr",
        label:"Fornecedores",
        icon:<UserOutlined/>
    }
]

const Sidebar = () => {
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
            <Menu theme="dark" mode="inline" items={items} />
        </Sider>
    )
}
export default Sidebar;