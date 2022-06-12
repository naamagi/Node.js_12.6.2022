const fs=require('fs');
fs.writeFileSync('file1.txt','Hello');
fs.copyFile( 'file1.txt', 'file2.txt',()=>(console.log("")));
fs.renameSync('file1.txt', 'file1Renamed.txt')

  fs.readdir('./', (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });
fs.appendFileSync('file2.txt', ' node.js');