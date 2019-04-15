const Utility = require('../utility/utility');

// Trivial cache system on the data retriever method.
let memoryCacheForFakeData, memoryCacheForSortedData;

const appRouter = function(app) {
	app.get('/api/notifications', async function(req, res) {
		const data = await retrieveData();
		res.json(data);
	});
};

const retrieveData = async () => {
	// If nothing in the memory retrieve the file from the file.
	if (!memoryCacheForFakeData) {
		memoryCacheForFakeData = await Utility.readJsonData('./server/fakeNotification.json');
	}
	// If nothing in the memory sort the data once and then use the cache from the memory.
	if (!memoryCacheForSortedData) {
		// sort the data to facilitate the work of the clients.
		memoryCacheForSortedData = Utility.sortDataForFrontend(memoryCacheForFakeData);
	}
	return memoryCacheForSortedData;
};

module.exports = appRouter;
