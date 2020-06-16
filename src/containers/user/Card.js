import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFromApi } from '../../actions/cardAction'
import { removeFromCard } from '../../actions/cardAction'

export class Card extends Component {


    componentDidMount(){
        this.props.getFromApi()
    }
    render() {
        return (
            <div>
                {this.props.card.map(el=> 
                <div> 
                    <p>{el.id} </p> 
                    <p>{el.name} </p> 
                    <p>{el.price} </p> 
                    <button onClick={()=> this.props.removeCard(el.id)}> remove </button>
                </div> )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    card:state.card
})
const mapDispatchToProps = (dispatch) => ({
    getFromApi: () => dispatch(getFromApi()),
    removeCard: (res) => dispatch(removeFromCard(res))
  });
export default connect(mapStateToProps, mapDispatchToProps)(Card)
