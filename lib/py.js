const { readFileSync, writeFileSync } = require('fs');

function beautifyPython(filePath) {
    try {
        const pythonContent = readFileSync(filePath, 'utf-8');
        const beautifiedPython = beautify(pythonContent);
        writeFileSync(filePath, beautifiedPython);
        console.log('Python beautified successfully!');
    } catch (err) {
        console.error('Error beautifying Python:', err);
    }
}

function beautify(code) {
    const lines = code.split('\n');
    let result = '';
    let indentLevel = 0;
    const blockStartRegex = /^\s*(def|class|for|while|if|elif|else|try|except|finally).*?:/;
    const blockEndRegex = /^\s*(elif|else|except|finally|elif).*?:/;
    
    for (const line of lines) {
        const trimmedLine = line.trim();

        if (trimmedLine.length === 0) {
            result += '\n';
            continue;
        }

        if (blockEndRegex.test(trimmedLine)) {
            indentLevel--;
        }

        result += '    '.repeat(indentLevel) + trimmedLine + '\n';

        if (blockStartRegex.test(trimmedLine)) {
            indentLevel++;
        }
    }

    return result;
}

module.exports = { beautifyPython };
