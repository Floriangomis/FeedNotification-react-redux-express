// Not the best function I reckion but ... do the job and should be enough for this task :)
export const processName = arrayOfLikes => {
	let resultString,
		numberOfOthers = 0;

	if (arrayOfLikes.length === 0) {
		return undefined;
	}

	arrayOfLikes.map((like, index) => {
		// To prevent to display '' and x other due to missing name in data provided.
		const name = like.name && like.name !== '' ? like.name : 'John Doe';

		if (index === 0) {
			if (arrayOfLikes.length === 1) {
				return (resultString = name);
			}
			if (arrayOfLikes.length === 2) {
				return (resultString = name + ' and ');
			} else {
				return (resultString = name + ', ');
			}
		} else if (index === 1) {
			if (arrayOfLikes.length === 2) {
				return (resultString += name);
			} else {
				return (resultString += name + ' and');
			}
		} else {
			return numberOfOthers++;
		}
	});

	return `${resultString} ${
		arrayOfLikes.length === 1 || arrayOfLikes.length === 2 ? '' : numberOfOthers + ' others'
	}`;
};

// Return a truncate string witht the number of character specified as second arguments - 1.
export const truncString = (string, maxLenght) => {
	return string.length > maxLenght ? string.substr(0, maxLenght - 1) + '...' : this;
};

// Return the number of notification given an array of notification Post passed.
export const countNotificationNumber = notificationsArray => {
	let numberOfNotifications = 0;
	notificationsArray.map(notification => {
		notification.likes.map(() => {
			return numberOfNotifications++;
		});
		notification.comments.map(() => {
			return numberOfNotifications++;
		});
		return true;
	});
	return numberOfNotifications;
};

export const fakeNotification = {
	id: 'b1638f970c3ddd528671df76c4dcf1ee',
	title: 'The day I created a fake Notification.',
	likes: [
		{
			userId: '403f220c3d413fe9cb0b36142ebfbccc',
			name: 'Florian Gomis',
		},
	],
	comments: [],
};
