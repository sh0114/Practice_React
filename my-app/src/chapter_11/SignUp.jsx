import React, {useState} from "react";

function SignUp(props){
    const [name, setName] = useState("홍길동");
    const [hobby, setHobby] = useState("영화");
    let listHobby = [];
    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeHobby = (event) => {
       /* listHobby.push(event.target.value);
        listHobby.map((elem, index) => {
            console.log(`elem : ${elem}, index : ${index}`);
        });*/
        setHobby(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`당신의 이름은 : ${name}, 취미는 : ${hobby}`);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>이름:
                <input type="text" value={name} onChange={handleChangeName}/>
            </label> <br/>
            <select value={hobby} onChange={handleChangeHobby}>
                <option value="운동">운동</option>
                <option value="독서">독서</option>
                <option value="영화">영화</option>
                <option value="음악">음악</option>
                <option value="뒹굴">뒹굴</option>
            </select> <br/>
            <button type="submit">제출하기</button>
        </form>
    );

}

export default SignUp;