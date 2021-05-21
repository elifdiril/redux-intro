import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {increaseCounter} from '../redux/actions/counterActions'
import {connect} from "react-redux"
import { Button } from 'reactstrap';

 class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <Button size="sm" block color="success" onClick={e=>{
                    this.props.dispatch(increaseCounter());
                }}>
                    Increase 1
                </Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter);
