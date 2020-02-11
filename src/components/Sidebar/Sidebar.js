import React from 'react'
import { Layout, Menu,Icon } from 'antd';
import "antd/dist/antd.css";
import firebase from '../../config/FirebaseConfig'
import { useHistory, Link } from 'react-router-dom'
import Profile from '../../page/Home/assets/Trump.jpg'
import {HeaderContainer,ButtonHeader,ImageLogo,ProfileImg,FirebaseText} from '../../style/Style'
const { Header, Content, Footer, Sider } = Layout;

export default function Sidebar({ children }) {


    const history = useHistory()
    const Logo = 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'
    const LogoType = '//www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_white_18dp.svg'

    const Logout = () => {
        firebase.auth().signOut().then(function () {
            history.push('/')
        }).catch(function (error) {
            alert(error)
        });
    }
    return (
        <Layout>
                <HeaderContainer>
                    <ImageLogo src={Logo} alt="Logo" />
                    <FirebaseText src={LogoType} alt="Logo"  />
                    <ButtonHeader>
                        <span style={{marginLeft:'10px'}}>Welcome: Trump</span>
                        <ProfileImg src={Profile}/>
                    </ButtonHeader>
                </HeaderContainer>
        
            <Layout>
                <Sider width={150}
                    style={{ background: '#fff' }}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1">
                            <Link to="/home">
                                <Icon type="team" />
                                <span>User list</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/profile">
                                <Icon type="user" />
                                <span>Profile</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" onClick={Logout}>
                            <Icon type="logout" />
                            <span>Logout</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <div style={{ margin: '16px 0' }}>
                        User list
                    </div>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 620,
                            borderRadius: '5px'
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
