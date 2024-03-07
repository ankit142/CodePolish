const { readFileSync, writeFileSync } = require('fs');
const yaml = require('yaml');

function beautifyYAML(filePath) {
    try {
        const yamlData = yaml.parse(readFileSync(filePath, 'utf-8'));
        const beautifiedYAML = yaml.stringify(yamlData);
        writeFileSync(filePath, beautifiedYAML);
        console.log('YAML beautified successfully!');
    } catch (err) {
        console.error('Error beautifying YAML:', err);
    }
}

module.exports = { beautifyYAML };
