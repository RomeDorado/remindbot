'use strict';
if(process.env.NODE_ENV === 'production') {
	module.exports = {
		WIT_ACCESS_TOKEN: process.env.WIT_ACCESS_TOKEN,
		FB: {
			PAGE_ACCESS_TOKEN: process.env.PAGE_ACCESS_TOKEN,
			VERIFY_TOKEN: process.env.VERIFY_TOKEN,
			APP_SECRET: process.env.APP_SECRET
		},
		MONGO_URI: process.env.MONGOURI
	}
} else {
	module.exports = require('./development.json');
<<<<<<< HEAD
}
=======
}
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
