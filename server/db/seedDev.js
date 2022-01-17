const db = require('./init');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/movies_list.sql').toString();

db.query(seeds, () => console.log('Dev database seeded'));

