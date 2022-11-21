const buyChocolate = {
    type: "Milk chocolate"
}

// console.log(buyChocolate)

const addFlavoring = (choco) => {
    choco.flavor = "Mint"

    return choco
}



const makeBarkMixture = (choco) => {
    if (choco.flavor === "Mint") {
        choco.mixed = true
    } else {
        choco.mixed = false
    }

    return choco
}

const bakeCandy = (choco) => {
    if (choco.mixed === true) {
        choco.baked = true
    } else {
        choco.baked = false
    }

    return choco
}

const breakBark = (choco) => {
    if (choco.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }
}

addFlavoring(buyChocolate)
makeBarkMixture(buyChocolate)
bakeCandy(buyChocolate)
console.log(breakBark(buyChocolate))


