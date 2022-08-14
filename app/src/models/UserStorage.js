"use strict";

class UserStorage {
    // #을 붙이면 private다.
    static #users = {
        id : ["kkh", "kkm", "kbc", "ljs"],
        psword : ["1234", "1234", "1234" , "12345"],
        name : ["ㄱ","ㄴ","ㄷ","ㄹ"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;