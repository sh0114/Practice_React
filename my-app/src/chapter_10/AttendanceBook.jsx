import React from 'react';

const students = [
    {id : "23022001", name : "sujin"},
    {id : "23022002", name : "sunghee"},
    {id : "23022003", name : "Chanook"},
    {id : "23022004", name : "chaewon"},
    {id : "23022005", name : "yujin"},
    {id : "23022006", name : "sakura"},

];

function AttedanceBook(props){
    return(
        students.map((student)=> 
        <li key={student.id}>
            id : {student.id} &nbsp;
            name : {student.name}
            <hr/>
        </li>)
    );
}

export default AttedanceBook;