const fs = require('fs');

// fs.writeFile("sample.txt", "Sample Text here ", (err) => {
//     if(err) {
//         console.log("Sorry error writing content ", err);
//     }else {
//         console.log("Content stored successfully... ");
//     }
// })


// fs.readFile("sample.txt",'UTF-8', (err, data) => {
//     if(err) {
//         console.log("Data not got ", err);
//     }else {
//         console.log(data);
//     }
// } )

// fs.appendFile("sample.txt", "this is new data", (err) => {
//     if(err) {
//         console.log("Error in appending ", err);
//     }else {
//         console.log("File appended. ");
//     }
// })


fs.unlink("sample.txt",(err) => {
    if(err) {
        console.log("File delete error ", err);
    }else {
        console.log("File deleted... ");
    }
})