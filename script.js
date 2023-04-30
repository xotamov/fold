let user = {
    name: "Aziz", // string
    surname: "Xotamov", // string
    age: 15, // number
    isMarried: false, // boolean,
    passport: { // nested object
        serries: "AC",
        number: 214124124,
        start_date: "2024-02-02",
        exp_date: "2034-02-02",
        visa: ["russia", "ukrain", "usa", "japan"] // object(Array) 
    },
    country: "Uzb",
    wives: ["dildora", "malika", "natasha", "gulnoz", "pokiza"], // object(Array) 
    children: [ // // object(Array) 
        { // object in array
            name: "aziza",
            date: "2034-02-02"
        },
        {
            name: "aziza",
            date: "2034-02-02"
        },
        {
            name: "aziza",
            date: "2034-02-02"
        },
        {
            name: "aziza",
            date: "2034-02-02"
        },
    ]
}
let car = {
    model: 'Mersades-benz',
    marca: 'G 500',
    coutry: 'dubai',
    production: 'Italiya',
    sale: '350,000$',
    while: 'michlen',
    mileage: 13400,
    chaire: '8',
    car: 'beatufule',
    date_of_come: 2022,
}

let newObj = Object.assign({},user, {car})
let keys = Object.keys(newObj)
let values = Object.values(newObj)
let arr = Object.assign({},user, {car})


console.log(arr);
console.log(newObj);
console.log(keys);
console.log(values);