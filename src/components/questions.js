import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Container, Card, Button} from 'react-bootstrap'
export default class Start extends Component {

     constructor(props) { 
        super(props)

        this.state={
            questions:[],
            selected:[],
            last:false,
            currentIndex:0,
            currenQuestion:null,
            currentScore:0,
            loaded:false,
            showNext:false,
            prevIndex:-1
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/questions").
        then((result) =>{
            console.log(result.data[0])
            this.setState({questions:result.data})

            let data=[]
            result.data.map((val) => {
                data.push({id:val.id, selected:null})
                //console.log(val)
            })

            this.setState({selected:data})

        })

    }

    // handleClick = (option) => {
    //     console.log(option)
        
    //     if(this.state.currentIndex<this.state.questions.length){
    //         this.setState({ showNext:true})

    //         if(this.state.selected[this.state.currentIndex].selected==null && option.isCorrect){
    //             var currentSelected=this.state.selected
    //             currentSelected[this.state.currentIndex].selected=option
    //             let currentScore=this.state.currentScore
    //             currentScore+=1
    //             this.setState({currentScore,selected:currentSelected}, ()=> console.log(this.state.currentScore))
    //         }
    //         else{
    //             var currentSelected=this.state.selected
    //             currentSelected[this.state.currentIndex].selected=option
    //             this.setState({selected:currentSelected}, () => { console.log(this.state.currentScore)})
    //         }
    //     }

       

    // }

    performChange =(option) => {
        let currentSelected=this.state.selected
        currentSelected[this.state.currentIndex].selected=option
        let currentIndex=this.state.currentIndex
        if(currentIndex+1<this.state.questions.length){
            currentIndex++
        }
        this.setState({currentIndex:currentIndex, selected:currentSelected} ,()=>{console.log(this.state.currentIndex)})
        
        if(this.state.currentIndex==this.state.questions.length-1){
            this.props.history.push({pathname:"/end", state:{selected:this.state.selected, score:this.state.currentScore, questions:this.state.questions }})
    
    }
    }
    handleClick = (option) =>{

        console.log(option)
        if(option.isCorrect){
            console.log("Inside")
           this.setState({currentScore:this.state.currentScore+1},()=>{this.performChange(option)})         
            
        }else{
            this.performChange(option)
        }

        
    }

    

    render(){

        let optionStyle={
            marginTop:10,
            marginBottom:10
        }

        if(this.state.questions.length>0){

            let current=this.state.questions[this.state.currentIndex]
        
            return(
               <div>
                <Container >
                <br/>

            <span style={{fontWeight:'bold', fontSize:25}}>Questions </span> 
            <span>{this.state.currentIndex+1}/{this.state.questions.length}</span>
                
                <br/>
                <br/>
              
              <Container>
                  
                <Card className="mb-12 sm-12 lg-12 " >
            <Card.Header><b>Q {this.state.currentIndex+1} </b>: {current.question}</Card.Header>
    <Card.Body>
      <Card.Text>

                
               <div style={optionStyle} onClick={()=>this.handleClick(current.options[0])}> {current.options[0].option}</div>
               <div style={optionStyle} onClick={()=>this.handleClick(current.options[1])}> {current.options[1].option}</div>
               <div style={optionStyle} onClick={()=>this.handleClick(current.options[2])}> {current.options[2].option}</div>
               <div style={optionStyle} onClick={()=>this.handleClick(current.options[3])}> {current.options[3].option}</div>


      </Card.Text>
    </Card.Body>
  </Card>
           
           <br/>
{/* {this.state.currentIndex<9 && this.state.showNext?<Button onClick={this.handlNext}>Next</Button>:""} */}

{/* {this.state.currentIndex==this.state.questions.length-1?<Button variant="warning" onClick={this.handlSubmit}>Submit</Button>:""} */}
           
              </Container>
   

             
                </Container>
                  </div>
           
        )
        }
        else{
            return(
                <h2>Loading</h2>
            )
        }
        
     
    }
} 