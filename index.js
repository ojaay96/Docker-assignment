const http = require('node:http');
const querystring = require('node:querystring');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Serve the HTML form with centered styling
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <head>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              font-family: Arial, sans-serif;
              background-color: #f0f0f0;
            }
            .container {
              text-align: center;
              background: white;
              padding: 2rem;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            input {
              padding: 0.5rem;
              font-size: 1rem;
              margin-top: 1rem;
            }
            button {
              padding: 0.5rem 1rem;
              font-size: 1rem;
              margin-left: 0.5rem;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>What is your name?</h1>
            <form method="POST">
              <input type="text" name="username" placeholder="Enter your name" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </body>
      </html>
    `);
  } else if (req.method === 'POST') {
    // Collect the form data
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const parsedBody = querystring.parse(body);
      const username = parsedBody.username || 'stranger';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <html>
          <head>
            <style>
              body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
              }
              .container {
                text-align: center;
                background: white;
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              }
              a {
                display: inline-block;
                margin-top: 1rem;
                text-decoration: none;
                color: #007BFF;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Hello, ${username}!</h1>
              <a href="/">Go back</a>
            </div>
          </body>
        </html>
      `);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



