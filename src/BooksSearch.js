import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {Bookshelf} from "./Bookshelf";


class BookSearch extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        searchFunc: PropTypes.func.isRequired,
        onShelfChange: PropTypes.func.isRequired
    };

    state = {
        searchQuery: '',
        searchResult: []
    };


    handleSearch = (event) => {
        event.preventDefault();
        if (this.state.searchQuery) {
            this.props.searchFunc(this.state.searchQuery, 20).then(result => {
                    const foundBooks = result.error ? [] : result;
                    const existingBookIds = new Set(this.props.books.map((book) => book.id));
                    const foundBookIds = new Set(foundBooks.map((book) => book.id));
                    this.setState({
                        searchResult: [
                            ...this.props.books.filter(book => foundBookIds.has(book.id)),
                            ...foundBooks.filter(book => !existingBookIds.has(book.id))]
                    });
                }
            )
        }
    };

    handleOnChange = (event) => {
        this.setState({searchQuery: event.target.value});
    };

    render() {

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <form onSubmit={this.handleSearch}>
                            <div className="search-books-input-wrapper">
                                <input type="text" //placeholder="Search by title or author"
                                       value={this.state.searchQuery}
                                       onChange={this.handleOnChange}/>
                            </div>
                        </form>
                    </div>
                    <div className="search-books-results">
                        <Bookshelf title="Search Results"
                                   books={this.state.searchResult}
                                   onShelfChange={this.props.onShelfChange}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default BookSearch;
