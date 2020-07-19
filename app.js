const  express = require('express')

const app = express()



const page = `

<style>
body {
  padding: 20px;
  font-family: arial;
  background-color: #EBEBE9;
  color: #3B393A;
}

</style>
<body>
<header>
<h1>A programmer showing emotions</h1>
</header>

<p>"I just want to wrap you between <i>parentheses</i> and <i>require</i> you..."</p>
</body>
`


app.get('/', (request, response) => {
  response.send(page)
})

const PORT = process.env.PORT ||3000


app.listen(PORT, () => console.log(`listening at port: ${PORT}`))