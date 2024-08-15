import { Layout, theme } from 'antd';
import "./styles.less"
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const { Header, Content, Footer } = Layout;

const Home = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className='content'>
            <Sidebar />
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ padding:"3em" }}>
                    <div >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Mercado G10 ©{new Date().getFullYear()}
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Home;