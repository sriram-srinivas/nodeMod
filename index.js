
/*
login module
session maintenance
serverless arch
aws sdk integration

4. ES6/ES7

5. MongoDB

6. Express

7. Socket.IO

8. JWT Authentication

9. Mongoose

10. File and image uploads

11. Email sending

12. Application deployment with Heroku

15. REST API Design

16. Code testing

17. Debugging

18. Jest
*/ 

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(1994);