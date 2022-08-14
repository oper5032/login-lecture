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

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;