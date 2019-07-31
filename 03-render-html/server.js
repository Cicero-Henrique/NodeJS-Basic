var http = require("http");
var fs = require("fs");

function onRequest(request, response)
{
    response.writeHead(200, {"Content-Type": "text/html"});     //If text/plan was used, the HTML code would have been shown as it was written, not the correct content.
    fs.readFile("./index.html", null, function(error, data)
    {
        if(error)
        {
            response.writeHead(404);
            response.write("File not found");
        }
        else
            response.write(data);
        response.end();
    });
}

http.createServer(onRequest).listen(8000);