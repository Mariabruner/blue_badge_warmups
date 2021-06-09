
//Challenge 1
// let foods = ["apple", "orange", "rice", "bread", "tofu"]
// for (let i = foods.length-1; i > -1; i--){
//     if (i % 2 == 1){
//     let curFood = foods[i]
//     curFood = curFood.charAt(0).toUpperCase() + curFood.slice(1)


//     console.log(curFood)
//     }
// }

//Challenge 2
// foods = ["apple", "orange", "rice", "bread", "tofu"]

// let allergies = ["gluten", "soy"]

// for (food of foods){

//     let isLong = lengthCheck(food)
//     let canEat = allergyCheck(food)

//     let newString = food
//     if (isLong == true){ //Should use ternary instead
//         newString += " is a long word"
//     } else {
//         newString += " is not a long word"
//     }

//     if (canEat == "good"){
//         newString += ", and you can eat it with your allergies"
//     } else {
//         newString += ", and you can't eat it with your allergies"
//     }

//     console.log(newString)
//  }

// function lengthCheck(word){
//     return food.length > 4
// }

// function allergyCheck(food){
//     allergyMap = {
//         bread :"gluten",
//         tofu: "soy"
//     }

//     if (allergies.includes(allergyMap[food])){
//         return "bad"
//     } else {
//         return "good"
//     }
// }

//Challenge 3

// let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
// let faceCards = []
// let numberedCards = []

// while (cards.length > 0) {
//     let card = cards.pop()
//     if (isFaceCard(card)) {
//         faceCards.push(card)
//     } else {
//         numberedCards.push(card)
//     }
// }

// console.log(cards)
// console.log(faceCards)
// console.log(numberedCards)

// function isFaceCard(card){
//     switch(card){
//         case "A":
//         case "K":
//         case "Q":
//         case "J":
//             return true
//         default: 
//             return false
//     }
// }

let animals = [
    "bats", "tiger", "yak",
    "monkey", "snake", "lizard",
    "panda", "monkey", "hyena"
]

let zooTrip = {
    seen: [],
    animalsSeen: 0
}

animals.forEach((animal) => {
    console.log(`${animal} was seen today at the zoo!`)

    //Order Dependent Code
    if(!zooTrip.seen.includes(animal)) zooTrip.animalsSeen++
    else {console.log(animal, "is a repeat")}
    seenAtTheZoo(animal)
})

zooTrip.animalsSeen = new Set(animals).size


function seenAtTheZoo(animal){
    zooTrip.seen.push(animal)
}


