import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Card, Row,Col, Container} from 'react-bootstrap'
export default class Start extends Component {
    render(){
        return(
            


            <Container style={{textAlign:'center', width:'50%'}}>
                <div style={{display:'flex', marginTop:'15vh', justifyContent:'space-between'}}>

                <h1>Let's test how much you know about React ?</h1>


                </div>
                       <Row  style={{cursor:'pointer'}}>
                    <Col sm={12}  xs={12} md={12} lg={12}>
                    <Card  border="dark" onClick={(e) => {e.preventDefault(); this.props.history.push('/questions')}} style={{ display: 'flex', alignItems:'center', justifyContent:'center', justifyItems:'center', backgroundColor:'coral', width:'100%', minHeight:'50vh'}}>

                 <h1 >Start Quiz</h1>
                



                    </Card>
                    </Col>
                    

                </Row>

                        
            </Container>

    

           
            
        )
    }
} 