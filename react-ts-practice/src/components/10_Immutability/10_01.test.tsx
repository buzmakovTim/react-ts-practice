import {addNewBook, makeHairStyle, moveUser, moveUserToAnotherHouse, updateBook, upgradeLaptop, UserType, UserWithBooksType, UserWithLaptopType} from './10_01';

let user: UserType

//Will run before each test
beforeEach( () => {
    user = {
        name: "Tim",
        hair: 20,
        address: {city: "Vancouver"}
    }
}) 


// Testing change name
test('Test user name change', () => {


    user['name'] = 'Timofey'

    expect(user.name).toBe('Timofey')
})

// Testing function makeHairStyle
test('Test function', () => {

    let awesomeUser = makeHairStyle(user, 10)

    expect(user.hair).toBe(20)
    expect(awesomeUser.hair).toBe(10)    
})




// Changing address
test('Change address', () => {

    let user: UserWithLaptopType = {
        name: "Tim",
        hair: 20,
        address: {city: "Vancouver"},
        laptop: {title: "MacBook"}
    }


    const userMoved = moveUser(user, 'Moscow')

    //user = userMoved;

    expect(user).not.toBe(userMoved)
    expect(user.address).not.toBe(userMoved.address)
    expect(user.laptop).toBe(userMoved.laptop)
    expect(userMoved.address.title).toBe('Moscow')
})


// Upgrade Laptop
test('Change Laptop', () => {

    let user: UserWithLaptopType = {
        name: "Tim",
        hair: 20,
        address: {city: "Vancouver"},
        laptop: {title: "MacBook"}
    }


    const userWithLaptopUpgraded = upgradeLaptop(user, 'MacBook Pro M1')

    //user = userMoved;

    expect(user).not.toBe(userWithLaptopUpgraded)
    expect(user.laptop).not.toBe(userWithLaptopUpgraded.laptop)
    expect(user.address).toBe(userWithLaptopUpgraded.address)
    expect(userWithLaptopUpgraded.laptop.title).toBe('MacBook Pro M1')
    expect(user.laptop.title).toBe('MacBook')
})
//
//
//////////////////////
//Test for user with Books and Laptop

test('Change Hose number', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Tim",
        hair: 20,
        address: {city: "Vancouver"},
        laptop: {title: "MacBook"},
        books: ['css', 'html', 'react', 'js']
    }


    const userHouseUpdated = moveUserToAnotherHouse(user, 30)

    //user = userMoved;

    expect(user).not.toBe(userHouseUpdated)
    expect(user.books).toBe(userHouseUpdated.books)
    expect(user.laptop).toBe(userHouseUpdated.laptop)
    expect(user.address).not.toBe(userHouseUpdated.address)
    expect(userHouseUpdated.address.house).toBe(30)
})


// Add new Books
test('Add new Book', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Tim",
        hair: 20,
        address: {city: "Vancouver"},
        laptop: {title: "MacBook"},
        books: ['css', 'html', 'react', 'js']
    }


    const userCopy = addNewBook(user, 'Java')

    //user = userMoved;

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('Java')
    //expect(userCopy.books[5]).toBe('C++')
})


// Update Book
// Add new Books
test('Update Book', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Tim",
        hair: 20,
        address: {city: "Vancouver"},
        laptop: {title: "MacBook"},
        books: ['css', 'html', 'react', 'js']
    }


    const userCopy = updateBook(user, 'js', 'ts')

    //user = userMoved;

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[3]).toBe('ts')
    expect(user.books.length).toBe(4)
})



