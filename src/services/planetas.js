import {http} from './config'

export default{
   
    adicionar:(planeta)=>{
        return http.post('planeta',planeta)
    },

    listar:()=>{
        return http.get('planetas')
    },

    remover:(planeta)=>{
        return http.delete('planeta',{data:planeta})
    },
    

    atualizar:(planeta)=>{
        return http.put('planeta', planeta)
    }
}