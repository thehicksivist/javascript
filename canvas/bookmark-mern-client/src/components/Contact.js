import React, { Component } from 'react'
import axios from 'axios'

const serverApi = "http://localhost:3001"

class Contact extends Component {

    changeNewBookmark = (event) => {
        this.setState({ newBookmark: event.target.value })
    }
    
    createNewBookmark = (event) => {
        event.preventDefault()
        // Post the new student to our server
        axios.post(serverApi, { bookmark: this.state.newBookmark })
        .then((response) => {
        // Success! Add the new student to our array and clear the input
        const bookmarks = [...this.state.bookmarks, response.data]
        this.setState({ bookmarks, newBookmark: '' })
        })
    }

    render() {
        return (
            <div>
        <h1>Add </h1>
        <form onSubmit={this.createNewBookmark}>
        <label>New Bookmark:</label><input value={newBookmark} onChange={this.changeNewBookmark} />
        </form>

        </div>
        )
    }
}

export default Contact