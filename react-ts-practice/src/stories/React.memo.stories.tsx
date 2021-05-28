import React, { useState } from 'react';


// Take one component and return another component
// And if props not changed them React will use cashed component without recalculating.
//
// const superUsers = (props) => {
//      do staff   
// }
//
// const Users = React.memo(superUsers)
// 
// if superUsers not changed so Users will be tacket from the cash.
//
//
// the problem is when we do stuff with the arrays most of the time we do copy of it and 
// in this case React.Memo not gonna work (to fix this issue we will use useMemo)
//
// check useMemo stories 
 

export default {
    title: 'React.memo demo',
}

                            // This how we created a Type for the props
const NewMessagesCounter = (props: { count: number}) => {
    return <div>{props.count}</div>
}


                        // This how we created a Type for the props
const UsersSecrets = (props: {users: Array<string>}) => {
    console.log('USERS')
    return <div>{
            props.users.map( (u,i) => <div key={i}>{u}</div> )
        }</div>
}

const Users = React.memo(UsersSecrets)

export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Tim', 'Tom', 'Timofey'])


    const addUser = () => {
        
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        //users.push('Sveta' + new Date().getTime())
        setUsers(newUsers)
    }

    return <>

        <button onClick={ () => {setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessagesCounter count={counter} />
        <Users users={users}/>

    </>

}