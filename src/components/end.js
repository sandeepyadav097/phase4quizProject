import React, {Component} from 'react'
import { Button, Container , Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class End extends Component {

    constructor(props)
    {
        super(props)
        this.state=this.props.location.state
    }

    componentDidMount = () => {
        console.log(this.state)
    }
    render(){
       

        let optionStyle={
            marginTop:10,
            marginBottom:10,

        }

        
        let correct={
                    color:'green',
                    fontWeight:'bold'
        }
        return(

            
            <Container>
             

        <h3 style={{textAlign:'center', marginTop:'20px'}}>Your Score is {this.state.score}/10</h3>

       <br/>
       
       <Card className="mb-12 sm-12 lg-12 " >
<div className="hide" style={{height:'70vh' , overflowY:'scroll' , padding:50}}>     {this.state.questions.map((current, idx) => {
            return(
                <div>
                    <b>Q {idx+1} </b>: {current.question}

          
                          
            <div style={optionStyle, current.options[0].isCorrect?correct:null} > {current.options[0].option} &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.selected[idx].selected==current.options[0]?<span style={{fontWeight:'bold'}}> You Selected </span>:''}</div>
<div style={optionStyle, current.options[1].isCorrect?correct:null}> {current.options[1].option} &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.selected[idx].selected==current.options[1]?<span style={{fontWeight:'bold'}}> You Selected </span>:''}</div>
<div style={optionStyle,current.options[2].isCorrect?correct:null} > {current.options[2].option} &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.selected[idx].selected==current.options[2]?<span style={{fontWeight:'bold'}}> You Selected </span>:''}</div>
<div style={optionStyle, current.options[3].isCorrect?correct:null} > {current.options[3].option} &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.selected[idx].selected==current.options[3]?<span style={{fontWeight:'bold'}}> You Selected </span>:''}</div>

<br/>


                </div>
              
            )
            
        })}
      </div>
     

       </Card>
<br/>
       <Link to="/start"><Button >Retake</Button> </Link> 
       <br/>
<br/>
            </Container>
        )
    }
} 