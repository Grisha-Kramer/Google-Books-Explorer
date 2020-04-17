import React, { Component } from 'react'
import Search from "./pages/Search"

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchField: ""
    }
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value})
  }
  render() {
    return (
      <div>
        <Search handlesearch={this.handleSearch} />

      </div>
    )
  }
}
