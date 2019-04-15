import '../like-notification/like-notification.scss';

import React from 'react';

import profilePicture from '../../assets/images/pp.jpg';
import { processName, truncString } from './../../utility/utility';

const CommentItemPresentational = props => {
	const { notification } = props;
	// If user/users Like the post then we will retrieve the correct string to display in the modal
	const UserWhomCommented = processName(notification.comments);
	return (
		<React.Fragment>
			{UserWhomCommented ? (
				<div className="like-item">
					<div className="picture">
						<img src={profilePicture} alt={'fake profile picture' + notification.id} />
					</div>
					<div className="informations">
						<span className="name"> {UserWhomCommented} </span>
						{' commented'}
						<b> on your post </b> "
						{notification.comments.length > 1
							? truncString(notification.title, 20)
							: truncString(notification.comments[0].comment, 20)}
						"
					</div>
				</div>
			) : (
				undefined
			)}
		</React.Fragment>
	);
};

export default CommentItemPresentational;
