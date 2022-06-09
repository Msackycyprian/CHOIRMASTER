const { fstat } = require("fs");
const http = require("http");

//port of the server
const host = 'localhost';
const port = 8000;
const someObject = require('./stud_array.json');

const requestListener = function (req, res) {
    res.writeHead(200); //sets HTTP status code of the response
    res.json('./stud_array.json');
    res.send(someObject);
    res.end(JSON.stringify({ a: 1 });

//Here,M is referred from the above code it is contains doc Object

};
console.log(someObject);

const server = http.createServer(requestListener); //created server object
server.listen(port, host, () => {//request listener function
    console.log(`Server is running on http://${host}:${port}`);
});