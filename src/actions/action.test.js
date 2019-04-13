import { reducer } from './../reducers/reducer';

it('reducer', () => {
	let state;
	state = reducer(
		{ properties: [{ id: 1, title: 'Hello' }, { id: 2, title: 'World' }] },
		{ type: 'UPDATE_PROPERTY', payload: { id: 1, title: 'Whatcha gonna do ' } }
	);
	expect(state).toEqual({
		properties: [{ id: 1, title: 'Whatcha gonna do ' }, { id: 2, title: 'World' }],
	});
});
