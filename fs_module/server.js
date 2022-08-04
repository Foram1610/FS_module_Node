const fs = require('fs');
//Scynchronously

//1. create a folder
//fs.mkdirSync('FSDemo');

//2. create file in it named bio.txt and write something into it
//fs.writeFileSync('./FSDemo/bio.txt','Hello world!!')

//3. add data into it(append data, note overwrite old data)
//fs.appendFileSync('./FSDemo/bio.txt','Some new code!!!')

//4. read data without getting the buffer data at first
// const data = fs.readFileSync('./FSDemo/welcome.txt','utf8');
// console.log(data);

//5. Rename the file name
//fs.renameSync('./FSDemo/bio.txt','./FSDemo/welcome.txt');

//6. delete file and folder
//file
//fs.unlinkSync('./FSDemo/welcome.txt');
//folder
//fs.rmdirSync('FSDemo') // directory(folder) is not empty, then it will not gives permission to delete the folder




//Ascynchronously 
//1. create a folder
// fs.mkdir('FSDemo',(err) => {
//     console.log('folder created successfully!!')
// });

//2. create file in it named bio.txt and write something into it
// fs.writeFile('FSDemo/bio.txt','Hello!!',(err) =>{
//     if(err) console.log(err);
//     console.log('File created successfully!!');
// });

//3. add data into it(append data, note overwrite old data)
// fs.appendFile('FSDemo/bio.txt','Welcome to Narola Infotech!!',(err)=>{
//     if(err) console.log(err);
//     console.log('Data appended!!');
// });

//4. read data without getting the buffer data at first
// fs.readFile('FSDemo/bio.txt','utf8',(err,data1)=>{
//     if(err) console.log(err);
//     console.log(data1);
// })
// console.log('Byee!!');

//5. Rename the file name
// fs.rename('FSDemo/bio.txt','FSDemo/myBio.txt',(err)=>{
//     if(err) console.log(err);
//     console.log('Rename the file!!');
// })

//6. delete file and folder
//file
// fs.unlink('FSDemo/myBio.txt',(err)=>{
//     if(err) console.log(err);
//     console.log('file deleted!!');
// });
//folder
// fs.rmdir('FSDemo',(err)=>{
//     if(err) console.log(err);
//     console.log('folder deleted!!');
// });