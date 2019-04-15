import { countNotificationNumber, processName, truncString } from './utility';

describe('Utility: processName', () => {
	it('should return a sentence with the correct 2 first name and then 3 others', () => {
		const mockData = [
			{ userId: '403f220c3d413fe9cb0b36142ebfb35d', name: 'Mary T. Price' },
			{ userId: '5497afbf9df3f6ff6f9ba11cdef5310f', name: 'Suoma Narjus' },
			{ userId: 'fa527981cbbcb070be95854985c3188f', name: 'Sandra Ortega' },
			{ userId: '4c18d43d4deccbac21a26c55f1033f53', name: 'William Hunt' },
			{ userId: '38be3079117301f2f61264d6e0fbf7db', name: 'An Mao' },
		];

		const result = processName(mockData);
		expect(result).toContain('Mary T. Price, Suoma Narjus and 3 others');
	});

	it('should return a sentence with the name of the user.', () => {
		const mockData = [{ userId: '403f220c3d413fe9cb0b36142ebfb35d', name: 'Mary T. Price' }];

		const result = processName(mockData);
		expect(result).toContain('Mary T. Price');
	});

	it('should return a sentence with the two name of the users.', () => {
		const mockData = [
			{ userId: '403f220c3d413fe9cb0b36142ebfb35d', name: 'Mary T. Price' },
			{ userId: '403f220c3d413fe9cb0b36142ebfb35d', name: 'Florian Gomis' },
		];

		const result = processName(mockData);
		expect(result).toContain('Mary T. Price and Florian Gomis');
	});
});

describe('Utility: truncString', () => {
	it('should return the string with 11 characters and "..." .', () => {
		const result = truncString('one sentence to test', 12);
		expect(result).toBe('one sentenc...');
	});
});

describe('Utility: countNotificationNumber', () => {
	it('should return the number of notification given a Notification object given.', () => {
		const mockData = [
			{
				id: 'b1638f970c3ddd528671df76c4dcf13e',
				title: 'Acme Inc dynamically scales niches worldwide',
				likes: [
					{ userId: '403f220c3d413fe9cb0b36142ebfb35d', name: 'Mary T. Price' },
					{ userId: '5497afbf9df3f6ff6f9ba11cdef5310f', name: 'Suoma Narjus' },
					{ userId: 'fa527981cbbcb070be95854985c3188f', name: 'Sandra Ortega' },
					{ userId: '4c18d43d4deccbac21a26c55f1033f53', name: 'William Hunt' },
					{ userId: '38be3079117301f2f61264d6e0fbf7db', name: 'An Mao' },
				],
				comments: [
					{
						userId: '5497afbf9df3f6ff6f9ba11cdef5310f',
						commentId: '46f72ffb3a5717dcd71e26369d1e13a5',
						name: 'Suoma Narjus',
						comment:
							'Acme remains one of my fave company ever! The way they scale is so dynamic that makes HTML5 look static!',
					},
				],
			},
			{
				id: '7d78ff348647b782cb3027d836d23e09',
				title: 'How to professionally administrate seamless growth strategies in 10 steps',
				likes: [
					{ userId: 'cc81a8b1fceb3306997be05426b668e4', name: 'Bojana Novaković' },
					{ userId: 'ac487e5866d80dfcb77a89f55d2b0055', name: 'Mr Smartypants' },
					{ userId: '13e175f3a6ce2f07451b697238202c2c', name: 'Katie Blackman' },
					{ userId: '9a1afe07885bac989383b7b145c516d6', name: 'Chuck Looij' },
					{ userId: '7bd3695eba3be49ef29bd423b12555bc', name: 'Hamish Sutcliffe' },
					{ userId: '084300a01df3060f41fad4700a70b6fe', name: 'Eugenio Bertè' },
				],
				comments: [],
			},
			{
				id: 'c4cfbe322bb834ada81719036f9b287b',
				title: 'How to distinctively leverage existing wireless ROI',
				likes: [],
				comments: [
					{
						userId: '7305d0a8bb9d7166b8d26ca856930b8d',
						commentId: '9c6adba459bca33ee8ae81e4b1ca420c',
						name: 'Ali Sage',
						comment: 'True! And after that they should functionalize core competencies',
					},
					{
						userId: 'f1333326efc51be3d620d80f72c55944',
						commentId: 'e1788fb8b05d79c793c2002d57e80182',
						name: 'Harold Lachlan',
						comment:
							"😩 I really disagree with the content of this post. I belive the the client should really try to synthesize internal or 'organic' sources before not after leveraging!",
					},
					{
						userId: 'f1333326efc51be3d620d80f72c55944',
						commentId: '410065f8dee7354ba6fa7f5552092657',
						name: 'Harold Lachlan',
						comment: "😂 That'll be the day!",
					},
				],
			},
			{
				id: 'de8b75335ba7e52e62c8227c6697def2',
				title:
					'This company enthusiastically deployed extensive values, the rest is history',
				likes: [{ userId: '38bbd19a89ac307cff5ab2b5bf83783a', name: '' }],
				comments: [],
			},
			{
				id: '57e0d6328c9287bd1b66bc327efbcdfa',
				title: 'Boom&Bust to uniquely coordinate standardized meta-services',
				likes: [],
				comments: [
					{
						userId: '9a1afe07885bac989383b7b145c516d6',
						commentId: 'a82f598e7723c68599e597b5939ad437',
						name: 'Chuck Looij',
						comment: 'Here we go again!',
					},
				],
			},
		];
		const result = countNotificationNumber(mockData);
		expect(result).toBe(17);
	});
});
