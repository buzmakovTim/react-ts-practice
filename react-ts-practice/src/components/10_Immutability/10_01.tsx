export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number} 
}

// Function
export function makeHairStyle(u: UserType, power: number) {
    let copy = {...u, hair : u.hair - power}
    // or
    //copy.hair = copy.hair - power 
    return copy
}

// Types
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}
/////////////////////

//
//
//
// Move user moved
export function moveUser(user: UserWithLaptopType, moveTo: string) {

    return {...user, laptop: user.laptop, address: {title: moveTo}}

    //return movedUser
}

// Upgrade Laptop
export function upgradeLaptop(user: UserWithLaptopType, newLaptop: string) {
    return {...user, laptop: {title: newLaptop}, address: user.address}
}

//
//
// Update House Number
export function moveUserToAnotherHouse(user: UserWithLaptopType & UserWithBooksType, house: number){

    return {...user, address: {...user.address, house: house}}
}
//
// Update House Number
export function addNewBook(user: UserWithLaptopType & UserWithBooksType, newBook: string){

    const copy = {
        ...user,
        books: [...user.books, newBook]
    }

    //copy.books.push(newBooks)
    return copy
}

//
// Update House Number
export function updateBook(user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string){

    const copy = {
        ...user,
        books: user.books.map( b => b === oldBook ? newBook : b)
    }


    //copy.books.push(newBooks)
    return copy
}