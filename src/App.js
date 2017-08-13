import React from 'react';
import {Route} from 'react-router-dom';
import './App.css'
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import BookSearch from "./BooksSearch";

class BooksApp extends React.Component {

    state = {
        books: []
    };

    componentDidMount() {

        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    handleBookshelfChange = (book, shelf) => {
        BooksAPI.update(book, shelf).then(
            (res) => {
                // the result from the update API cal could be used to rearrange the bookshelves
                BooksAPI.get(book.id).then((modbook) => {
                    const books = this.state.books.filter((b) => b.id !== book.id);
                    this.setState({books: books.concat([modbook])});
                });
            })
    };

    render() {
        return (
            <div className="app">

                <Route exact path='/' render={() => (
                    <BookList books={this.state.books} onShelfChange={this.handleBookshelfChange}/>
                )}/>

                <Route path='/search' render={({history}) => (
                    <BookSearch books={this.state.books}
                                searchFunc={BooksAPI.search}
                                onShelfChange={this.handleBookshelfChange}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
