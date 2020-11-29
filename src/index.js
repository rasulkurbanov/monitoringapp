/* 
*Primary file for the API
*
*/

//Dependencies
const http = require('http')
const url = require('url')


//The server should respond to all requests string
const server = http.createServer((request, response) => {

  //Get the request method
  const reqMethod = request.method


  //Get the URL and parse it
  const parsedUrl = url.parse(request.url, true)
  
  //Get the request query string
  const queryString = parsedUrl.query

  //Get the pathname
  const pathname = parsedUrl.pathname

  //Log the pathname
  console.log(`Request received on path: ${pathname} within ${reqMethod} method and query is, ${queryString.name}`)

  //Sending response to the client
  response.end('Assalomu alaykum')

})



//Starting server on port 8080 
server.listen(8080, () => console.log(`Server running port on: 8080`))