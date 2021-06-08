
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

let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
let faceCards = []
let numberedCards = []

while (cards.length > 0) {
    let card = cards.pop()
    console.log(cards)
    if (isFaceCard(card)) {
        faceCards.push(card)
    } else {
        numberedCards.push(card)
    }
}

console.log(cards)
console.log(faceCards)
console.log(numberedCards)

function isFaceCard(card){
    switch(card){
        case "A":
        case "K":
        case "Q":
        case "J":
            return true
        default: 
            return false
    }
    
}



