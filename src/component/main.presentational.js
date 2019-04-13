import PropTypes from 'prop-types';
import React from 'react';

const MainPresentational = props => {
	const { properties, clickHandler } = props;
	return (
		<div>
			{properties.map(property => {
				return (
					<div key={property.id}>
						{property.title}
						<button onClick={() => clickHandler(property.id)}>
							{'Update' + property.id}
						</button>
					</div>
				);
			})}
		</div>
	);
};

MainPresentational.propTypes = {
	properties: PropTypes.array,
	clickHandler: PropTypes.func,
};

export default MainPresentational;
