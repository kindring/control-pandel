let Mock = require('mockjs');

let a = function() {
    return {
        abc: 1
    }
}

Mock.mock(/\/mock\/news/, 'get', a);