import React, { Component } from 'react';
import {getMenuFromApi} from '../actions/menuAction'
import {connect} from 'react-redux'

export class MenuContainer extends Component {
  componentDidMount() {
    this.props.getMenu();
  }  
  render() {
    return (
      <div className="container-fluid row">

        {this.props.menu.map(el =>
        
            <div className="card col-md-3">
            <div className="card-body">
                  <h4 className="card-title">{el.food}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Price, {el.price}</h6>
              
            </div>
            <img className="card-img-bottom" src={el.image} />
            <button >☑️</button>
            <button> ✖️ </button>
            </div>
        
            )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
    menu:state.menu
})
const mapDispatchToProps = (dispatch) => ({
    getMenu: () => dispatch(getMenuFromApi()),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
