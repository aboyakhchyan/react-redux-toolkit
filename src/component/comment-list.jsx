import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getComments } from "../features/comments/comments.api"
import { useParams } from "react-router-dom"

export const CommentList = () => {

    const {id} = useParams()

    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments.items)

    useEffect(() => {
        dispatch(getComments(id))
    }, [])

    return (
        <>
            <h3>CommentList</h3>
            {
                comments.map(comment => {
                const filled = new Array(comment.rate).fill('https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-256.png')
                return  <div 
                        key={comment.id}
                        style={{padding: 2, margin: 6, background: 'lightgray', color: 'black'}}
                    >
                        <p>{comment.text}</p>
                        {
                            filled.map((star, index) => <img key={index} src={star} style={{width: 20}}/>)
                        }
                    </div>
})
            }
        </>
    )
}