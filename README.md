# mandy
for Mandy

Miro board: https://miro.com/app/board/o9J_loObJl4=/

Gwen's notes:

Static vs dynamic website
 - static = 1 page w/ 1 set of content (‘Hello World’ site)
 - dynamic = multiple pages, customized content (think about Facebook)

CRUD
Create = POST
Read = GET
Update = PUT
Delete = DELETE

What is a web server?
 - it literally ‘serves’ content
 - at minimum, it ‘serves’ a standard set of content (ie - home page - ‘Read’ or 'GET')
 - it *can* offer much more and interactive content (ie - Facebook lets you ‘Create’, ‘Read’, ‘Update’, and ‘Delete’ your posts)
 - it lives outside of the web browser


HOW???

Web Request Response Cycle:
https://medium.com/@jen_strong/the-request-response-cycle-of-the-web-1b7e206e9047

HTTP:  - is a protocol for sending info over the webernets
 - client-initiated transactions only (like Bumble)
 - server ‘speaks’ only when ‘spoken to’
 - every client request follows the same format
 - every server response follows the same format 
https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

NodeJS:
 - a ‘runtime’, or a JS server environment
 - it’s a chunk of software that runs JS outside of the browser
 - install NodeJS on an internet-connected computer, and you can run a JS web server on it

Related stuff:
 - NVM (Node Version Manager): a piece of software that lets you keep multiple versions of NodeJS on your computer, and choose which one you want to use right now
 - NPM (Node Package Manager): People write chunks of reusable code (called ‘libraries’), and then publish them for others to use. NPM stores those pieces of code and has tools to let you get them to use. (It’s how coders avoid having to re-invent the wheel all the time. We share.) You can also have your own ‘NPM repository’, which is where you can store your own reusable code that you might not want to share with the world.

Request and Response objects:
Request -
 - Start line: method + path (this is the ‘where’)
 - Headers: context (ie - who’s asking?) and ground rules
 - Body: request-specific content descriptors
Response - 
 - Status line: how it went, in summary
 - Headers: similar to Request headers
 - Body: this is where the requested content lives
https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

Parts of a server:
 - open port: since it speaks only when spoken to, it has to be listening all the time
 - routes: different ‘start line’ targets (method + path), and the code that reads the ‘request object’ and builds the suitable ‘response object’

How to build a server on NodeJS:
 - Create a project that can use libraries that people have contributed to NPM
     ‘npm init’ (add ' -y' to just blindly accept all the defaults in advance instead of entering each answer in the terminal)
 - Get the NPM package called ‘express’ (it’s already-built code that creates servers, so you don’t have to!)
     ’npm install express’ 
 - Use the package to do cool stuff (as always, we refer to the published documentation for ‘how to use this package’, and then we try/fail until it works)
