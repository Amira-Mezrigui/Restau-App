import React, { Component } from 'react';
import {getMenuFromApi, removeMenu} from '../../actions/menuAction'
import {removeFromApi} from '../../actions/menuAction'
import {editToApi} from '../../actions/menuAction'
import { Grid, Image, Divider } from 'semantic-ui-react'
import { AddToMenu } from './addToMenu'
import {connect} from 'react-redux'

export class AdminInterface extends Component {
  constructor(props){
    super(props);
    this.state={
      isClicked:false,
      food:this.props.menu.food,
      price:this.props.menu.price,
    }
  }
  //get menu from API
  componentDidMount() {
    this.props.getMenu();
  } 
  // Delete from API
  delete = (id) =>{
  window.location.reload(true)
  this.props.removeMenu(id);
  } 
  // EDIT to API
  handleFoodChange = event => {
    this.setState({ food: event.target.value });
  }
handlePriceChange = event => {
    this.setState({ price: event.target.value });
  }
  edit = (id) =>{
  if(this.state.isClicked==false){
    this.setState({isClicked:true})
  }
  else if(this.state.isClicked){
  this.props.editMenu(id,{
    "food":this.state.food,
    "price":this.state.price,
    "image":this.props.menu.image
  })
  this.setState({isClicked:false})
  }
    } 
  render() {
    return (
      <Grid>
      <Grid.Column width={4}>
        <Image src='https://boltonpizzapanini.ca/wp-content/uploads/2018/10/pasta.png' />
      </Grid.Column>
      
<Grid.Column width={9}>
{this.props.menu.map(el =>
      <Grid.Column>
      <Image src={el.image} size='tiny' verticalAlign='middle' />{' '}
      {(this.state.isClicked==true)?(
        <div>
        <label> Modifier le plat : <br/>
        <input type="text" name="name"  onChange={this.handleFoodChange}/>
        </label> 
        <label> Modifier le prix: <br/>
        <input type="text" name="username"  onChange={this.handlePriceChange}/>
        </label>
        </div>
      ):<div><span>{el.food}, {el.price} Dt</span><br/></div>
      }
          <button onClick={()=> this.delete(el.id)}>✖️</button>
          <button onClick={()=>this.edit(el.id)}>... </button>
      
      <Divider />
    </Grid.Column>
  )}
  </Grid.Column>
  <Grid.Column width={3}>
  <Image src='https://png.pngtree.com/templates/md/20180521/md_5b026d25857ed.jpg' />
  <AddToMenu/>
</Grid.Column>
</Grid>
      
    );
  }
}
const mapStateToProps = (state) => ({
    menu:state.menu
})
const mapDispatchToProps = (dispatch) => ({
    getMenu: () => dispatch(getMenuFromApi()),
    removeMenu: (res) => dispatch(removeFromApi(res)),
    editMenu: (id,res) => dispatch(editToApi(id,res)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AdminInterface)


