import React from 'react';
import './index.less';
import {Col, Icon, Row} from 'antd';
import Util from '../../utils/utils'

export default class Header extends React.Component {
    componentWillMount(){
        this.setState({
            userInfo:{
                userName:'浩瀚星海',
                userCode:'002222',
                deptName:'信息技术部'
            }
            
        });
        setInterval(()=>{
            let sysTime=Util.formatDate(new Date());
            this.setState({
                sysTime:sysTime
            })
        },1000)
    }
    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24}>
                        <span><Icon type='user'></Icon><span>{this.state.userInfo.userName}</span><span>{this.state.userInfo.deptName}</span></span>
                        <a href="#/login">退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col className='breadcrumb-title' span={4}>首页</Col>
                    <Col className='weather' span={20}>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-detail'>暴雨</span>
                    </Col>
                </Row>
            </div>
        );
    }
}
