<template>
  <div id="app">
   <h1 :class="classeTitulo">Título teste</h1><br>
   <button @click='mudarClasse'>Mudar Classe</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      classeTitulo: 'arbey',
    }
  },
  methods: {
    mudarClasse(){
      if(this.classeTitulo == 'arbey'){
        this.classeTitulo = 'noxious';
      }else{
        this.classeTitulo = 'arbey'
      }
    }
  }
}
</script>

<style>
  .arbey{
    background-color: aqua;
    color: brown;
    font-weight: 800;
  }
  .noxious{
    background-color: red;
    color:white;
    font-weight: 300;
  }
</style>
