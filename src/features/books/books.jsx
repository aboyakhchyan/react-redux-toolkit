import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "./books.api"
import { Link } from "react-router-dom"

export const Books = () => {

    const books = useSelector(state => state.books.list)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getBooks())
    }, [])

    return <>
        <h3>Books {books.length}</h3>


        <div className="list-books">
            {
                books.map(book => 
                    <div key={book.id}>
                        <p>{book.title}</p>
                        <img 
                            src={book.photo}
                            style={{width: 150, height: 200}}
                        />
                        <p>{book.title}</p>
                        <Link to={`/book/${book.id}`}>comments</Link>
                    </div>
                )
            }
        </div>
    </>
}