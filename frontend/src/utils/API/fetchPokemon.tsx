import fetchApi from "./fetchApi";
export default class Pokemon extends fetchApi{

    async get(endPoint:any){
        const response = await this.api?.get(endPoint);
        return response.data
    }

    async post( endPoint: string, data: any){
        const response = await this.api.post(endPoint, data)
        return response.data
    }

    async put({ params, endPoint }:any){
        const response = await this.api.put(endPoint,{
            data: params
        })
        return response.data
    }

    async delete(endPoint:any){
        await this.api.delete(endPoint)
    }
}
