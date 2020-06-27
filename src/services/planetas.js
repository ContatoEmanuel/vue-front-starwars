import {http} from './config'

export default{
    listar:()=>{
        return http.get('planetas')
    },

    adicionar:(planeta)=>{
        return http.post('planeta',planeta)
    }
}