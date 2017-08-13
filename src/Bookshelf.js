import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";


class Bookshelf extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    };

    render() {

        const {books} = this.props;

        return (
            books &&
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}><Book book={book} onShelfChange={this.props.onShelfChange}/></li>))}
                    </ol>
                </div>
            </div>
        )
    }
}

class Bookshelves extends Component {

    static propTypes = {
        shelves: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="bookshelf">
                {this.props.shelves.map(([title, books]) => (
                        <Bookshelf key={title} title={title}
                                   books={books}
                                   onShelfChange={this.props.onShelfChange}/>
                    )
                )}
            </div>
        )
    }
}


module.exports = {
    Bookshelf: Bookshelf,
    Bookshelves: Bookshelves
};
