import React from 'react';
import './App.css';
import Nav from './nav';
import Home from './home/Home';
import Feed from './feed/Feed';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
render(){
  fetch('http://localhost:4000/feed/man')
  .then((res) => res.json())
  .then(data => console.log(data))
  console.log()
  return (
    <Router>

    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/feed/:id" component={Feed} />
      </Switch>
    </div>
    </Router>
  );
}
}
export default App;
