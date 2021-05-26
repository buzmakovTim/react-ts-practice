import React, { useState } from 'react';

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