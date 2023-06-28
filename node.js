const readline = require('readline');
const fs = require('fs');
const http = require('http');

const html = fs.readFileSync('./template/index.html', 'utf-8');
const contactHtml = fs.readFileSync('./template/contact.html', 'utf-8');

const server = http.createServer((request, response) => {
    let path = request.url; 
    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
    } else if (path.toLocaleLowerCase() === '/about') {
        response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
    } else if (path.toLocaleLowerCase() === '/contact') {
        response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
    } else {
        response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found'));
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started!');
});







// Reading and writing to files asynchronously
// fs.readFile('./files/start.txt', 'utf-8', (error1, data1) => {
//     console.log(data1);
//     fs.readFile(`./files/${data1}.txt`, 'utf-8', (error2, data2) => {
//         console.log(data2);
//         fs.readFile('./files/append.txt', 'utf-8', (error3, data3) => {
//             console.log(data3);
//             fs.writeFile('./files/output.txt', `${data2}\n\n${data3}\n\nDate created ${new Date()}`, () => {
//                 console.log('File written sucessfully!');
//             });
//         })
//     });
// });


// Reading files synchronously
// let textIn = fs.readFileSync('./files/input.txt', 'utf-8');
// console.log(textIn);


// let content = `Data read from input.txt: ${textIn}. \nDate created  ${new Date()}`
// fs.writeFileSync('./files/output.txt', content);


// Reading and writiting terminal input
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("Plese enter your name: ", (name) => {
//     console.log("You entered: " + name);
//     rl.close();
// })

// rl.on('close', () => {
//     console.log('Interface closed');
//     process.exit(0);
// })

// Reading and writing to file