import { fakeNotification } from '../utility/utility';

export const actionType = {
	UPDATE_NOTIFICATIONS: 'UPDATE_NOTIFICATIONS',
	HAS_NOTIFICATION: 'HAS_NOTIFICATION',
	TOOGLE_MODAL: 'TOOGLE_MODAL',
	ADD_NOTIFICATION: 'ADD_NOTIFICATION',
};

export const updateNotifications = notificationFeeds => {
	return {
		type: actionType.UPDATE_NOTIFICATIONS,
		payload: notificationFeeds,
	};
};

export const toogleModal = () => {
	return {
		type: actionType.TOOGLE_MODAL,
		payload: {},
	};
};

export const hasNotification = numberOfNotifications => {
	return {
		type: actionType.HAS_NOTIFICATION,
		payload: { numberOfNotifications },
	};
};

export const addNotification = () => {
	return {
		type: actionType.ADD_NOTIFICATION,
		payload: fakeNotification,
	};
};
