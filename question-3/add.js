const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'Logs');

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

process.chdir(dirPath);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file ${i}`, 'utf8');
  console.log(fileName);
}
