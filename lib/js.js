const { readFileSync, writeFileSync } = require('fs');

function beautifyJS(filePath) {
    try {
        const jsContent = readFileSync(filePath, 'utf-8');
        const beautifiedJS = beautify(jsContent);
        writeFileSync(filePath, beautifiedJS);
        console.log('JavaScript beautified successfully!');
    } catch (err) {
        console.error('Error beautifying JavaScript:', err);
    }
}
function beautify(code) {
    const lines = code.split('\n');
    let result = '';
    let indentLevel = 0;

    for (const line of lines) {
        const trimmedLine = line.trim();

        if (trimmedLine.length === 0) {
            // Skip empty lines
            continue;
        }

        if (trimmedLine.endsWith('}') || trimmedLine.endsWith(']') || trimmedLine.endsWith(')')) {
            indentLevel--;
            if (indentLevel < 0) indentLevel = 0;
        }

        result += '    '.repeat(indentLevel) + trimmedLine + '\n';

        if (trimmedLine.endsWith('{') || trimmedLine.endsWith('[') || trimmedLine.endsWith('(')) {
            indentLevel++;
        }
    }

    // Remove the last newline if present
    if (result.endsWith('\n')) {
        result = result.slice(0, -1);
    }

    return result;
}



module.exports = {beautifyJS};
