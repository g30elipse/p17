import React, { Component } from 'react'
import { Menu, Icon } from 'antd';

export default class AppHeader extends Component {
    render() {

        return (
            <Menu mode="horizontal" style={{ position: 'fixed', width: '100%' }}>
                <Menu.Item key="mail">
                    <Icon type="mail" />Navigation One
                </Menu.Item>
                <Menu.Item key="app">
                    <Icon type="appstore" />Navigation Two
                </Menu.Item>
            </Menu>
        )
    }
}
