import { ADD } from "../actions/appActions";

export const validateAuthorMiddleware = store => next => action => {
    if (action.type === ADD && !action.payload.author.length){
        console.warn("nie ma autora")
        return
    }
    next(action)
}