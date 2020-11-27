import Mock from 'mockjs';

require('./index/a.js');

Mock.setup({
    timeout: 800 // setter delay time
});