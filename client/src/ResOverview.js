import React, { Component } from "react"
import "./styles/ResOverview.css"
import axios from "axios"

// let endWeekDay = "NA"
// let endMonth = "NA"
// let endDay = "NA"
// let endYear = "NA"

class ResOverview extends Component {
    constructor(props){
        super()
        this.state = {
            startWeekDay: "",
            startMonth: "",
            startDay: "",
            startYear: "",
            endWeekDay: "",
            endMonth: "",
            endDay: "",
            endYear: "" 
        }
    }
    componentDidUpdate(props){
        if(props !== this.props){
    // onChange = (e, props) => {
    //      // e.preventDefault()
            this.setState({
                startWeekDay: this.props.date.toString().split(" ")[0],
                startMonth: this.props.date.toString().split(" ")[1],
                startDay: this.props.date.toString().split(" ")[2],
                startYear: this.props.date.toString().split(" ")[3],
                endWeekDay: "",
                endMonth: "",
                endDay: "",
                endYear: ""
            })
            if(this.props.date.length === 2){
                this.setState({
                    endWeekDay: this.props.date[1].toString().split(" ")[0],
                    endMonth: this.props.date[1].toString().split(" ")[1],
                    endDay: this.props.date[1].toString().split(" ")[2],
                    endYear: this.props.date[1].toString().split(" ")[3]
                })
            }
        }
    }
        
        
        
        // startWeeekDay = props.date.toString().split(" ")[0] 
        // startMonth = props.date.toString().split(" ")[1]
        // startDay = props.date.toString().split(" ")[2]
        // startYear = props.date.toString().split(" ")[3]
        // if(props.date.length === 2){
            //      endWeekDay = props.date[1].toString().split(" ")[0]
            //      endMonth = props.date[1].toString().split(" ")[1]
            //      endDay = props.date[1].toString().split(" ")[2]
            //      endYear = props.date[1].toString().split(" ")[3]
            
            
            handleSubmit = e => {
                e.preventDefault()
                if(this.props.date.length !== 2){
                    axios.post("/booking",{
                        startWeekDay: this.state.startWeekDay,
                        startMonth: this.state.startMonth,
                        startDay: this.state.startDay,
                        startYear: this.state.startYear
                    })
                    .then( () => {
                        // props.history.push('/upload')
                    })
                    .catch({
                        
                    })
                }else if(this.props.date.length === 2){
                    axios.post("/booking", {
                        startWeekDay: this.state.startWeekDay,
                        startMonth: this.state.startMonth,
                        startDay: this.state.startDay,
                        startYear: this.state.startYear,
                        endWeekDay: this.state.endWeekDay,
                        endMonth: this.state.endMonth,
                        endDay: this.state.endDay,
                        endYear: this.state.endYear
                    })
                    .then( () =>{
                        // props.history.push('/upload')
                    })
                    .catch({
                        
                    })
                }
                // console.log("we clicked it")
                // console.log(this.props.date)
            }
            
            render(){
                // console.log(this.state)
                return (
                    <div>
                <button onClick = {this.handleSubmit}>sub</button>
            </div>
        )
    }
}
export default ResOverview