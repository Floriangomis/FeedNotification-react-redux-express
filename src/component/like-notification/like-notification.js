import './like-notification.scss';

import React from 'react';

import profilePicture from '../../assets/images/pp.jpg';
import { processName, truncString } from './../../utility/utility';

const LikeItemPresentational = props => {
	const { notification } = props;
	// If user/users Like the post then we will retrieve the correct string to display in the modal
	const UserWhomLiked = processName(notification.likes);
	return (
		<React.Fragment>
			{UserWhomLiked ? (
				<div className="like-item">
					<div className="picture">
						<img src={profilePicture} alt={'fake profile picture' + notification.id} />
					</div>
					<div className="informations">
						<span className="name"> {UserWhomLiked} </span>
						{' Liked'}
						<b> your post </b> "{truncString(notification.title, 20)}"
					</div>
				</div>
			) : (
				undefined
			)}
		</React.Fragment>
	);
};

export default LikeItemPresentational;
