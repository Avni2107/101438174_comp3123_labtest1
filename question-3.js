const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

// Step 1: Remove Log Files
function removeLogs() {
    if (fs.existsSync(logDir)) {
        fs.readdirSync(logDir).forEach(file => {
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(path.join(logDir, file));
        });
        fs.rmdirSync(logDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
}

// Step 2: Create Log Files
function createLogs() {
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
        console.log('Logs directory created');
    }

    process.chdir(logDir);

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(`Created file: ${fileName}`);
    }
}

// You can run both steps in sequence or conditionally
removeLogs();  // First, remove logs if they exist
createLogs();  // Then, create new log files
