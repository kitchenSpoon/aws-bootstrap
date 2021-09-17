const { hostname } = require('os');
const http = require('http');
const STACK_NAME = process.env.STACK_NAME || "Unknown Stack";
const content = `
    _
   | |
___| |__   ___  ___ _ __
/ __| '_ \ / _ \/ _ \ '_ \
\__ \ | | |  __/  __/ |_) |
|___/_| |_|\___|\___| .__/
                | |
                |_|
`;
const message = `Hello World from ${hostname()} in ${STACK_NAME}\n${content}`;
const port = 8080;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(message);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname()}:${port}/`);
});