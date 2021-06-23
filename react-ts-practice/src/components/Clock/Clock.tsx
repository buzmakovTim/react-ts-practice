import React, {useEffect, useState} from 'react'
import style from './Clock.module.css'

type PropsType =
{

}

const validator = (num: number) => num < 10 ? "0" + num : num;

export const Clock: React.FC<PropsType> = (props) => {

    type clockTypes = 'analog' | 'digital';

    const[date, setDate] = useState(new Date())
    const[clockType, setClockType] = useState<clockTypes>('analog')

    // UseEffect will start setInterval function ONCE only as no dependance  ,[]  
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        })

        // To avoid a memory leak we need to clearInterval otherwise interval will
        // run even we remove component 
        return () => {
            clearInterval(intervalID)
        } // return will be run when useEffect will be unmount or updated
    }, [])


    const analogClock = () => {

        return (
            <div className={style.clock}>
        <div
          className={style.hour_hand}
          style={{
            transform: `rotateZ(${date.getHours() * 30}deg)`
          }}
        />
        <div
          className={style.min_hand}
          style={{
            transform: `rotateZ(${date.getMinutes() * 6}deg)`
          }}
        />
        <div
          className={style.sec_hand}
          style={{
            transform: `rotateZ(${date.getSeconds() * 6}deg)`
          }}
        />
        <span className={style.twelve}>12</span>
        <span className={style.one}>1</span>
        <span className={style.two}>2</span>
        <span className={style.three}>3</span>
        <span className={style.four}>4</span>
        <span className={style.five}>5</span>
        <span className={style.six}>6</span>
        <span className={style.seven}>7</span>
        <span className={style.eight}>8</span>
        <span className={style.nine}>9</span>
        <span className={style.ten}>10</span>
        <span className={style.eleven}>11</span>
      </div>
    )   
    }
            
    const digitalClock = () => {
        return (
            <div className={style.digitClock}>
                <span>{validator(date.getHours())}</span>
                :
                <span>{validator(date.getMinutes())}</span>
                :
                <span>{validator(date.getSeconds())}</span>
            </div>
        )
    }
    
    
    return (

        <div>
            <button disabled={clockType === 'digital'} onClick={() => setClockType('digital')}>Digit</button>
            <button disabled={clockType === 'analog'} onClick={() => setClockType('analog')}>Analog</button>
            {clockType === 'analog' ? analogClock() : digitalClock()}
        </div>
        
    )
}