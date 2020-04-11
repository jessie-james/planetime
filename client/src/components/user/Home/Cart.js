import React from 'react';

import StartTimeMenu from "./StartTimeMenu";
import EndTimeMenu from "./EndTimeMenu";

import {v4} from 'uuid'

class Cart extends React.Component {
    state = {
        startTime: "",
        endTime: "",
        startTimeSelected: false,
        selectedDates: [],

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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.setState({
                selectedDates: this.props.selectedDates
            })
        }
        console.log("cartdate state updated")
    }

    // renderDates = (dates)=>{
    //     dates = this.props.selectedDates
    //
    //    return dates.map(date=>{
    //         console.log("working")
    //         console.log(dates.length)
    //         return(
    //             <div>
    //                <StartTimeMenu/>
    //                <EndTimeMenu/>
    //             </div>
    //         )
    //     })
    // }
    dates = this.state.selectedDates
    renderDates = this.dates.map(date => {
        return (
            <div>
                <StartTimeMenu/>
                <EndTimeMenu/>
            </div>
        )
    })

    handleClickRemove = (date) => {
        this.props.removeSelectedDate(date)
    }

    render() {
        console.log(this.state)
        // console.log(this.state)
        return (
                <div className={"cart"}>
                    <div className="container">
                        {this.state.selectedDates.map(date => {
                            console.log(date)
                            return (
                                <div className={"cart__date"}>
                                    <p onClick={() => this.handleClickRemove(date)}>{date.toLocaleString()}</p>
                                    <div className={"cart__time-block-container"}>
                                        <StartTimeMenu setTime={this.setTime}/>
                                        <EndTimeMenu setTime={this.setTime}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

          </div>
        )
    }
}

export default Cart