import React, { Component } from 'react'

class ThisDayInfo extends Component {
    constructor(props) {
        super(props)
        //this.fetchUserData(props)
    }

    state = {
        x: {
            data: ''
        }
    }

    fetchUserData(props) {
        fetch(`http://history.muffinlabs.com/date/${props.match.params.month}/${props.match.params.day}`)
          .then(response => response.json())
          .then(x => this.setState({ x }, console.log(this.state)))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if(locationChanged) {
            this.fetchUserData(nextProps)
        }
    }
    
    render () {
        return ( 
            <div className="thisday-info">
                {this.state.events}
            </div>
        )
    }
}

export default ThisDayInfo