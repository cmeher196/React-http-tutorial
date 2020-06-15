import React, { Component } from 'react'
import axios from 'axios';

class PostData extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        console.log('this is event.name', e.target.name);
        console.log('this is target.value', e.target.value);

        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted.....', this.state);
       
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(res => {
                console.log(res);

            }).catch(err => {
                console.log(err);

            })

    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='userId'
                        value={userId}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='body'
                        value={body}
                        onChange={this.handleChange}
                    />
                    <input
                        type='submit'
                        value='Submit'
                    />
                </form>
            </div>
        )
    }
}

export default PostData;