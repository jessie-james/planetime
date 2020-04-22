import React, {Component} from 'react'
import CalanderDate from 'react-calendar'

class Calander extends Component {
    constructor(){
        super()

        this.state= {
           // date: new Date(),
            display: false,
            selectRang: false,
            dayMode: false
        }
    }
    //onChange = date => this.setState({ date })

    displayClick = (e) => {
        e.preventDefault()
        this.setState({display: !this.state.display}) 
    }

    startSelct = (e) => {
        e.preventDefault()
        this.setState({
            selectRang: !this.state.selectRang,
            dayMode: !this.state.dayMode
        })}

    render(){
        return(
            <div>
                <button onClick={this.displayClick}>~Click this button I dare you!~</button>
                <div className={this.state.display === false ? 'calenderDisplayNone' : 'calenderDisplay'} >
                    <CalanderDate 
                        onChange={this.props.handleCalendarChange}
                        value={this.props.date}
                        selectRange={this.state.selectRang}
                        />
                <button onClick={this.startSelct}>Turn multiple day mode {this.state.dayMode === false ? 'on' : 'off'}</button>
                </div>
            </div>
        )
    }
}

export default Calander