var http = require("http");
var employees = require("./Employee"); // the Employee module

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    } else {
        // Set the content type to handle JSON and HTML responses
        res.setHeader('Content-Type', 'application/json');

        if (req.url === '/') {
            // Display welcome message in HTML format
            res.setHeader('Content-Type', 'text/html');
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        if (req.url === '/Employee') {
            // Display all employee details in JSON format
            res.end(JSON.stringify(employees));
        }

        if (req.url === '/Employee/names') {
            // Display all employee names (first name + last name) in Ascending order
            const employeeNames = employees
                .map(emp => `${emp.firstName} ${emp.lastName}`)
                .sort();
            res.end(JSON.stringify(employeeNames));
        }

        if (req.url === '/Employee/totalsalary') {
            // Calculate and display the total salary of all employees
            const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
            res.end(JSON.stringify({ total_salary: totalSalary }));
        }

        // Handle 404 Not Found for invalid routes
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
    }
});

// Start server and listen on the specified port
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
