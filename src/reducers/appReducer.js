import { ADD, DELETE, EDIT } from '../actions/appActions.js';

const appReducer = (state = [], action) => {
    switch (action.type){
        case ADD:
            return [...state, action.payload]
        case EDIT:
            return state.map(currentStateElement => {
                if (currentStateElement.id !== action.payload.id){
                    return currentStateElement
                }

                const {author, comment, rate, id} = action.payload

                return ({
                    author : author,
                    comment: comment,
                    id: id,
                    rate: rate
                })
            })
        case DELETE:
            return state.filter(currentStateElement => 
                currentStateElement.id !== action.payload.id)
        default:
            console.warn(`nie mamy akcji typu ${action.type}`);
            return state
    }
}

export default appReducer

