import React, {useState, useEffect} from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 5;

function Accomodate(props){
    const [isFull, setIsFull] = useState(false);
    const [isCountZero , setIsCountZero] = useState(true);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect( () => {
        console.log("===구분선===");
        console.log("useEffect() is called");
        console.log(`isFull : ${isFull}`);
        console.log(`isCountZero : ${isCountZero}`);
    }); // 업데이트 시마다 실행

    useEffect( () => {
        setIsFull(count >=MAX_CAPACITY);
        console.log(`isfull > Current count value: ${count}`);
    }, [count]); // count 변화시마다 실행

    useEffect(()=>{
        setIsCountZero(count);
        console.log(`iszero > Current count value: ${count}`);
    }, [count]);

    return(
        <div style={{padding : 20}}>
            <p>{`총 ${count}명 수용함`}</p>
            <button onClick={increaseCount} disabled={isFull}> 입장</button>
            <button onClick={decreaseCount} disabled={!isCountZero}> 퇴장</button>
            {isFull && <p style={{color: 'red'}}>정원이 가득 참</p>}
        </div>
    );
}

export default Accomodate;
    