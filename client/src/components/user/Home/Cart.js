import React from 'react';

import StartTimeMenu from "./StartTimeMenu";
import EndTimeMenu from "./EndTimeMenu";
import DateSelect from './DateSelect'
import CalendarDate from 'react-calendar'
import {v4} from 'uuid'
import axios from 'axios'
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
        const bookingData = {
            startDate: bookingStart.toISOString(),
            endDate: bookingEnd.toISOString()
        }
        axios.post(`http://localhost:3000/booking`, bookingData)


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

    handleClickRemove = (date) => {
        this.props.removeSelectedDate(date)
    }

    render() {
        console.log("startDate", this.state.startDate)
        console.log("startMonth", this.state.startDate.getFullYear(), this.state.startDate.getMonth(), this.state.startDate.getDate())
        return (
            <div className={`cart ${!this.props.mobileCartEnabled ? "cart--closed" : null}`}>

                <div className="container">
                    <h1 className="cart__price">$175 per hour</h1>
                    <label htmlFor="" className="cart__label">From:</label>
                    <div className="cart__date-time-container">
                        <DateSelect type={"start"} setDate={this.setDate}/>
                        <StartTimeMenu setTime={this.setTime}/>
                    </div>
                    <label htmlFor="" className="cart__label">To:</label>
                    <div className="cart__date-time-container">
                        <DateSelect type={"end"} setDate={this.setDate}/>
                        <EndTimeMenu setTime={this.setTime}/>
                    </div>
                    <p className="cart__important">
                        <span>*IMPORTANT* </span>   Only a $10 deposit is due at checkout. Hourly rate is due upon returning the plane. You will only be charged for the time that the plane is actually in the air.
                    </p>
                    <div className="cart__amount-due">
                        <p className="cart__amount-due-label">
                            Amount due now
                        </p>
                        <p className="cart__amount-due-price">
                            $10
                        </p>
                    </div>
                    <div className="cart__estimated-total">
                        <p className="cart__estimated-total-label">
                            Estimated Total (due upon return)
                        </p>
                        <p className="cart__estimated-total-price">

                        </p>
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
                    <button className={"cart__checkout"} onClick={this.createBooking}>Checkout</button>
                </div>

            </div>
        )
    }
}

export default Cart