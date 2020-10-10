new Vue({
    el: '#app',
    data: {
        aplicarBlueBackground : false,
        aplicarGreen: false,
    },
    computed: {
        greenBack(){
            return{
                greenBack: this.aplicarGreen,
            }
        }
    },
    methods: {

    },
    watch: {

    }
})
