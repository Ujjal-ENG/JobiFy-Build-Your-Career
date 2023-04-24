// imports
import express from 'express';

// rest object
const app = express();
// default route
app.get('/', (req, res) => {
    res.send('Hello There i am from default routes!!!');
});


// server listen port

const PORT = 8080

// listen
app.listen(PORT, () => {
  console.log("Server is listen at 8080 PORT")
})
