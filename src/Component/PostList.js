import React, { Component } from 'react'
import axios from 'axios'

export default class PostList extends Component {

    constructor(props) {
        super(props)
        this.state = {
             post : []
        }
    }
    
    componentWillMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res);
            this.setState({
                post:res.data
            })
        }).catch(err =>{
            throw err
        })
    }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res=>{
    //        // console.log(res);
    //         this.setState({
    //             post:res.data
    //         },console.log(this.state.post)
    //         )
    //     }).catch(err =>{
    //         throw err
    //     })
    // }

    render() {
        const {post} = this.state;
        return (
            <div>
            {
                post.length?post.map(post=><div key={post.id}>{post.title}</div>) :null
            }
             </div>
         )
    }
}
