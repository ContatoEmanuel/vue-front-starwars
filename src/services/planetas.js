import {http} from './config'

export default{
   
    adicionar:(planeta)=>{
        return http.post('planeta',planeta)
    },

    listar:()=>{
        return http.get('planetas')
    },

    atualizar:(planeta)=>{
        return http.put('planeta', planeta)
    }
}