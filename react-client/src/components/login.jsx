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
    var payload={
    "email":this.state.username,
    "password":this.state.password
    }

    $.ajax({
      type: 'POST',
      url: '/login',
      data: payload,
      success: (data) => {
        if(data.code == 200){
          console.log("Login successfull");
        }else {console.log("Username password do not match");}
      },
      error: (err) => {
        console.log('err', err);
      }
    })
    this.props.login.setState({login : true})
    // var uploadScreen=[];
    // uploadScreen.push(<UploadScreen appContext={this.props.appContext}/>)
    // this.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})


    .catch(function (error) {
    console.log(error);
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