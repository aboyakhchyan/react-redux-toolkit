import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../features/comments/comments.api";
import { useParams } from "react-router-dom";

export const Modal = ({ onClose }) => {

  const {id} = useParams()
  
  const [text, setText] = useState('')
  const [star, setStar] = useState(1) 

  const dispatch = useDispatch()
  
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={evt => evt.stopPropagation()}>
          <form onSubmit={evt => {
            evt.preventDefault()
            if(text.trim()) {
              dispatch(addComment({text: text, rate: star, book: id}))
              setText('')
              setStar(1)
            }
          }}>

            <input 
                type="text" 
                placeholder="Comment"
                value={text}
                onChange={evt => setText(evt.target.value)}
            />

            <select value={star} onChange={evt => setStar(+evt.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <button>add</button>
          </form>

          <button onClick={onClose}>close</button>
        </div>
      </div>
    </>
  );
};
