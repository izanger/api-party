import React, { Component } from 'react'
import './ThisDayInfo.css'

class ThisDayInfo extends Component {
    constructor(props) {
        super(props)
        //this.fetchUserData(props)
    }

    state = {
        info: {
            data: ''
        },
        text: '',
        count: 1,
        year: '',
    }

    //Need this extenstion to make it work, for some reason.... : https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US
    fetchUserData(props) {
        fetch(`http://history.muffinlabs.com/date/${props.match.params.month}/${props.match.params.day}`)
          .then(response => response.json())
          .then(info => this.setState({ info }, () => {
              const text = this.state.info.data.Events[0].text
              this.setState({ text })
              const year = this.state.info.data.Events[0].year
              this.setState({ year })
        }))  
        document.getElementById("nextEventButton").style.visibility = "visible";
        document.getElementById("eventText").style.visibility = "visible";
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if(locationChanged) {
            let count = 1
            this.setState({ count })
            this.fetchUserData(nextProps)
        }
    }

    handleClick = (ev) => {
        if(this.state.count > (this.state.info.data.Events.length - 1)){
            return
        }
        const year = this.state.info.data.Events[this.state.count].year
        const text = this.state.info.data.Events[this.state.count++].text
        this.setState({ text, year})
        
        
    }
    
    render () {
        return ( 
            <div className="thisday-info">
                <h4 id="eventText" visibility="hidden">{this.state.year} : {this.state.text}</h4>
                <button type="submit" id="nextEventButton" visibility="hidden" onClick={this.handleClick}>Next Event</button>
            </div>
        )
    }
}

export default ThisDayInfo