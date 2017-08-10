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
        const myshelf = this.props.book.shelf;
        return (
            <div className="book-shelf-changer">
                <select value={myshelf} onChange={this.handleChange}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>)
    }
}

export default BookshelfChanger;
