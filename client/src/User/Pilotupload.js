import React from 'react';

const Pilotupload = () => {

    // function formSubmit(event) {
    // event.preventDefault();
    // emailjs.sendForm('naeaman_gmail_com', 'template_qQqf4uzW', this);
    // }


    return(
    
    <form enctype="multipart/form-data" method="post" onsubmit="formSubmit()">
    <label>Attach file:</label>
    <input type="file" name="my_file"/> 
    <input type="submit" value="Submit"/>
    </form>
    
    )
}

export default Pilotupload