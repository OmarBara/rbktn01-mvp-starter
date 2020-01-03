import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import $ from 'jquery';


class Login extends  React.Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:''
    }
    this.handleClick = this.handleClick.bind(this)
   }

   handleClick(event){
    var data={
    "username":this.state.username,
    "password":this.state.password
    }

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.code == 200){
        console.log("Login successfull");
        this.props.login.setState({login : true})
      }else {
        console.log("Username password do not match");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    }


  render() {
      return (
        <div>
          <MuiThemeProvider>
            <div>
            <AppBar
               title="Login"
             />
             <TextField
               hintText="Enter your Username"
               floatingLabelText="Username"
               onChange = {(event,newValue) => this.setState({username:newValue})}
               />
             <br/>
               <TextField
                 type="password"
                 hintText="Enter your Password"
                 floatingLabelText="Password"
                 onChange = {(event,newValue) => this.setState({password:newValue})}
                 />
               <br/>
               <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
           </MuiThemeProvider>
        </div>
      );
    }
  }
  const style = {
   margin: 15,
  };
  export default Login;