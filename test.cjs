const { beautifyJSON, beautifyYAML, beautifyJS, beautifyPython, beautifyJava } = require('./index.cjs');


// Paths to the unformatted example files
const filePathJSON = './test/example.json';
const filePathYAML = './test/example.yaml';
const filePathJS = './test/example.js';
const filePathPython = './test/example.py';
const filePathJava = './test/example.java';

// Test beautify functions
beautifyJSON(filePathJSON);
beautifyYAML(filePathYAML);
beautifyJS(filePathJS);
beautifyPython(filePathPython);
beautifyJava(filePathJava);

console.log('Beautification completed successfully!');
