import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import AppHeader from '../../components/header/index.tsx';
import Logo from '../../components/logo/index.tsx';

export default class HomePage extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        const { SubMenu } = Menu;
        const { Header, Content, Footer, Sider } = Layout;


        return (
            <Layout style={{ minHeight: '100vh' }}>

                <LeftSection
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                />

                <Layout style={{ marginLeft: 200 }}>
                    <AppHeader />
                    <Content style={{ marginTop: 48 }}>
                        <div style={{ padding: 24, height: 1000, background: '#fff', minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}



function LeftSection(props) {
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;

    return (
        <Sider
            style={{
                overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            }}
            collapsible
            collapsed={props.collapsed}
            onCollapse={props.onCollapse}
        >
            <Logo />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={<span><Icon type="user" /><span>User</span></span>}
                >
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={<span><Icon type="team" /><span>Team</span></span>}
                >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                    <Icon type="file" />
                    <span>File</span>
                </Menu.Item>
            </Menu>

        </Sider>
    )
}

