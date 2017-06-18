'use strict';
<<<<<<< HEAD

const findById = (fbid, sessionStore) => {
    for(let [key, value] of sessionStore){
        if(value.fbid === fbid){
            return key;
        }
    }
}

const fetchEntity = (entities, entity) => {
    const val = entities && entities[entity] && 
    Array.isArray(entities[entity]) && 
    entities[entity].length > 0  && 
    entities[entity][0].value;

    if(!val){
        return null;
    }else{
        return typeof val === 'object' ? val.value : val; 
    }
}
module.exports = {
findById,
fetchEntity
}
=======
const findById = (fbid, sessionStore) => {
  for(let [key, value] of sessionStore) {
    if(value.fbid === fbid) {
      return key;
    }
  }
}

const fetchEntity = (entities, entity) => {
  const val = entities && entities[entity] &&
    Array.isArray(entities[entity]) &&
    entities[entity].length > 0 &&
    entities[entity][0].value;

    if(!val) {
      return null;
    } else {
      return typeof val === 'object' ? val.value : val;
    }
}

module.exports = {
  findById,
  fetchEntity
}
>>>>>>> 3025b1ad29519fab2e9ca374f3e22bf9cd9f38aa
