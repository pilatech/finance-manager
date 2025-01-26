const { v4: uuidv4 } = require('uuid');

export function genId(){
    return uuidv4();
}