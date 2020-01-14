import React, {Component} from 'react'
import CalanderDate from 'react-calendar'

class Calander extends Component {
    constructor(){
        super()

        this.state= {
            date: new Date(),
            display: false
        }
    }
    onChange = date => this.setState({ date })
    displayClick = (e) => {
        e.preventDefault()
        
    }
    render(){
        return(
            <div>
                <button onClick={this.displayClick}>~Click this button I dare you!~</button>
                <div className={this.state.display === false ? 'calenderDisplayNone' : 'calenderDisplay'} >
                    <CalanderDate 
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
            </div>
        )
    }
}

export default Calander