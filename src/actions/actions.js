export const actionType = {
	UPDATE_PROPERTY: 'UPDATE_PROPERTY',
};

export const updateState = newData => {
	return {
		type: actionType.UPDATE_PROPERTY,
		payload: newData,
	};
};
