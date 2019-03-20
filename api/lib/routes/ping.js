'use strict';

module.exports = {
    method: 'GET',
    path: '/ping',
    options: {
        handler:  (request, h) => {

            return 'pong';
        }
    }
};
