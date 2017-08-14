import React, {Component} from 'react';
import PropTypes from 'prop-types';


class BookshelfChanger extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelfChange: PropTypes.func.isRequired,
    };

    handleChange = (event) => {
        this.props.onShelfChange(this.props.book, event.target.value);
    };

    render() {
        const myshelf = this.props.book.hasOwnProperty('shelf') ? this.props.book.shelf : 'none';
        const isCurrentlyReading = myshelf === 'currentlyReading';
        const isWantToRead = myshelf === 'wantToRead';
        const isRead = myshelf === 'read';
        const isNone = myshelf === 'none';
        return (
            <div className="book-shelf-changer">
                <select value={myshelf} onChange={this.handleChange}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">{isCurrentlyReading && '✓'}Currently Reading</option>
                    <option value="wantToRead">{isWantToRead && '✓'}Want to Read</option>
                    <option value="read">{isRead && '✓'}Read</option>
                    <option value="none">{isNone && '✓'}None</option>
                </select>
            </div>)
    }
}

export default BookshelfChanger;
