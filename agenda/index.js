'use strict';
<<<<<<< HEAD

const Agenda = require('agenda');
const {MONGO_URI} = require('../config');
const agenda = new Agenda({

    db: {
        address: MONGO_URI
    }   

=======
const Agenda = require('agenda');
const {MONGO_URI} = require('../config');
const agenda = new Agenda({
  db: {
    address: MONGO_URI
  }
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
});
const createReminder = require('./createReminder');
const showReminders = require('./showReminders');
const cancelReminder = require('./cancelReminder');
<<<<<<< HEAD
module.exports = (f) => {  
    //define agenda jobs
    agenda.define('reminder', job =>{
        const {fbid, first_name, task} = job.attrs.data;
        f.txt(fbid, `Hey, ${first_name}! Reminding you to ${task}!`)    
    });
    //create reminder    
    createReminder(agenda, f);
    
    //show reminders 
    showReminders(agenda, f);
    
    cancelReminder(agenda, f);
    return agenda;
}
=======

module.exports = (f) => {
  // Define Agenda jobs

  // Displaying a reminder
  agenda.define('reminder', job => {
    const {fbid, first_name, task} = job.attrs.data;
    f.txt(fbid, `Hey ${first_name}! Reminding you to ${task}!`);
  });

  // Create a reminder
  createReminder(agenda, f);

  // Show reminders
  showReminders(agenda, f);

  // Cancel Reminder
  cancelReminder(agenda, f);

  return agenda;
}
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
