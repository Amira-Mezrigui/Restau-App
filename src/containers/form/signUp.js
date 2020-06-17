import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addUserToApi, getUserFromApi} from '../../actions/formAction'

export class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      newEmail: "",
      newPassword: "",
      newName: "",
    };
  }
 
  handleNameChange = (e) => {
    this.setState({ newName: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ newEmail: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ newPassword: e.target.value });
  };
    render(){
    
        return(
<div>
<form className="form">
  <h1>Sign Up</h1>
  <label for="name">Prénom </label>
  <input type="name" id="name" onChange={this.handleNameChange} />
  <label for="email">E-mail</label>
  <input type="email" id="email" onChange={this.handleEmailChange} />
  <label for="password">Mot de passe</label>
  <input type="password" id="password" onChange={this.handlePasswordChange}/>
  <button className="formBtn" onClick={() =>
              this.props.addUser({
                "name": this.state.newName,
                "email": this.state.newEmail,
                "password":this.state.newPassword ,
                "type":"user"
              })}> S'inscrire </button>
</form>
</div>
  
        )
    }
} 
const mapStateToProps = (state) => ({
  user:state.user
})
const mapDispatchToProps = (dispatch) => ({
  addUser: (added) => dispatch(addUserToApi(added)),
  getUser: () => dispatch(getUserFromApi())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
