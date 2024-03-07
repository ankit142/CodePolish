const beautifyJSONPromise = import('./lib/json.cjs');
const { beautifyYAML } = require('./lib/yaml.js');
const { beautifyJS } = require('./lib/js.js');
const { beautifyPython } = require('./lib/py.js');
const { beautifyJava } = require('./lib/java.js');

module.exports = {
    beautifyYAML,
    beautifyJS,
    beautifyPython,
    beautifyJava,
    async beautifyJSON(filePath) {
        const { beautifyJSON } = await beautifyJSONPromise;
        return beautifyJSON(filePath);
    }
};
