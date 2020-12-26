const vm = new Vue({
    el: '#app',
    data: {
        aula: 'Usando Refs',
        modulo: 'Módulo: Instancia Vue'
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
        this.modulo += '#';
        console.log(this.$ref.aulaRef.innerText)
        }
    }
});