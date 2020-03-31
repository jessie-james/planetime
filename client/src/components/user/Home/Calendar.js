import React, {Component} from 'react'
import CalendarDate from 'react-calendar'

import Times from './Times'

class Calendar extends Component {

    state = {
        user: "",
        date: new Date(),
        bookingDates: [],
        display: false,
        selectRang: false,
        dayMode: false
    }
    onChange = date => {
        this.setState({
            date: date
        })
        // console.log(this.state.date)
    }
    displayClick = (e) => {
        e.preventDefault()
        this.setState({display: !this.state.display})
        console.log("success")
    }

    startSelect = (e) => {
        e.preventDefault()
        this.setState({
            selectRang: !this.state.selectRang,
            dayMode: !this.state.dayMode
        })
    }

    getTime = (e, date) => {

        date = this.state.date

        //Value from time button selection
        let time = e.target.value.split(",");
        //Start and end  are in 24 hour format e.g "02:30" (2:30AM). Split by ":".
        let start = time[0].split(":")
        let end = time[1].split(":")
        console.log(start, end)

        //Start and end date are new Date() with start and end time added
        let startDate = new Date(date.getFullYear(), date.getMonth(), date.getDay(), start[0], start[1])
        let endDate = new Date(date.getFullYear(), date.getMonth(), date.getDay(), end[0], end[1])
        console.log("Start Time", startDate)
        console.log("End TIme", endDate)

        //Booking Date - a booking date object consisting of start and end.
        const bookingDate = {
            start: startDate,
            end: endDate
        }
        this.setState({
            bookingDates: [...this.state.bookingDates, bookingDate]

        })
    }

    render() {
        console.log("Times", this.state.bookingDates)
        console.log(this.state.date)
        return (
            <div className="home__calendar">
                <div className={'calendarDisplay'}>
                    <CalendarDate
                        calendarType={"ISO 8601"}
                        onChange={this.onChange}
                        value={this.state.date}
                        selectRange={this.state.selectRang}
                    />
                    <Times getTime={this.getTime} date={this.date}{...this.state}/>
                </div>
            </div>
        )
    }
}

export default Calendar