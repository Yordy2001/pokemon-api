import axios, { AxiosInstance } from 'axios'
// import  { Component } from 'react'

export default class fetchApi{
    api!: AxiosInstance;

    constructor(){
        this.api = axios.create({
            baseURL:"http://localhost:5000"
        })
    }

}

