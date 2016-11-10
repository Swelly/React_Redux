import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}
	
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// Take in state => return object (this.props.books)
function mapStateToProps(state) {
	// Whatever is returned will show up as the props
	// inside of BookList
	return {
		books: state.books	
	};
}

// connect (function)(component) => container!
// container is aware of the state
export default connect(mapStateToProps)(BookList);