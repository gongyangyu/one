import React from 'react';
import logo from '../../logo.svg';
import './index.less';
import {Button} from 'antd';
export default class App extends React.Component{
    render(){
        return(<div className='Demo'>
            <img className='Demo-logo' alt='logo' src={logo}></img>
            <p className='Demo-text'>testing</p>
            <div>
                <Button type="primary">Primary</Button>
                <Button>Demo</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
            </div>
        </div>)
    }
}
