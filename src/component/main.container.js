import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Config from '../config/config';
import { addNotification, hasNotification, toogleModal, updateNotifications } from './../actions/actions';
import { get } from './../utility/request';
import { countNotificationNumber } from './../utility/utility';
import HeaderPresentational from './header/header.presentational';
import ModalPresentational from './modal/modal.presentational';

// Map the state from the store to the state of the component.
const mapStateToProps = state => {
	return {
		notifications: state.notifications,
		modalState: state.modalState,
		header: state.header,
	};
};

// map a dispatch action to the props of the component
const mapDispatchToProps = dispatch => {
	return {
		toogleModal: () => dispatch(toogleModal()),
		updateNotifications: notificationsFeed => dispatch(updateNotifications(notificationsFeed)),
		hasNotification: numberOfNotifications => dispatch(hasNotification(numberOfNotifications)),
		addNotification: () => dispatch(addNotification()),
	};
};

class MainContainer extends Component {
	componentDidMount() {
		// Retrive the data from the back end.
		get(`${Config.apiUrl}/notifications`).then(data => {
			this.props.updateNotifications(data.data.notifications);
		});
	}

	componentWillReceiveProps(newState) {
		// Ensure that the notification number display is always in sync with the latest state in the store.
		if (newState.notifications.length !== this.props.notifications.length) {
			this.props.hasNotification(countNotificationNumber(newState.notifications));
		}
	}

	toogleModalHandler = () => {
		this.props.toogleModal();
	};

	addNotification = () => {
		this.props.addNotification();
	};

	render() {
		const { header, modalState, notifications } = this.props;
		return (
			<React.Fragment>
				<HeaderPresentational
					header={header}
					toogleModalHandler={() => this.toogleModalHandler}
				/>
				<ModalPresentational modalState={modalState} notifications={notifications} />

				<button
					onClick={() => {
						this.addNotification();
					}}
				>
					Add Notification
				</button>
			</React.Fragment>
		);
	}
}

// Allow to pass the state from the store to the state of the component.
const Main = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainContainer);

MainContainer.propTypes = {
	updateNotifications: PropTypes.func,
	hasNotification: PropTypes.func,
	toogleModal: PropTypes.func,
	addNotification: PropTypes.func,
	header: PropTypes.object,
	modalStater: PropTypes.object,
	modalState: PropTypes.object,
	notifications: PropTypes.array,
	'notifications.length': PropTypes.number,
};

export default Main;
