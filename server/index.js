const express = require("express");
const cors = require("cors");
const { getCompliment, getAllCompliments ,createCompliment, deleteCompliment, editCompliment} = require('./controller')

const app = express();

app.use(cors());
app.use(express.json());


app.get("/api/compliment", getCompliment);
app.get('/api/', getAllCompliments)
app.post('/api/', createCompliment)
app.delete('/api/:id', deleteCompliment)
app.put('/api/:id', editCompliment)



app.listen(4000, () => console.log("Server running on 4000"));
