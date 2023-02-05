const express = require("express"),
    app = express();

//setting view engine to ejs
app.set("view engine", "ejs");
//route for index page
app.get("/", function (req, res) {
    var characters = [
        {
            name: 'Harry',
            designation: "Student"
        },
        {
            name: 'Dumbledore',
            designation: "Headmaster"
        },
        {
            name: 'Snape',
            designation: "Professor"
        },
        {
            name: 'Hermione',
            designation: "Student"
        }
    ];
    var subheading = "I though we should involve some magic";
    res.render(__dirname + "/views/" + "index" ,
    {
        characters: characters,
        subheading: subheading
      });
});

//route for magic page
app.get("/magic", function (req, res) {
    res.render("magic");
});

app.listen(8080, function () {
    console.log("Server is running on port 8080 ");
});