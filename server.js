'use strict';
const config = require('./config');
// create an API server
const Restify = require('restify');
const server = Restify.createServer({
<<<<<<< HEAD
	name: 'remindo'
=======
	name: 'remindO'
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
});
const PORT = process.env.PORT || 3000;

// FBeamer
const FBeamer = require('./fbeamer');
const f = new FBeamer(config.FB);

server.use(Restify.jsonp());
server.use(Restify.bodyParser());
server.use((req, res, next) => f.verifySignature(req, res, next));

<<<<<<< HEAD
//Agenda
const agenda = require('./agenda')(f);

//session
const session = require('./session');
//WIT Actions
const actions = require('./actions')(session, f, agenda);//invoke to pass the sesssion and f. to inject dependencies to any module
=======
// Agenda
const agenda = require('./agenda')(f);
// Session
const session = require('./session');
// WIT Actions
const actions = require('./actions')(session, f, agenda);
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa

// WIT.AI
const Wit = require('node-wit').Wit;
const wit = new Wit({
	accessToken: config.WIT_ACCESS_TOKEN,
	actions
});

<<<<<<< HEAD
//database
const pg = require('pg');

pg.defaults.ssl = true;

=======
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
// Register the webhooks
server.get('/', (req, res, next) => {
	f.registerHook(req, res);
	return next();
});

<<<<<<< HEAD
/**pg.connect(process.env.DATABASE_URL, function(err, client){
	if (err) throw err;
	console.log("connected to postgre");
	let rows = [];
	client
	.query(`SELECT id FROM testuser WHERE fb_id = '${fbid}' LIMIT 1 `)
	.n('row', function (row) {
		rows.push(row);
	})
	.on('end', () => {
		if(rows.length === 0){
			let sql = 'INSERT INTO testuser (fb_id, firstname)' + 'VALUES ($1, $2)';
			client.query(sql, [
				fbid, 
				first_name	
			])
		}
	})
})**/

agenda.on('ready', () => {

=======
agenda.on('ready', () => {
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
	// Handle incoming
	server.post('/', (req, res, next) => {
		f.incoming(req, res, msg => {
			const {
				sender,
				postback,
				message
			} = msg;

<<<<<<< HEAD
if(postback){
	const {
		schedule,
		fbid,
		id
	} = JSON.parse(postback.payload);
	agenda.now(schedule, {
		fbid, 
		id
	});
}

			if(message.text) {
				console.log("connected");
				// Process the message here
				let sessionId = session.init(sender);
				let {context} = session.get(sessionId);
				//Run WIT actions (converse API)
				wit.runActions(sessionId, message.text, context).then
				(ctx =>{
					//delete sessionId if the convo is over 				
					ctx.jobDone ? session.delete(sessionId) : session.update(sessionId, ctx);
				})
				.catch(error => console.log(`Error: ${error}`));
=======
			if(postback && !postback.payload.includes("menu")) {
					const {
						schedule,
						fbid,
						id
					} = JSON.parse(postback.payload);

					agenda.now(schedule, {
						fbid,
						id
					});
			}

			if((message && message.text) || (postback && postback.payload.includes("menu"))) {
				// Process the message here
				let sessionId = session.init(sender);
				let {context} = session.get(sessionId);
				let messageTxt = postback ? postback.payload.split(":")[1] : message.text;
				// Run WIT Actions (Converse API)
				wit.runActions(sessionId, messageTxt, context)
					.then(ctx => {
						// Delete session if the conversation is over
						ctx.jobDone ? session.delete(sessionId) : session.update(sessionId, ctx);
					})
					.catch(error => console.log(`Error: ${error}`));
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
			}

		});

		return next();
	});
<<<<<<< HEAD
	agenda.start();
});

=======

	agenda.start();
});

// Persistent Menu
f.showPersistent([
	{
		type: "postback",
		title: "My Reminders",
		payload: "menu:Show my reminders"
	}
]);
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa

// Subscribe
f.subscribe();

server.listen(PORT, () => console.log(`Bot running on port ${PORT}`));
<<<<<<< HEAD

=======
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
