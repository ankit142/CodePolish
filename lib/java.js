const { readFileSync, writeFileSync } = require('fs');

function beautifyJava(filePath) {
    try {
        const javaContent = readFileSync(filePath, 'utf-8');
        const beautifiedJava = beautify(javaContent);
        writeFileSync(filePath, beautifiedJava);
        console.log('Java beautified successfully!');
    } catch (err) {
        console.error('Error beautifying Java:', err);
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

        // Decrease the indent level if the line contains closing brackets or semicolons
        if (trimmedLine.endsWith('}') || trimmedLine.endsWith(';')) {
            indentLevel--;
            if (indentLevel < 0) indentLevel = 0;
        }

        // Add the current line with proper indentation
        result += '    '.repeat(indentLevel) + trimmedLine + '\n';

        // Increase the indent level if the line contains opening brackets
        if (trimmedLine.endsWith('{')) {
            indentLevel++;
        }
    }

    // Remove the last newline if present
    if (result.endsWith('\n')) {
        result = result.slice(0, -1);
    }

    return result;
}

module.exports = { beautifyJava };
