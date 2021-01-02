<template>
  <div class="contador">
      <span>{{contador}}</span>
      <button @click='adicionar'>Subtrair</button>
      <button @click='subtrair'>Adicionar</button>
  </div>
</template>
<script>
export default {
    data(){
        return{
            contador: 0
        }
    },
    methods: {
        adicionar(){
            this.contador ++
        },
        subtrair(){
            this.contador--
        }
    }
}
</script>
<style lang="stylus" scoped>
    .contador{
        width: 30%;
        height 150px;
        background-color: red; 
    }
</style>