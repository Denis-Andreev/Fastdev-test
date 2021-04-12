import axios from "axios";
import {paths} from "./paths";

export const api = () => {
    return {
        open: () => ({
            getUsers: () => instanceAxiosOpen().get(paths.users)
        }),
        close: () => ({
        })
    }
}


const instanceAxiosOpen = () =>
    axios.create({
        baseURL: paths.baseURL,
        headers: {
            ContentType: 'application/json',
        },
    })