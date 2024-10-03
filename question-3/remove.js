const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'Logs');

if (fs.existsSync(dirPath)) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    console.log(`Deleting file... ${file}`);
    fs.unlinkSync(path.join(dirPath, file));
  });

  fs.rmdirSync(dirPath);
  console.log('Logs directory removed');
} else {
  console.log('Logs directory does not exist');
}
