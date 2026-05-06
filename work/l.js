let user = {
    id: 181,
    name : "Ishaan",
    age : 21,
    address : {
        city : "Panchkula",
        pin : 119292
    },
    skills : ["HTML","CSS","Python"],
    inactive : true
};

let {name, age} = user;
let {name : userName} = user;
let {country = "India"} = user;
let {address : {city,pin}} = user;
let {skills : {skill1, skill2}} = user;
let {id, ...rest} = user;

console.log(name,age);
console.log(userName);
console.log(country);
console.log(city, pin);
console.log(skill1,skill2);



// diff between stringfy() and parse() method in  JSON



 