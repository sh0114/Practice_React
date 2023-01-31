import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="처음 만난 파이썬" numOfPage={200} />
            <Book name="처음 만난 리액트" numOfPage={300} />
        </div>
    );
}

export default Library;