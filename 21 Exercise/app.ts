interface item {
    name: string
    price: number
}
//  creat two objwct

const car: item ={
    name: "COROLLA",
    price:120000
}

const book: item ={
    name:"MATHAMETICS",
    price:230
}
console.log(`car name: ${car.name}, price: $${car.price}`)
console.log(`book name: ${book.name}, price: $${book.price}`)