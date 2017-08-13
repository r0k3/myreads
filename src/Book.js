import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from "./BookshelfChanger";


class Book extends Component {

    static propTypes = {
        onShelfChange: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    };

    render() {

        const {book} = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")`
                    }}></div>
                    <BookshelfChanger book={book} onShelfChange={this.props.onShelfChange}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
            </div>
        )
    }
}

export default Book
