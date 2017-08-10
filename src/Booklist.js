import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

const filterOnShelf = (shelf) => {
    return (book) => book.shelf === shelf
};


class Booklist extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Currently Reading"
                                   books={this.props.books.filter(filterOnShelf('currentlyReading'))}
                                   onShelfChange={this.props.onShelfChange}/>
                        <Bookshelf title="Want to Read" books={this.props.books.filter(filterOnShelf('wantToRead'))}
                                   onShelfChange={this.props.onShelfChange}/>
                        <Bookshelf title="Read" books={this.props.books.filter(filterOnShelf('read'))}
                                   onShelfChange={this.props.onShelfChange}/>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default Booklist;
