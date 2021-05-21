import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {increaseByTwoCounter} from '../redux/actions/counterActions'
import {connect} from "react-redux"
import { Button } from 'reactstrap';

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                 <Button size="sm" block color="success" onClick={e=>{
                    this.props.dispatch(increaseByTwoCounter());
                }}>
                    Increase 2
                </Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);