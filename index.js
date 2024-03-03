const express = require("express")

const app = express()

app.use(express.json());

app.get('/',(request, response)=>{
  return response.json({message: 'Server is up'})
})

app.post('/teste',(request, response)=>{
  const {name, date} = request.body

  return response.json({code: response.statusCode, name, date})
})

console.log("Server is running on port 3333")
app.listen(3333)