import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import "antd/dist/antd.css";
import firebase from '../../config/FirebaseConfig'
import { useHistory } from 'react-router-dom'
import Usertable from '../../page/Home/UserList/UserTable'
const { Header, Content, Footer, Sider } = Layout;

export default function Sidebar() {
    const history = useHistory()
    const Logout = () => {
        firebase.auth().signOut().then(function () {
            history.push('/')
        }).catch(function (error) {
            alert(error)
        });
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="user" />
                        <span>User List</span>
                    </Menu.Item>
                    <Menu.Item key="4" onClick={Logout}>
                        <Icon type="logout" />
                        <span style={{ textAlign: 'center' }}>Logout</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}><Usertable/></div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}
