import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap';

import './panel_responsive.css';
import logo_diinf from "../../img/logo_diinf2.png";
import logo_usach from "../../img/logo.png";

class Panel_responsive extends Component{
    constructor(props){
        super(props);
        this.state = {mtop_res:window.innerHeight/4,valid : 1}
    }
    
    render(){
        return(
            <Grid>
                <Col sm = {1} xs = {1}></Col>
                <Col sm = {10} xs = {10}>
                    <div className = "form_responsive" style = {{marginTop: this.state.mtop_res + 'px'}}>
                        {console.log(this.mtop_res)}
                        <Form horizontal onSubmit = {this.handleSumbit}>
                            <FormGroup controlId = "user_name_responsive">
                                <Col sm = {12} xs = {12}>
                                    <FormControl type = "email" placeholder = "Nombre usuario" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId = "pass_responsive">
                                <Col sm = {12} xs = {12}>
                                    <FormControl type = "password" placeholder = "Contraseña" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col sm = {12} xs = {12}>
                                    <a href = "#"  style = {{marginLeft:2 + 'px', marginTop:5 + 'px',float:"right", color: "#0097A7"}}>¿Has olvidado la contraseña?</a>
                                </Col>
                            </FormGroup>
                            <center><Button bsStyle = "default" style = {{marginTop: 25 + 'px'}}>Ingresar</Button></center>
                        </Form>
                    </div>
                </Col> 
                <Col sm = {1} xs = {1}></Col>
                <div className = "footer_responsive">
                    <Grid>
                        <Row className= "show-grid">
                            <Col sm = {4} xs = {4}>
                            <img src = {logo_diinf} className = "img-responsive"/>
                            </Col>
                            <Col sm = {1} xs = {1}></Col>
                            <Col sm = {6} xs = {6}>
                                <img src = {logo_usach} className = "img-responsive"/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Grid>
        );
    }
}

export default Panel_responsive;