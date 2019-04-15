import { actionType } from './../actions/actions';

const initialState = {
	notifications: [],
	modalState: {
		open: false,
	},
	header: {
		hasNotification: false,
		numberOfNotifications: 0,
	},
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.TOOGLE_MODAL: {
			return Object.assign({}, state, {
				modalState: {
					open: !state.modalState.open,
				},
			});
		}
		case actionType.UPDATE_NOTIFICATIONS: {
			return Object.assign({}, state, { notifications: action.payload });
		}
		case actionType.HAS_NOTIFICATION: {
			return Object.assign({}, state, {
				header: {
					hasNotification: true,
					numberOfNotifications: action.payload.numberOfNotifications,
				},
			});
		}
		case actionType.ADD_NOTIFICATION: {
			const tmp = [...state.notifications];
			tmp.unshift(action.payload);
			return Object.assign({}, state, {
				notifications: tmp,
			});
		}
		default:
			return state;
	}
};
