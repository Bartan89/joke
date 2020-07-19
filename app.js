


const  express = require('express')

const app = express()



const page = `

<style>

body {
  padding: 20px;
  margin-top: 20px;
  font-family: arial;
  background-color: #EBEBE9;
  color: #3B393A;
}

#wrapper {
	position: absolute;
  margin-left: 150px;
  margin-top: 50px;
	animation:pulse 2s infinite;
}


#pulsingheart { 
  position: relative; 
  width: 50px; 
  height: 4px;
} 

#pulsingheart:before, #pulsingheart:after { 
  position: absolute; 
  content: ""; 
  left: 50px; 
  top: 0; 
  width: 50px; 
  height: 80px; 
  background: #AF535C; 
  border-radius: 50px 50px 0 0; 
  transform: rotate(-45deg);  
  transform-origin: 0 100%;
  animation:pulsecolor 2s infinite;
} 

#pulsingheart:after { 
  left: 0; 
  transform: rotate(45deg); 
  transform-origin :100% 100%;
  animation:pulsecolor 2s infinite;
}

@keyframes pulse {
	10% {transform: scale(1.1)}
}

@keyframes pulsecolor {
  10% {background: #f2d1d5;}
}

</style>
<body>
<header>
<h1>Method programmer use to impress:</h1>
</header>

<p>"I just want to wrap you between <i>parentheses</i> and <i>require</i> you..."</p>

<div id="wrapper">
	<div id="pulsingheart"></div>
</div>

</body>
`


app.get('/', (request, response) => {
  response.send(page)
})

const PORT = process.env.PORT ||3000


app.listen(PORT, () => console.log(`listening at port: ${PORT}`))







