import React, { Component } from 'react'
import CreditCardInput from 'react-credit-card-input';

class Information extends Component {
    constructor(){
        super()
        this.state={
            number: '',
            cvc: '',
            expire: ''
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
            <div className='payment'>
                <CreditCardInput
                cardNumberInputProps={{ name: 'number', value: this.state.number, onChange: this.handleChange }}
                cardExpiryInputProps={{name: 'expire', value: this.state.expire, onChange: this.handleChange }}
                cardCVCInputProps={{name: 'cvc', value: this.state.cvc, onChange: this.handleChange }}
                fieldClassName="input"
                />
            </div>
        )
    }
}

export default Information