import React, { useMemo, useState } from 'react'

export default {
    title: 'useState demo',
}

function generateData() {
    // Difficult and long time calculation
    console.log('GenerateData')
    return 22222222222;
}

export const Example = () => {

    console.log('Example1')


    //let initialValue = generateData();     will call generate data all the time! it's bad
    //
    //  we can ise useMemo  and it's gonna fix the issue
    //
    //let initialValue = useMemo(generateData, [])

    //const[counter, setCounter] = useState(initialValue)

    //or we can add generateData directly to useState and it's gonna fix the problem
    const[counter, setCounter] = useState(generateData)

    return <>
        <button onClick={ () => setCounter(counter + 1)}>+</button>
        {counter}
    </>

}