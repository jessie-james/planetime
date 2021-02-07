// DateSelect.js
// ==============================

// imports
import React from 'react'
import CalendarDate from 'react-calendar'

// component
class DateSelect extends React.Component {
    state = {
        date: new Date(),
        menuToggle: false
    }

    onChange = date => {
        const type = this.props.type
        this.setState({
            date: date
        })
        this.toggleMenu()
        this.props.setDate(type, date)
    }
    toggleMenu = () => {
        this.setState({
            menuToggle: !this.state.menuToggle
        })
    }
    render() {
        console.log(this.state.date)
        return (
            <div className={"cart__date-wrapper"}>
                <div className={"cart__date-select"} onClick={this.toggleMenu}>
                    <div className={`cart__date-selected `} onClick={this.toggleMenu}>
                        <p className={"cart__date-selected-text"}>{this.state.date ? this.state.date.toLocaleDateString() : "start date"}</p>

                        <p><span className="material-icons cart__date-selected-icon">arrow_drop_down</span></p>
                    </div>
                </div>
                <div className={`cart__calendar-drop-down ${!this.state.menuToggle && "cart__calendar-drop-down--closed"}`} >
                    <CalendarDate
                        onChange={this.onChange}
                        className={"calendar"}
                    />
                </div>
            </div>
        )
    }
}

//exports
export default DateSelect