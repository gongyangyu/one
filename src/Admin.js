import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './styles/common.less'
export default class App extends React.Component {
    render() {
        return (
            <Row className='container'>
                <Col span={4} className='nav-left'>
                    <NavLeft></NavLeft>
                </Col>
                <Col span={20} className='main'>
                    <Header></Header>
                    <Row className='content'>content</Row>
                    <Footer></Footer>
                </Col>
            </Row>
        );
    }
}
