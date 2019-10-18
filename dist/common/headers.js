System.register([], function (exports_1, context_1) {
    "use strict";
    var headers;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("headers", headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Max-Age': '2592000',
                'Access-Control-Allow-Credentials': 'true'
            });
        }
    };
});
