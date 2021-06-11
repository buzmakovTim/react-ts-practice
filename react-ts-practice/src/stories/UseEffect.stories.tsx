import { count } from 'node:console'
import React, { useEffect, useMemo, useState } from 'react'

export default {
    title: 'useEffect demo',
}


// export const Example = () => {

//     //console.log('Example1')

//     const[fake, setFake] = useState(1)
//     const[counter, setCounter] = useState(1)


//     // useEffect will run only after JSX has returned and showed on the page!!! 

    
//     // 
//     useEffect( () => {
//         // We can do side effects here. 
//         console.log('useEffect every render')
//         //api.getUsers
//     })
//     useEffect( () => {
//         // We can do side effects here. 
//         console.log('useEffect only run once first time (componentDidMount)')
//         //api.getUsers
//     }, [])
//     useEffect( () => {
//         // We can do side effects here. 
//         console.log('useEffect first render and every counter change')
//         //api.getUsers
//     }, [counter])

//     return <>
//         Counter: {counter}
//         <button onClick={ () => setCounter(counter + 1)}>+</button>
//         Fake: {fake}
//         <button onClick={ () => setFake(fake + 1)}>+</button>
        
//     </>

// }

//Another example
export const Clock = () => {

    //console.log('Example1')

    const[hour, setHour] = useState(0)
    const[minute, setMinute] = useState(0)
    const[second, setSecond] = useState(0)

    const formater = (num: number) => {

        return num <= 9 ? '0'+num : num
    }

    useEffect( () => {
        setInterval( () => {
            let time = new Date()        

            setHour(state => state = Number(time.getHours() % 12 || 12))
            setMinute(state => state = Number(time.getMinutes()))
            setSecond(state => state = Number(time.getSeconds()))

        }, 1000)
    }, [])
    
    

    return <>
        {formater(hour)} : {formater(minute)} : {formater(second)}
        {/* Counter: {counter}
        <button onClick={ () => setCounter(counter + 1)}>+</button>
        Fake: {fake}
        <button onClick={ () => setFake(fake + 1)}>+</button> */}
        
    </>

}