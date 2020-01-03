import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Login from './components/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      login:false
    }
  }




  render () {
    if(!this.state.login){
    return (<div>
      <h1>Log in</h1>
      <Login login={this.state.login}/>
    </div>)
    }
    else {
      return (<div>
        <h1>Item List</h1>
        <List items={this.state.items}/>
      </div>)
    }
  }
 /* componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }*/
}

ReactDOM.render(<App />, document.getElementById('app'));