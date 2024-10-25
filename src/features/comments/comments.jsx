import { useState } from "react"
import { BookItem } from "../../component/book-item"
import { CommentList } from "../../component/comment-list"
import { Modal } from "../../component/modal"

export const Comments = () => {

    const [open, setOpen] = useState(false)

    return <div className="block-comment">

        <div>
            <BookItem />
            <CommentList/>
        </div>
        
        <button
            onClick={() => setOpen(true)}
        >Add comment</button>

        {
            open && <Modal 
                        onClose={() => setOpen(false)}
                    />
        }
    </div>
}