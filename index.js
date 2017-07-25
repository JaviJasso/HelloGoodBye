const express = require(`express`)
const mustacheExpress = require("mustache-express")

const app = express()

app.use(express.static("public"))

app.engine("mustache", mustacheExpress())
app.set("views", "./templates")
app.set("view engine", "mustache")

app.get("/:name", (request, response) => {
  response.render(`hello`, { name: request.params.name })
})

app.get("/goodbye/:name", (request, response) => {
  response.render(`bye`, { name: request.params.name })
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
