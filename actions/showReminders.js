'use strict';
<<<<<<< HEAD

const showReminders = (session, agenda) => {

    return ({sessionId, context, entities}) =>{
        return new Promise((resolve, reject) => {
            let {fbid} = session.get(sessionId);
            agenda.now('showReminders', {
                fbid
            });
            context.jobDone = true;

            return resolve(context);
        });
    }

}

module.exports = showReminders;
=======
const showReminders = (session, agenda) => {
  return ({sessionId, context, entities}) => {
    return new Promise((resolve, reject) => {
      let {fbid} = session.get(sessionId);
      agenda.now('showReminders', {
        fbid
      });

      context.jobDone = true;

      return resolve(context);
    });
  }
}

module.exports = showReminders;
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
