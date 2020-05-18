// EmailButton.js
// ==============================

// imports
import React, {Component} from 'react';
	// import emailjs from 'emailjs-com';

// component	
class Emailbutton extends Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Kevin', email: 'naeaman@gmail.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_qQqf4uzW';
	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'naeaman_gmail_com', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
	return (
  	<form className="test-mailing">
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Write me a email to learn about the plane rental"
        	required
        	value={this.state.feedback}
        	className="email-mail-form"
      	/>
    	</div>
    	<input type="button" value="Submit" className="email-submit-button" onClick={this.handleSubmit} />
		<input type="file" name="my_file"/> 
  	</form>
	)
  }
}

// exports
export default Emailbutton