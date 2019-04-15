import './header.scss';

import React from 'react';

const HeaderPresentational = props => {
	const { header, toogleModalHandler } = props;
	return (
		<div className="header column is-full">
			<div className="container">
				<div className="notification-btn grayscale" onClick={toogleModalHandler()}>
					{header.hasNotification ? (
						<div className="notification-counter noselect">
							{header.numberOfNotifications}
						</div>
					) : (
						undefined
					)}
				</div>
			</div>
		</div>
	);
};

export default HeaderPresentational;
