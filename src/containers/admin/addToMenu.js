import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {addToApi} from '../../actions/menuAction'
import {connect} from 'react-redux'

export class AddToMenu extends Component{
  constructor(props){
    super(props);
    this.state={
      food:"",
      price:"",
      image:""
  };
  }
  handleFoodChange = event => {
    this.setState({ food: event.target.value });
  }
handlePriceChange = event => {
    this.setState({ price: event.target.value });
  }
  handleImageChange = event => {
    this.setState({ image: event.target.value });
  }
onClickHandler =() =>{
  window.location.reload(true)
  this.props.addMenu(
    {"food":this.state.food,
    "price":this.state.price,
    "image":this.props.image

    }
  )
}
    render(){
    
        return(
<Modal trigger={<Button>Add to menu </Button>} closeIcon>
    <Header  content='Archive Old Messages' />
    <Modal.Content>
      <h1>coucou </h1>
      <label> Ajouter le plat : <br/>
            <input type="text" name="name" value={this.state.food} onChange={this.handleFoodChange}/>
        </label> <br/>
        <label> le prix: <br/>
            <input type="text" name="username"   value={this.state.price} onChange={this.handlePriceChange}/>
        </label> <br/>
        <label> le lien de l'image: <br/>
            <input type="text" name="username"   value={this.state.image} onChange={this.handleImageChange}/>
        </label>
        
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' onClick={()=>this.onClickHandler()}>
        <Icon name='checkmark' />   add
      </Button>
    </Modal.Actions>
  </Modal>
        )
    }
} 
const mapStateToProps = (state) => ({
  menu:state.menu
})
const mapDispatchToProps = (dispatch) => ({
  addMenu: (added) => dispatch(addToApi(added)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToMenu);

