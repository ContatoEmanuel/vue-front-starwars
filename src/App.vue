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
          <label>Temperatura</label>
          <input type="text" placeholder="Temperatura">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>CLIMA</th>
            <th>TEMPERATURA</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Tatooine</td>
            <td>Árido</td>
            <td>Deserto</td>
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

</script>

<style>

</style>
