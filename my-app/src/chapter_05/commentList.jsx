import React from 'react';
import Comment from "./comment";

const comments = [
    {
        name : "성희", 
        comment : "첫번째 댓글"
    },
    {
        name : "차눅",
        comment : "두번째 댓글",
    },
    {
        name : "무슨이름하지",
        comment : "세번째 댓글"
    }
]

function CommentList(props){
    return(<div>
        {
            comments.map((comment) =>{
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })
        }
    </div>);
}

export default CommentList;