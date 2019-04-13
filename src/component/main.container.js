import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateState } from '../actions/actions';
import MainPresentational from './main.presentational';

// Map the state from the store to the state of the component.
const mapStateToProps = state => {
	return {
		properties: state.properties,
	};
};

// map a dispatch action to the props of the component
const mapDispatchToProps = dispatch => {
	return {
		updateProperty: newData => dispatch(updateState(newData)),
	};
};

class MainContainer extends Component {
	clickHandler = id => {
		this.props.updateProperty({ id, title: 'Whatcha gonna do ' });
	};

	render() {
		const { properties } = this.props;
		return <MainPresentational properties={properties} clickHandler={this.clickHandler} />;
	}
}

// Allow to pass the state from the store to the state of the component.
const Main = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainContainer);

MainContainer.propTypes = {
	properties: PropTypes.array,
	updateProperty: PropTypes.func,
};

export default Main;
