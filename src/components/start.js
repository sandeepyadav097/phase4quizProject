import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
export default class Start extends Component {
    render(){
        return(
            
<Link  to="/questions">
<Button  variant="danger"> Start </Button></Link>

           
            
        )
    }
} 