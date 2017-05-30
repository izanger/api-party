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
        if(date.length !== 10)
            return
        console.log(date)
        const day = date.substring(5, 7)
        const month = date.substring(8, 10)
        // const s = {
        //     longDate: this.state.longDate,
        //     day: date.substr(5,7),
        //     month: date.substr(8,10)
        // }
        this.setState({ day, month }, () => console.log(this.state))
    }

    handleChange = (ev) => {
        const longDate = ev.currentTarget.value;
        this.setState({ longDate })

        // const s = {
        //     longDate: ev.currentTarget.value,
        //     day: this.state.day,
        //     month: this.state.month
        // }
        // this.setState(s)
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