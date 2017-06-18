'use strict';
<<<<<<< HEAD

const moment = require('moment');
module.exports = (agenda, f) => {
    return agenda.define('createReminder', job => {
        //Extract fbid, datetime and task from job
        const {fbid, datetime, task} = job.attrs.data;
        //Get the FB user's timezone
    f.getProfile(fbid)
    .then(profile => {
        const {first_name, timezone} = profile;
        const UTC_Offset = moment.utc(datetime).subtract(timezone, 'hours');
        const timeDiff = UTC_Offset.diff(moment.utc());
        const scheduleTime = (timeDiff <= 0 ? moment.utc(datetime) : UTC_Offset).toDate();
        agenda.schedule(scheduleTime, 'reminder', {
            fbid,
            first_name,
            task
        });
    })
    .catch(err => console.log(error));
    //compute at offset from UTC before sheduling the task 
    });
}
        
=======
const moment = require('moment');
module.exports = (agenda, f) => {
  return agenda.define('createReminder', job => {
    // Extract fbid, datetime and task from job
    const {fbid, datetime, task} = job.attrs.data;

    // Get the FB User's timezone
    f.getProfile(fbid)
      .then(profile => {
        const {first_name, timezone} = profile;
        // Calculating the timezone offset datetime
        const UTC_Offset = moment.utc(datetime).subtract(timezone, 'hours');
        // Calculating the difference between now and the UTC_Offset datetime. If this is
        // 0 or below then we can use the UTC_datetime directly OR else use UTC_Offset
        const timeDiff = UTC_Offset.diff(moment.utc());
        // If timeDiff is 0 or below, then use UTC_datetime or else use UTC_Offset. also convert to date.
        const scheduleTime = (timeDiff <= 0 ? moment.utc(datetime) : UTC_Offset).toDate();
        // Setup the job
        agenda.schedule(scheduleTime, 'reminder', {
          fbid,
          first_name,
          task
        });
      })
      .catch(error => console.log(error));
    // Compute an offset from UTC before scheduling the task
  });
}
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
