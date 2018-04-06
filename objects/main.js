// Iterate through the following array of objects and if the gender is "F", console log the name.
const students = [
    {
      name: "Cashew",
      gender: "F"
    },
    {
      name: "Rachael",
      gender: "F"
    },
    {
      name: "Joshua",
      gender: "M"
    },
    {
      name: "Daniel",
      gender: "M"
    },
    {
      name: "Jacob",
      gender: "M"
    },
    {
      name: "Paul",
      gender: "M"
    },
    {
      name: "Meghan",
      gender: "F"
    },
    {
      name: "Hayley",
      gender: "F"
    },
    {
      name: "Deanna",
      gender: "F"
    },
    {
      name: "Kyle",
      gender: "M"
    }
]

//target ul element with id of female
let listElement = document.getElementById("female");  

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "F") {
        //create new li element
        const liElement = document.createElement("li");
        //create a text node with the students name
        let textNode = document.createTextNode(students[i].name);
        //add the text node to the li element
        liElement.appendChild(textNode);
        //add the li element to the ul element
        listElement.appendChild(liElement);
    }
}
