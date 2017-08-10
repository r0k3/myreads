import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './App.css'
import * as BooksAPI from './BooksAPI';
import Booklist from './Booklist';

class BooksApp extends React.Component {

    state = {
        showSearchPage: false,
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
                BooksAPI.get(book.id).then( (modbook)=> {
                    const books = this.state.books.filter((b) => b.id !== book.id);
                    this.setState({books: books.concat([modbook])});
                });
            })
    };

render()
{
    return (
        <div className="app">
            {this.state.showSearchPage ? (
                <div className="search-books">
                    <div className="search-books-bar">
                        <a className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</a>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
            ) : (
                <Booklist books={this.state.books} onShelfChange={this.handleBookshelfChange}/>
            )}
        </div>
    )
}
}

export default BooksApp
