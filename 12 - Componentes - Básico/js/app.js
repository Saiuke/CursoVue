Vue.component('comp',{
    template: `
    <div>
        <h1>{{ aula }}</h1>
        <h2>{{ modulo }}</h2>
        <button @click="alterarAula">Alterar aula</button>
        <button @click="alterarModulo">Alterar módulo</button>
    </div>
    `,
    data: function (){
      return {
        aula: 'Usando Refs',
        modulo: 'Módulo: Instancia Vue'
      }
    },
    computed: {

    },
    watch: {

    },
    methods: {
        alterarAula(){
        this.aula += '#'
        },
        alterarModulo(){
        this.modulo += '#'
        }
    }
})

const vm = new Vue({
    el: '#app',
});
