// const rufusTheDog = {
//     age: 4,                 // Property
//     species: "Dalmatian",   // Property
//     bark: function () {     // Method
//         window.alert("WOOF!")
//     }
// }

// rufusTheDog.bark()
//////
// const rufusTheDog = {
//     age: 4,
//     species: "Dalmatian",
//     bark: function (something) {
//         window.alert(`Rufus barks 'WOOF!' at ${something}`)
//     }
// }

// rufusTheDog.bark("mailman")
// rufusTheDog.bark("leaf")
// rufusTheDog.bark("child")


// we using THIS keyword so basically THIS means the parent function
const rufusTheDog = {
    age: 4,
    species: "Dalmatian",
    contentsOfStomach: [],
    eat: function (item) {
        
        this.contentsOfStomach.push(item)
    },
    puke: function () {
        this.contentsOfStomach.clear()
    },
    bark: function (something) {
        window.alert(`Rufus barks 'WOOF!' at ${something}`)
    },
    namer: function(something){
        console.log(`${something} is your name right?`)
    }
}
rufusTheDog.eat("lefovers")
rufusTheDog.eat("rice")
rufusTheDog.eat("soor")
rufusTheDog.namer("haji")
// rufusTheDog.bark("dek")

console.log(rufusTheDog.contentsOfStomach)