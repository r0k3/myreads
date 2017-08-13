import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {Bookshelves} from './Bookshelf';

const filterOnShelf = (shelf) => {
    return (book) => book.hasOwnProperty('shelf') ? book.shelf === shelf : shelf === 'none'
};


class BookList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    };

    render() {


        const booksCurrentlyReading = this.props.books.filter(filterOnShelf('currentlyReading'));
        const booksWantToRead = this.props.books.filter(filterOnShelf('wantToRead'));
        const booksRead = this.props.books.filter(filterOnShelf('read'));
        // const booksNoShelf = this.props.books.filter(filterOnShelf('none'));

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelves shelves={[
                            ["Currently Reading", booksCurrentlyReading],
                            ["Want to Read", booksWantToRead],
                            ["Read", booksRead]]}
                                     onShelfChange={this.props.onShelfChange}/>
                    </div>
                </div>
                <div className='open-search'><Link to='/search'>Add a Book</Link></div>

            </div>
        )
    }
}

export default BookList;
