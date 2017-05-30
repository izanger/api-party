import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './ThisDay.css'
import ThisDayInfo from './ThisDayInfo'
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
        const month = date.substring(5, 7)
        const day = date.substring(8, 10)
        this.setState({ day, month })

        this.props.history.push('/thisday/' + month + '/' + day)
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
                <Route exact path='/thisday' render={() => <h3>Enter a date to see historical events that occurred on that day</h3>} />
                <Route path='/thisday/:month/:day' component={ThisDayInfo} />
            </div>
        )
    }
}
export default ThisDay