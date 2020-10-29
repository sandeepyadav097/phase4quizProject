import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Container} from 'react-bootstrap'
export default class Start extends Component {

     constructor(props) { 
        super(props)

        this.state={
            questions:[]
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/questions").
        then((result) =>{
            console.log(result.data)
            this.setState({questions:result.data})
        })
    }

    render(){
        return(
            <div>
                <Container >
                <h14>Questions</h14>
                <br/>
                <Link to="/end">End</Link>

                {this.state.questions.map((question) => {

                    return(
                        <div>
                        <h4>
                            {question.id}
                            <br/>
                            {question.question}
                        </h4>

                            {question.options.map((opt) => {
                                return (
                                <h5>{opt}</h5>
                                )
                            })}
                        </div>

                    )
                })}
  
                </Container>
                  </div>
           
        )
    }
} 