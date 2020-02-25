import React from "react"
import "./styles/ResOverview.css"
import axios from "axios"

let endWeekDay = "NA"
let endMonth = "NA"
let endDay = "NA"
let endYear = "NA"

    const ResOverview = props => {

    let startWeeekDay = props.date.toString().split(" ")[0] 
    let startMonth = props.date.toString().split(" ")[1]
    let startDay = props.date.toString().split(" ")[2]
    let startYear = props.date.toString().split(" ")[3]
    if(props.date.length === 2){
         endWeekDay = props.date[1].toString().split(" ")[0]
         endMonth = props.date[1].toString().split(" ")[1]
         endDay = props.date[1].toString().split(" ")[2]
         endYear = props.date[1].toString().split(" ")[3]
    }

        const handleSubmit = e => {
            e.preventDefault()
            if(props.date.length !== 2){
                axios.post("/booking",{
                    startWeekDay: startWeeekDay,
                    startMonth: startMonth,
                    startDay: startDay,
                    startYear: startYear
                })
                .then( () => {
                    // props.history.push('/upload')
                })
                .catch({
                
                })
            }else if(props.date.length === 2){
                axios.post("/booking", {
                    startWeekDay: startWeeekDay,
                    startMonth: startMonth,
                    startDay: startDay,
                    startYear: startYear,
                    endWeekDay: endWeekDay,
                    endMonth: endMonth,
                    endDay: endDay,
                    endYear: endYear
                })
                .then( () =>{
                    // props.history.push('/upload')
                })
                .catch({

                })
            }
        // console.log("we clicked it")
        console.log(props.date)
    }

    return (
        <div>
            <button onClick = {handleSubmit}>sub</button>
        </div>
    )
}

export default ResOverview