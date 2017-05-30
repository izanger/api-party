import React, { Component } from 'react'
import './ThisDay.css'
class ThisDay extends Component {
    constructor(props) {
        super(props)

    }
    state = {
        longDate: '',
        day: '',
        month: ''
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        let date = this.state.longDate
        console.log(date)
    }

    handleChange = (ev) => {
        const longDate = ev.currentTarget.value;
        this.setState({ longDate })
    }

    getdate = () => {
        const x = new Date().toDateInputValue()
        console.log(x)
        return x

    }
    render () {
        return (
            <div className="thisday">
                <h1 className="heading">This Day In History</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="date" id="d" onChange={this.handleChange} value={this.state.date}/>
                    <button type="submit">Look up date</button>
                </form>
            </div>
        )
    }
}
export default ThisDay