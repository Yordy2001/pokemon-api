import axios, { AxiosInstance } from 'axios'

export default class fetchApi{
    api: AxiosInstance;

    constructor(){
        this.api = axios.create({
            baseURL:`${process.env.REACT_APP_SERVER_URL}`
        })
    }

}

