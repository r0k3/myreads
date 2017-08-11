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
        return (
            <div className="book-shelf-changer">
                <select value={myshelf} onChange={this.handleChange}>
                    <option value="none" disabled>Move to...</option>
                    { (myshelf !== 'currentlyReading') && <option value="currentlyReading">Currently Reading</option>}
                    { (myshelf !== 'wantToRead') && <option value="wantToRead">Want to Read</option>}
                    { (myshelf !== 'read') && <option value="read">Read</option>}
                    { (myshelf !== 'none') && <option value="none">None</option>}
                </select>
            </div>)
    }
}

export default BookshelfChanger;
