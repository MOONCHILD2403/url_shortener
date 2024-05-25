const app = require("express")();
const monkey = require("mongoose");
const PORT = 3500;
const groot = require("./routes/user")

monkey.connect("mongodb://127.0.0.1:27017/monkeydb");
app.use("/",groot)

app.listen(PORT,()=>{console.log("server running succesfully")});