const cron = require('node-cron');
const {syncDB} = require('./taks/sync-db');

console.log('Inicio');
cron.schedule('1-59/5 * * * * *', syncDB);

