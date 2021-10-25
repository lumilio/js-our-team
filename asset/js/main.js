const team = [

    {
        name: "Lorenzo",
        role: "Student",
        image: ""
    },

    {
        name: "Fabio",
        role: "Teacher",
        image: ""
    },

    {
        name: "Mark Z",
        role: "CEO",
        image: ""
    },

    {
        name: "Fabiola",
        role: "Teacher",
        image: ""
    },

    {
        name: "Tiziano",
        role: "Teacher",
        image: ""
    }

]

for (let index = 0; index < team.length; index++) {
    const member = team[index];
    console.log('name: ', member.name);
    console.log('role: ', member.role);
    console.log('image: ', member.image);
}