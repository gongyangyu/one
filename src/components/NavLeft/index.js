import React from 'react';
import './index.less';
import MenuConfig from '../../config/menuConfig';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
    componentWillMount(){
        const menuTreeNodes=this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNodes:menuTreeNodes
        });
    }
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (<SubMenu key={item.key} title={<span><Icon type={item.icon}></Icon><span>{item.title}</span></span>}>{this.renderMenu(item.children)}</SubMenu>);
            }
            return <Menu.Item key={item.key}>{<span><Icon type={item.icon}></Icon><span>{item.title}</span></span>}</Menu.Item>
        });
    }
    render() {
        return (
            <div>
                <div className='logo'>
                    <img src='/assets/logo-ant.svg' alt='logo'></img>
                    <h1>CONTRACT-MGT</h1>
                </div>
                <Menu theme='dark'>
                   {this.state.menuTreeNodes}
                </Menu>
            </div>
        );
    }
}
