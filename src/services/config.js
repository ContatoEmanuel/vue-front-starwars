import axios from 'axios'

export const http = axios.create({
    baseURL:'https://java-apirest-starwars.herokuapp.com/api/'
})