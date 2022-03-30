import fetchApi from "./fetchApi";

export default class Pokemon extends fetchApi{

    async get(){
        const respose = await this.api?.get('/pokemon');
        return respose
    }

    async post({ params, endPoint }:any){
        const response = await this.api.post(endPoint,{
            data: params
        })
        return response.data
    }

    async put({ params, endPoint }:any){
        const response = await this.api.put(endPoint,{
            data: params
        })
        return response.data
    }

    async delete(id:any){
        await this.api.delete(id)
    }
}