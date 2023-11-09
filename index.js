//Question 1
var pets = [
    ['Bird', 'Dog', 'Cat'],
    [true, false, false],
    [2, 1, 4]
];

function petChecker(animal){
    if(pets = true){
        console.log("My pet can fly")
    }
    if(pets = false){
        console.log("My pet cannot fly")
    }
}

//Question 2
var  fall = {
    accessories: ["gloves", "scarfs", "Leaves"],
    drinks: ["hotChocolate", "coffe"]
};
var sentence = "When i think of fall i think of:";


fall.accessories.map(value=> sentence = sentence + value + "," ); 
fall.drinks.map(value=> sentence = sentence + value + "," ); 
sentence = sentence + "and colder weather" ;

console.log(sentence);

//Question 3

var parrot = {
    beak: true,
    age: 10,
    name: "Bob"
}
console.log(parrot);
//beak: true, age: 10, name: 'Bob'

//Question 4

var number = 1;
var sentence = "";

containedValue(number, sentence) = sentenceChecking

function sentenceChecking(value, words){
    switch(value){
    case 1: words +="You guessed 1\n"
    case 2: words +="You guessed 2\n"
    break;
    case 3: words +="You guessed 3\n"
    break;
    case 4: words +="You guessed 4\n"
    default: "wrong guess\n"
    }
}
return(words);
console.log(containedValue);
