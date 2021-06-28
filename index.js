var express = require('express')
var app = express();
// const PORT = 7000

app.get('/', (req, response) => {
   response.write('Hello World from Bharti\n')
   response.write('How is world\n')
   response.write('Are you enjoying?')
   response.end()
})
app.listen(9000,()=>{
    console.log('Running--')
})


