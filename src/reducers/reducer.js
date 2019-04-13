import { actionType } from '../actions/actions';

const initialState = {
	properties: [
		{
			id: 1,
			title: 'Hello',
		},
		{
			id: 2,
			title: 'World',
		},
	],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.UPDATE_PROPERTY: {
			const { id, title } = action.payload;
			return {
				properties: state.properties.map(property => {
					if (property.id === id) {
						property.title = title;
					}
					return property;
				}),
			};
		}
		default:
			return state;
	}
};
