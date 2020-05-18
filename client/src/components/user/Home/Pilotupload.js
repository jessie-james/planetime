// PilotUpload.js
// ==============================

// imports
import React, {Component} from 'react';
import {storage} from '../../../components/user/Home/firebase/Firebase'

// component
class PilotUpload extends Component {
    constructor() {
        super()
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
        }

        handleChange = e => {
            if(e.target.files[0]){
                const image = e.target.files[0]
                this.setState(() => ({image}))
            }
        }

        handleUpload = e => {
            const {image} = this.state
            const uploadTask = storage.ref(`images/${image.name}`).put(image)
            uploadTask.on('state_changed', 
            (snapshot) => {
                // progress function
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({progress})
            }, 
            (error) => {
                //error function
                console.log(error)
            }, 
            () => {
                //complete function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url)
                    this.setState({url})
                })
            })
        }

        render() {
            return(
                <div className='upload-info'>
                    <p>
                    Please upload a copy of your pilot license:
                    </p>
                    <progress value={this.state.progress} max="100" />
                    <input type="file" onChange={this.handleChange} />
                    <button onClick={this.handleUpload} >Upload img</button>
                    <br /><br />
                    <img src={this.state.url || 'http://via.placeholder.com/150x150'} alt="Uploaded imgages" height="150" width="150" />
                </div>
            )
        
    }
}

// exports
export default PilotUpload