// EndTimeMenu.js
// ==============================

// imports
import React from 'react'
import {timeArr} from '../_times'

// component
class StartTimeMenu extends React.Component {
    state = {
        menuToggle: false
    }

    handleClick = (e) => {
        const type = "end"
        const time = e.target.textContent
        this.setState({
            time: time
        })
        this.props.setTime(type, time)
        this.toggleMenu()
    }
    toggleMenu=()=>{
        this.setState({
            menuToggle: !this.state.menuToggle
        })
    }
    labelStyle = {
        height: "100px",
        overflowY: "scroll"
    }

    mapTimes = timeArr.map((time) => {
        return (

            <li className={"cart__time-option-list-item"} onClick={this.handleClick} key={time.key}>{time.hours}:{time.minutes}</li>

        )
    })


    render() {
        return (
            <div className={"cart__time-block-wrapper cart__time-block-wrapper--start"}>
                <div className={"cart__time-option-select"}>
                    <div className={`cart__time-option-selected `} onClick={this.toggleMenu}>
                        <p className={"cart__time-option-selected-text"}>{this.state.time ? this.state.time :"end time"}</p>

                        <p><span className="material-icons cart__time-option-selected-icon">arrow_drop_down</span></p>
                    </div>
                </div>
                <ul  className={`cart__time-option-drop-down ${!this.state.menuToggle && "cart__time-option-drop-down--closed" }`}>
                    {this.mapTimes}
                </ul>
            </div>
        )
    }

}

// exports
export default StartTimeMenu