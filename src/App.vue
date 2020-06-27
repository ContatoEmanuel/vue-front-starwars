<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Planetas Front</a>
      </div>
    </nav>

    <div class="container">

      <form>

          <label>Nome</label>
          <input type="text" placeholder="Nome">
          <label>Clima</label>
          <input type="text" placeholder="Clima">
          <label>Terreno</label>
          <input type="text" placeholder="Terreno">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

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
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
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
      planetas:[]
    }
  },

  mounted(){
    Planeta.listar().then(resposta => {
      console.log(resposta.data)
      this.planetas=resposta.data
    })
  }  
}
</script>

<style>

</style>
