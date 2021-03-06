import React, { useCallback, useMemo, useState } from 'react';

export default {
    title: 'useMemo',
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;


    // Using useMemo()
    resultA = useMemo( ()=> {
        let tempResultA = 1
        for(let i = 1; i<= a; i++) {
            let fake = 0
            while(fake < 100000000)
                {
                    fake++;
                    const fakeValue = Math.random();
                }
                tempResultA = tempResultA * i;    
        }
        return tempResultA

    }, [a])

    
    for(let i = 1; i<= b; i++) {
        resultB = resultB * i;    
    }


    return <>
                                                    {/* Number()  convert string to number */}
        <input  value={a} onChange={ (e) => setA(Number(e.currentTarget.value))}/> 
                                                    {/*  '+' convert string to number */}
        <input  value={b} onChange={ (e) => setB(+e.currentTarget.value)}/>
        <hr />

            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for a: {resultB}
            </div>

    </>

}



// useMemo helps to React.Memo

// This how we created a Type for the props
const UsersSecrets = (props: {users: Array<string>}) => {
    console.log('USERS SECRET')
    return <div>{
            props.users.map( (u,i) => <div key={i}>{u}</div> )
        }</div>
}

const Users = React.memo(UsersSecrets)

export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Tim', 'Tom', 'Timofey'])


    const addUser = () => {
        
        const newUsers = [...users, 'Svetia' + new Date().getTime()]
        //users.push('Sveta' + new Date().getTime())
        setUsers(newUsers)
    }


    let newArray = useMemo( () => {
        
        const newArray = users.filter ( u => u.toLocaleLowerCase().indexOf('i') > -1)
        return newArray
        }, [users])
    
    return <>

        <button onClick={ () => {setCounter(counter + 1)}}>+</button>
        {" " + counter}
        <button onClick={addUser}>Add user</button>
        {/* <NewMessagesCounter count={counter} /> */}
        <Users users={newArray}/>

    </>

}
//
//
// useCallback    Begin
//
//
export const LikeUseCallBack = () => {

    console.log('LikeUseCallBack')
    const[counter, setCounter] = useState(0)
    const[books, setBooks] = useState(['Jeact', 'JS', 'HTML', 'CSS'])

    const addBook = () => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }

    // Using useMemo we can achieve the same result
    const memorizeAddBook = useMemo( () => {
        return addBook
    }, [books])
    // or we can use useCallback
    const memorizeAddBook2 = useCallback(
        () => {
            addBook()
        },
        [books],
    )
    
    return <>
        <button onClick={ () => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memorizeAddBook2}/>
    </>
}

type BookSecretPropsType = {
    addBook: () => void
}
const BookSecret = (props: BookSecretPropsType) => {
    console.log('BookSecret')
    return <div>
        <button onClick={ () => {props.addBook()} }>add book</button>
    </div>
}

const Book = React.memo(BookSecret)
//
//
// useCallback    end
//
//

// To start Storybook:  yarn storybook