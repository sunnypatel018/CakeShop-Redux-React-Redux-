import React from 'react'
import {connect} from 'react-redux'
import {buyIceCreame} from '../redux/icecream/ActionCreator'

function IceCreameContainer(props) {
    return (
        <div>
            <h2>Number of IceCreame - {props.numbersOfIceCreame}</h2>
            <button onClick={props.buyIceCreame}>Buy IceCreame</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numbersOfIceCreame: state.iceCreame.numbersOfIceCreame
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buyIceCreame: () => dispatch(buyIceCreame())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreameContainer);
