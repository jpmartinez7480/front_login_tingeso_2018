import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Form, Button, FormControl, FormGroup } from 'react-bootstrap';

import "./panel_desktop.css";
import bl from "../../img/background_login.jpg";
import logo_diinf from "../../img/logo_diinf2.png";
import logo_usach from "../../img/logo.png";

class Panel_desktop extends Component{
    constructor(props){
        super(props);
        this.state = {height: window.innerHeight,panel_height:0,mtop:81, valid: 1}
    }

    render(){
        return(
            <Grid fluid>
                <Row className = "show-grid">
                    <Panel style = {{marginTop: this.state.mtop + 'px'}}>
                        <Panel.Body>
                            <div className = "log_panel">
                                <Col lg = {6} md = {6} className = "log_panel_info">
                                    <img src = {bl} className = "img-responsive"/>
                                    <div className = "app-text">
                                        <center><h1 className = "app-title">SWAP</h1></center>
                                        <center><h5>Sistema web para el aprendizaje de programación</h5></center>
                                        <br/>
                                        <h4><li>Acceso con cuenta USACH</li></h4><br/>
                                        <h4><li>Practica Python, C y Java</li></h4><br/>
                                        <h4><li>Disponible 24/7</li></h4><br/>
                                    </div>
                                </Col>
                                <Col lg = {6} md = {6}>
                                    <div className = "user_info">
                                        <div className = "valid_user">
                                            <p>{this.state.valid == 0 ? 'Error: Usuario no valido.' : ' '}</p>
                                        </div>
                                        <Form horizontal onSubmit = {this.handleSubmit}>
                                            <FormGroup controlId = "Form_access_email">
                                                <Col sm = {10}>
                                                    <FormControl type = "email" placeholder = "Nombre usuario" />
                                                </Col>    
                                            </FormGroup>
                                            <FormGroup controlId = "Form_access_password">
                                                <Col sm = {10}>    
                                                    <FormControl type = "password" placeholder = "Contraseña" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Col sm = {10}>
                                                    <a href = "#"  style = {{marginLeft:2 + 'px', float:"right"}}>¿Has olvidado la contraseña?</a>
                                                </Col>
                                            </FormGroup>
                                            <center><Button bsStyle = "default" style = {{marginRight:50 + 'px'}}>Ingresar</Button></center>
                                        </Form>
                                        <br/>
                                    </div>
                                    <div className = "mi_footer">
                                        <hr/>
                                        <Grid fluid>
                                            <Row className = "show-grid">
                                                <Col lg = {4} md = {4}>
                                                    <img src = {logo_diinf} className = "img-responsive"/>
                                                </Col>
                                                <Col lg = {1} md = {1}></Col>
                                                <Col lg = {6} md = {6}>
                                                    <img src = {logo_usach} className = "img-responsive"/>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </div>
                                </Col>
                            </div>
                        </Panel.Body>
                    </Panel>
                </Row>
            </Grid>
        );
    }
}

export default Panel_desktop;