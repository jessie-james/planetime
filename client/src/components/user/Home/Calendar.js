import React, {Component} from 'react'
import CalendarDate from 'react-calendar'
import axios from 'axios'
import Cart from './Cart'
import Times from './Times'

class Calendar extends Component {

    state = {
        user: "",
        date: new Date(),
        selectedDates: [],
        bookingDates: [],
        display: false,
        selectRang: false,
        dayMode: false
    }
    onChange = date => {
        this.setState({
            date: date,
            selectedDates: [...this.state.selectedDates, this.state.date ]
        })

        console.log(this.state.selectedDates)
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


    //get all bookings
    getBookings = () => {
        axios.get("http://localhost:3000/booking")
            .then((response) => {
                this.setState({
                    bookings: response.data
                })
            }).catch((err) => {
            this.setState({
                errors: err.response.data
            })
        })
    }

    removeSelectedDate=(selectedDate)=>{
        const filter =(date)=>{
            console.log("selectedDate", selectedDate)
            console.log("filter date")
            return date !== selectedDate;
        }
        this.setState({
            selectedDates: this.state.selectedDates.filter(filter)
        })
        console.log("working remove selected dates")
        console.log("selectedDates",this.state.selectedDates)
    }

    componentDidMount() {
        this.getBookings()
    }

    render() {
        return (
            <div className="home__calendar">
                <div className="container">
                    Click a date below to start booking!
                    <div className={'calendarDisplay'}>
                        <CalendarDate
                            calendarType={"ISO 8601"}
                            onChange={this.onChange}
                            value={this.state.date}
                            selectRange={this.state.selectRang}
                        />
                    </div>
                </div>

                <Cart date={this.state.date} selectedDates={this.state.selectedDates} removeSelectedDate={this.removeSelectedDate}/>
            </div>
        )
    }
}

export default Calendar