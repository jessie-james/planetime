import React from 'react';

import StartTimeMenu from "./StartTimeMenu";
import EndTimeMenu from "./EndTimeMenu";
import DateSelect from './DateSelect'
import CalendarDate from 'react-calendar'
import {v4} from 'uuid'

class Cart extends React.Component {
    state = {
        date: new Date(),
        // selectedDates: [],
        startTime: "",
        startDate: new Date(),
        endTime: "",
        endDate: new Date(),
        // bookingStart: "",
        // bookingEnd: "",
        // startTimeSelected: false,
        // selectedDates: this.props.selectedDates,
    }


    setTime = (type, time) => {
        switch (type) {
            case "start":
                this.setState({
                    startTime: time
                }, () => console.log("start time  has been updated", this.state.startTime))
                break;
            case "end":
                this.setState({
                    endTime: time
                }, () => console.log("end time has been updated", this.state.endTime))
                break;
        }
    }
    setDate = (type, date) => {
        switch (type) {
            case "start":
                this.setState({
                    startDate: date
                }, () => console.log("start date has been updated", this.state.startDate))
                break;
            case "end":
                this.setState({
                    endDate: date
                }, () => console.log("end date has been updated", this.state.endDate))
        }
    }

    createBooking = () => {
        const startDate = this.state.startDate
        const endDate = this.state.endDate

        const startTime = this.state.startTime.split(":")
        const endTime = this.state.endTime.split(":")

        const bookingStart = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(),startTime[0], startTime[1])
        const bookingEnd = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endTime[0], endTime[1])
        console.log(bookingStart)
        console.log(bookingEnd)
        // console.log(bookingEnd)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.selectedDates !== this.state.selectedDates) {
            this.setState({
                selectedDates: this.props.selectedDates
            })
        }
        console.log("cartdate state updated")
    }


    dates = this.state.selectedDates

    // renderDates = this.dates.map(date => {
    //     return (
    //         <div>
    //             <StartTimeMenu/>
    //             <EndTimeMenu/>
    //         </div>
    //     )
    // })

    handleClickRemove = (date) => {
        this.props.removeSelectedDate(date)
    }

    render() {
        console.log("startDate", this.state.startDate)
        console.log("startMonth", this.state.startDate.getFullYear(), this.state.startDate.getMonth(), this.state.startDate.getDate())
        return (
            <div className={"cart"}>

                <div className="container">
                    <h1 className="cart__price">$175 per hour</h1>
                    From:
                    <div className="cart__date-time-container">
                        <DateSelect type={"start"} setDate={this.setDate}/>
                        <StartTimeMenu setTime={this.setTime}/>
                    </div>
                    To:
                    <div className="cart__date-time-container">
                        <DateSelect type={"end"} setDate={this.setDate}/>
                        <EndTimeMenu setTime={this.setTime}/>
                    </div>

                    {/*{this.state.selectedDates.map(date => {*/}
                    {/*    console.log(date)*/}
                    {/*    return (*/}
                    {/*        <div className={"cart__date"}>*/}
                    {/*            <p>{date.toLocaleString()} <span className={"cart__remove-date"}*/}
                    {/*                                             onClick={() => this.handleClickRemove(date)}>Remove Date</span>*/}
                    {/*            </p>*/}
                    {/*            <div className={"cart__time-block-container"}>*/}
                    {/*                <StartTimeMenu setTime={this.setTime}/>*/}
                    {/*                <EndTimeMenu setTime={this.setTime}/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*})}*/}
                    <button onClick={this.createBooking}>Book NOW</button>
                </div>

            </div>
        )
    }
}

export default Cart