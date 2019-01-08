import React, { Component } from 'react'
import axios from 'axios'

class Bookmarks extends Component {

    state = {
        bookmarks: []
    }

    render() {
        
        return (
            <div className="App">
                <h1>Bookmarks</h1>
                <ul>
                    {/* return the list of bookmarks as list items */}
                </ul>
            </div>
        )
    }
}

export default Bookmarks