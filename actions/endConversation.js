'use strict';
<<<<<<< HEAD

const endConversation = ({sessionId, context, entities}) => {
    return new Promise((resolve, reject) => {
        context.jobDone = true; 
        return resolve(context);
    });

}

module.exports = endConversation;
=======
const endConversation = ({sessionId, context, entities}) => {
  return new Promise((resolve, reject) => {
    context.jobDone = true;
    return resolve(context);
  });
}

module.exports = endConversation;
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
