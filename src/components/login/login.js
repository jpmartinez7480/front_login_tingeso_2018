import React, { Component } from 'react';
import { Grid,Row, Col } from 'react-bootstrap';

import Panel_desktop from './panel_login/panel_desktop';
import Panel_responsive from './panel_login/panel_responsive';

class Login extends Component{
    render(){
        return(
            <Grid fluid>
                <Row className = "show-grid">
                    <Col lgHidden mdHidden>
                        <Panel_responsive />
                    </Col>
                    <Col lg = {2} md = {2} smHidden xsHidden></Col>
                    <Col lg = {8} md = {8} smHidden xsHidden>
                        <Panel_desktop />
                    </Col>
                    <Col lg = {2} md = {2}  smHidden xsHidden></Col>
                </Row>
            </Grid>
        );
    }

}

export default Login;