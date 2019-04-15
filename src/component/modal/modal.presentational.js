import './modal.scss';

import React from 'react';

import CommentItemPresentational from './../comment-notification/comment-notification';
import LikeItemPresentational from './../like-notification/like-notification';

const ModalPresentational = props => {
	const { modalState, notifications } = props;
	return (
		<React.Fragment>
			<div className="container">
				<div className={'arrow-modal ' + (modalState.open ? 'open' : '')} />
				<div className={'modal-container ' + (modalState.open ? 'open' : '')}>
					{notifications.map((notification, index) => {
						return (
							<React.Fragment key={index}>
								<LikeItemPresentational notification={notification} />
								<CommentItemPresentational notification={notification} />
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default ModalPresentational;
