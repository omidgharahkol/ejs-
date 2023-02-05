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

characters.forEach(function(character) {
    console.log(character.designation);
    console.log(character.name);
});