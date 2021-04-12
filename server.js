const app = require('./app');
const PORT = 4000;


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});