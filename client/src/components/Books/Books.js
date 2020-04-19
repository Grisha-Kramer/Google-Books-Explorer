import React, { Component } from "react"
import Search from "../../pages/Search"
import BookList from "../BookList/BookList"
import request from "superagent";

class Books extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: [],
      searchField: ""
    }
  }

  searchBook = (e) => {
    e.preventDefault()
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField})
      .then((data) => {
        console.log(data)
        this.setState({ books: [...data.body.items]})})

  }

  handleSearch = (e) => {
    console.log(e.target.value)
    this.setState({ searchField: e.target.value })
  }

  render() {
    return (
      <div>
        <Search searchBook={this.searchBook} handleSearch={this.handleSearch} />
        <BookList books={this.state.books}/>
      </div>
    )
  }
}

export default Books