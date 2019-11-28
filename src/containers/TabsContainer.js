import React, { Component } from 'react'
import API from "../services/api/API"
import Bills from "./BillsContainer"

export default class Tabs extends Component {

    state = {
        bills: []
    }

    componentDidMount(){
        API.getBills()
        .then(bills => this.setState({bills}))
    }

    render() {
        const { bills } = this.state
        return (
            <div>
                <Bills 
                    bills={bills}
                />
            </div>
        )
    }
}
