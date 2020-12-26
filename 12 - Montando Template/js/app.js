const vm = new Vue({
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
        this.modulo += '#'
        }
    }
});

vm.$mount('#app');