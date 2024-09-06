import React, { useState } from 'react';
import { editRate, addRate, deleteRate } from './actions/appActions';
import { useDispatch } from 'react-redux';

const Form = ({
    author = '',
    callback,
    comment = '',
    id,
    rate = 0
}) => {

    const dispatch = useDispatch()

    const [authorInput, setAutgorInput] = useState(author)
    const [rateInput, setRateInput] = useState(rate)
    const [commentInput, setCommentInput] = useState(comment)

    const handlChangeAuthor = e => setAutgorInput(e.target.value)
    const handlChangeRate = e => setRateInput(e.target.value)
    const handlChangeComment = e => setCommentInput(e.target.value)

    const handleOnSubmit = e => {
        e.preventDefault()

        const rateObject = {
            author: authorInput,
            comment: commentInput,
            id,
            rate: Number(rateInput)
        }

        console.log(rateObject);

        id ? dispatch(editRate(rateObject)) : dispatch(addRate(rateObject));

        if (id && callback) callback()
    }

    const handleDeleteRate = () => {
        if (id) {
            dispatch(deleteRate(id));
            if (callback) callback();
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label >
                    Author:
                    <input
                        onChange={handlChangeAuthor}
                        value={authorInput}
                        type="text" />
                </label>
            </div>
            <div>
                <label >
                    Ocena:
                    <input
                        onChange={handlChangeRate}
                        value={rateInput}
                        type="number" />
                </label>
            </div>
            <div>
                <label >
                    Komentarz:
                    <input
                        onChange={handlChangeComment}
                        value={commentInput}
                        type="text" />
                </label>
            </div>
            <button type="submit">
                {id ? "Edycja oceny" : "Dodaj ocene"}
            </button>
            {id && (
                <button type="button" onClick={handleDeleteRate}>
                    Usuń
                </button>
            )}
        </form>
    );
}


export default Form;