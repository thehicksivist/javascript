import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    filter: '',
    songs: ['Permitting The Noble Dead To Descend To The Underworld', 'Papyrus Containing The Spell To Preserve It\'s Possessor Against Attacks From He Who Is In The Water', 'Xenochrist', 'Song Of The Crippled Bull']
  }

  updateFilter = (event)  => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const filteredSongs = this.state.songs.filter(song => song.toLowerCase().includes(this.state.filter))

    return (
      <div className="App">
        <h1>Songify</h1>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="search">Search for song: </label>
          <input id="search" onChange={this.updateFilter}/>
        </form>
        <ul>
          { filteredSongs.map(song => <li>{song}</li> )}
        </ul>
      </div>
    )
  }
}

export default App
