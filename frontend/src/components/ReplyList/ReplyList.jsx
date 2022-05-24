import axios from "axios"
import { useEffect, useState } from "react"
import Reply from "../Reply/Reply"
import ReplyForm from "../ReplyForm/ReplyForm"
import "./ReplyList.css"
import { URL_HOST } from "../../urlHost";

const ReplyList = (props) => {
    const [replies, setReplies]=useState([])

    async function getCommentReplies(commentId){
        let response = await axios.get(`${URL_HOST}/api/replies/${commentId}/view`);
        setReplies(response.data);}

    useState(()=>{
        getCommentReplies(props.commentId)
    },[])




    return(
        <div className="replies">
            <details>
                <summary>Reply</summary>
                <ReplyForm commentId={props.commentId} getCommentReplies={getCommentReplies}/>
            </details>
            <details>
                <summary>View Replies</summary>
                {replies.map((element)=>{
                    return(
                        <div key={element.id} className='replies'>
                            <Reply reply={element} />
                        </div>
                    )
                })}
            </details>
            <div className="replies">
            </div>
        </div>
    )
}
export default ReplyList