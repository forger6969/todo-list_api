require('dotenv').config();
const { default: mongoose } = require("mongoose");
const app = require("./app");

const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI )
.then(()=>{
console.log("Mongo db connected");

})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
