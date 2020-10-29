import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import end from './components/end'
import questions from './components/questions'
import start from './components/start'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render(){

    return(


      <Router>

      {/* <Header {...this.props}> </Header> */}

      <Switch>

      <Route exact path="/" component={start}></Route>
          <Route exact path="/start" component={start}></Route>
          <Route exact path="/questions" component={questions}></Route>
          <Route exact path="/end" component={end}></Route>

      </Switch>

    </Router>




    )
  }

}

