const { readFileSync, writeFileSync } = require('fs');

function beautifyJSON(filePath) {
    try {
        const jsonData = JSON.parse(readFileSync(filePath, 'utf-8'));
        const beautifiedJSON = JSON.stringify(jsonData, null, 2);
        writeFileSync(filePath, beautifiedJSON);
        console.log('JSON beautified successfully!');
    } catch (err) {
        console.error('Error beautifying JSON:', err);
    }
}

module.exports = { beautifyJSON };
