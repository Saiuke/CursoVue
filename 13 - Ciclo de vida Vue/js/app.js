new Vue({
    el: '#app',
    data: {
        titulo: 'Ciclo de vida',
    },
    beforeCreate(){
        console.log('Antes de criar')
    },
    created(){
        console.log('Criado')
    },
    beforeMount(){
        console.log('Antes de montar')
    },
    mounted(){
        console.log('Montado')
    },
    beforeUpdate(){
        console.log('Antes de atulizado')
    },
    updated(){
        console.log('Atualizado')
    },
    beforeDestroy(){
        console.log('Antes de destruir')
    },
    destroyed(){
        console.log('Bye')
    },
    computed: {

    },
    watch: {

    },
    methods: {

    }
});