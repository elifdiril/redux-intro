import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {decreaseCounter} from '../redux/actions/counterActions'
import {connect} from "react-redux"
import { Button } from 'reactstrap';

class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <Button size="sm" block color="danger" onClick={e=>{
                    this.props.dispatch(decreaseCounter());
                }}>
                    Decrease 1
                </Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter);