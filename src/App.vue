<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Planetas Front</a>
      </div>
    </nav>

    <div class="container">

      <ul v-for="(erro,index) of errors" :key="index">
        <li v-if="index <= 0">
          <b>Os campos não podem ficar vazios!</b>
        </li>
      </ul>

      <form @submit.prevent="adicionar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="planeta.nome">
          <label>Clima</label>
          <input type="text" placeholder="Clima" v-model="planeta.clima">
          <label>Terreno</label>
          <input type="text" placeholder="Terreno" v-model="planeta.terreno">

          <button class="waves-effect waves-light btn-small">Adicionar-Atualizar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>CLIMA</th>
            <th>TERRENO</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="planeta of planetas" :key="planeta.id">

            <td>{{planeta.nome}}</td>
            <td>{{planeta.clima}}</td>
            <td>{{planeta.terreno}}</td>
            <td>
              <button @click="atualizar(planeta)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(planeta)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Planeta from './services/planetas'

export default{

  data(){
    return{
      planeta:{
        id:'',
        nome:'',
        clima:'',
        terreno:''
      },
      planetas:[],
      errors:[]
    }
  },

  mounted(){
    this.listar()
  },
  
  methods:{

    adicionar(){
      
      if(!this.planeta.id){
        Planeta.adicionar(this.planeta).then(resposta => {
          this.planeta={}
          this.resposta = resposta
          alert('Planeta Adicionado com Sucesso!')
          this.listar()
          this.errors=[]
        }).catch(e =>{  
          this.errors=e.response.data.error
        })
      }else{
        Planeta.atualizar(this.planeta).then(resposta => {
          this.planeta={}
          this.resposta = resposta
          alert('Planeta Atualizado com Sucesso!')
          this.listar()
          this.errors=[]
        }).catch(e =>{  
          this.errors=e.response.data.error
        })
      }
    },

    listar(){
      Planeta.listar().then(resposta => { 
        this.planetas=resposta.data        
      })
    },

    remover(planeta){
      if(confirm('Deseja Excluir o Planeta?')){
        Planeta.remover(planeta).then(resposta =>{
          this.resposta = resposta
          this.listar()
          this.errors=[]
        }).catch(e=>{
          this.errors=e.response.data.error
        })
      }
      
    },

    atualizar(planeta){
      this.planeta=planeta
    }
  }
}
</script>