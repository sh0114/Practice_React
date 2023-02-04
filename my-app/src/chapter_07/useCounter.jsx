import React, {useState, useEffect} from 'react';

function useCounter(initialValue) { 
    // react hook 만듦 , 어떤 함수 컴포넌트에서든지 count hook 사용가능
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count)=> count+1);
    const decreaseCount = () => setCount((count) => Math.max(count-1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;