const fs = require('fs');
const util = require('util');
// transform this function to be able to use Await/Async.
const readFile = fileName => util.promisify(fs.readFile)(fileName, 'utf8');

const readJsonData = async urlFile => {
	let rawdata = await readFile(urlFile);
	return JSON.parse(rawdata);
};

const sortDataForFrontend = rawData => {
	const NotificationPosts = {
		numberOfNotifications: 0,
		notifications: [],
	};
	let counterNotifications = 0;

	rawData.fakeNotifications.map(notification => {
		// If we already added this specific post no need to add it just to add Like or comment.
		if (!checkIfPostAlreadyAdded(notification.post.id, NotificationPosts)) {
			NotificationPosts.notifications.push({
				id: notification.post.id,
				title: notification.post.title,
				likes: [],
				comments: [],
			});
		}
		// We retrieve the element in the NotificationPosts to be able to modify it.
		const postToUpdate = NotificationPosts.notifications.find(post => {
			return post.id === notification.post.id;
		});
		// Then we add like or comment inside the array for this particular post.
		switch (notification.type) {
			case 'Like':
				postToUpdate.likes.push({
					userId: notification.user.id,
					name: notification.user.name,
				});
				counterNotifications++;
				break;
			case 'Comment':
				postToUpdate.comments.push({
					userId: notification.user.id,
					commentId: notification.comment.id,
					name: notification.user.name,
					comment: notification.comment.commentText,
				});
				counterNotifications++;
				break;
			default:
				break;
		}
	});

	// Additional informations.
	NotificationPosts.numberOfNotifications = counterNotifications;

	return NotificationPosts;
};

const checkIfPostAlreadyAdded = (id, NotificationPosts) => {
	const result = NotificationPosts.notifications.filter(post => post.id === id);
	return result.length > 0;
};

module.exports = Utility = {
	readJsonData,
	sortDataForFrontend,
};
