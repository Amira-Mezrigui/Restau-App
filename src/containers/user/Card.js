import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFromApi } from '../../actions/cardAction'
import { removeFromCard } from '../../actions/cardAction'
import { editQuantity } from '../../actions/cardAction'


export class Card extends Component {
    constructor(props){
        super(props);
        this.state={
        total:""
        }

    }
   
    componentDidMount(){
        this.props.getFromApi()
    }
    //delete from card
    delete =(id) =>{
        this.props.removeCard(id)
    }
    //decrement quantity
    decrement= (el) =>{
        if(el.quantity>1){
            this.props.editQ(el.id,{
                "image": el.image,
                "name": el.name,
                "price": el.price,
                "quantity": el.quantity-1,
                "totalPrice": parseInt(el.totalPrice)-parseInt(el.price)
            })   
        }
        else if(el.quantity==1){
            this.delete(el.id)
        }
    }

   
    render() {
        return (
        <div>
            <table className="table">
            <thead>
                <tr>
                 <th>Plat</th>
                 <th>prix</th>
                 <th>Quantité</th>
                 <th>+/-</th>
                 <th>le prix total </th>
                 <th>supprimer</th>
                </tr>
            </thead>
            <tbody>
            {this.props.card.map(el=>{
              return(
            <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.quantity}</td>
                <td>
                <button onClick={()=> this.decrement(el)}>-</button>
                    <button onClick={()=>
                    this.props.editQ(el.id,{
                        "image": el.image,
                        "name": el.name,
                        "price": el.price,
                        "quantity": el.quantity+1,
                        "totalPrice": parseInt(el.totalPrice)+parseInt(el.price)
                    })}>+</button>
                </td>
                <td>{el.totalPrice}</td>
                <td> <button onClick={()=>this.delete(el.id)}> x </button> <br/> </td>     
            </tr>)
                })}  
        </tbody>
        </table>
            <p>total : {this.props.total}</p>
    </div>
        )
    }
}

const mapStateToProps = (state) => ({
    card:state.card,
    total:state.card.reduce((total,el)=>total+parseInt(el.totalPrice),0)
})
const mapDispatchToProps = (dispatch) => ({
    getFromApi: () => dispatch(getFromApi()),
    removeCard: (res) => dispatch(removeFromCard(res)),
    editQ: (id,Q) => dispatch(editQuantity(id,Q))
  });
export default connect(mapStateToProps, mapDispatchToProps)(Card)
