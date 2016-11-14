import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <h1>Select a book to get started</h1>
		}

		return (
			<div>
				<h3>Details for:</h3>
				<p><b>Title:</b> {this.props.book.title}</p>
				<p><b>Pages:</b> {this.props.book.pages}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);