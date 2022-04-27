const fs = require('fs');

const readfile = fs.readFileSync('./data.json', { encoding: 'utf8' });
const readfileParse = JSON.parse(readfile);
const data = readfileParse.reduce((a, b) => ({ ...a, [b.name]: b }), {});
fs.writeFileSync('./fmtdata.json', JSON.stringify(data, null, 2));
