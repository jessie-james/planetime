import React, { Component } from 'react';

class Information extends Component {
    constructor(){
        super()

        this.state = {
            number: '',
            cvv: '',
            day: '',
            year: '',
        }
    }
        handleChange = (e) => {
            const {name, value} = e.target
            this.setState({
                [name]: value
            })
        }

    render() {
        return (
            <div>
                <input name='number'  type="number"/>
                <input name='cvv' type="number"/>
                <input name='day' type="number"/>
                <input name='year' type="number"/>
            </div>
        );
    }
}

export default Information;