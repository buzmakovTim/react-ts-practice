import { count } from 'node:console'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

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
export const SetInterval = () => {

    //console.log('Example1')

    const[hour, setHour] = useState(0)
    const[minute, setMinute] = useState(0)
    const[second, setSecond] = useState(0)

    // 05:05:05  time format function
    const formater = (num: number) => {
        return num <= 9 ? '0'+num : num
    }

    useEffect( () => {
        const intervalId = setInterval( () => {
            let time = new Date();        

            setHour(state => state = Number(time.getHours() % 12 || 12)); // % 12 || 12  for 12 hours. without it it will be 24 hours.
            setMinute(state => state = Number(time.getMinutes()));
            setSecond(state => state = Number(time.getSeconds()));

        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    }, []);
    
    

    return <>
        {formater(hour)} : {formater(minute)} : {formater(second)}
        {/* Counter: {counter}
        <button onClick={ () => setCounter(counter + 1)}>+</button>
        Fake: {fake}
        <button onClick={ () => setFake(fake + 1)}>+</button> */}
        
    </>

}

//
//
//
// useEffect Another example

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1);

    console.log('Conmopent rendered');

    const increaseCounter = useCallback(() => {setCounter(counter + 1)}, [counter])

    useEffect( () => {
        console.log('Effect occurred!: ' + counter );

        return () => {
            console.log('Component died')
        }
    }, []);


    return <>
        Hello, counter: {counter} <button onClick={increaseCounter}>+</button>
    </>

}
//
//
//


//
//
//
// useEffect Example with event listener  (on key press)

export const KeyPressedListener = () => {

    const[text, setText] = useState('');

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        };

        window.addEventListener('keypress', handler);
        
        return () => {
            window.removeEventListener('keypress', handler);
        }
    });


    return <>
        Text: {text}

    </>
}


//
//
//
// useEffect Example setTimeout

export const SetTimeoutExample = () => {

    const[text, setText] = useState('');

    useEffect(() => {

        const timeoutId = setTimeout( () => {

            setText('Text after 3 seconds');
        }, 3000);
        
        return () => {
            clearTimeout(timeoutId)
        }
    });


    return <>
        Text: {text}

    </>
}