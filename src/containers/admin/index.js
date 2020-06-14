import React, { Component } from 'react';
import {getMenuFromApi, removeMenu} from '../../actions/menuAction'
import {removeFromApi} from '../../actions/menuAction'
import { Grid, Image, Divider } from 'semantic-ui-react'
import { AddToMenu } from './addToMenu'
import {connect} from 'react-redux'

export class AdminInterface extends Component {
  //get menu from API
  componentDidMount() {
    this.props.getMenu();
  } 
  // Delete from API
  delete = (id) =>{
  window.location.reload(true)
  this.props.removeMenu(id);
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
      <span>{el.food}, {el.price} Dt</span><br/>
          <button onClick={()=> this.delete(el.id)}>✖️</button>
          <button>... </button>
      
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
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AdminInterface)


