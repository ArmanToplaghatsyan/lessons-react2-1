import { createStore } from "redux";
import { IUser } from "../type/type";

const data: {users:IUser[]} = {
    users:[
        {id: 1, name: 'Anna', surname: "Annyan", age: 16},
        {id: 2, name: 'Ani', surname: "Ohanyan", age: 18},
        {id: 3, name: 'Mari', surname: "Araqelyan", age: 20},
    ]
}

const reducer = (state=data, action: any) => {
    state={...state};
    switch(action.type){
        case "addUser":
        state.users.push(action.value);
        break;
    case 'deleteUser':
        state.users = state.users.filter((elm) => elm.id != action.value)
    }

    return state
}

export const myStore2 = createStore(reducer)


export const addUser = (value: IUser) => {
    return {type: 'addUser', value}
}

export const deleteuser = (value: number) => {
    return {type: 'deleteUser', value}
}