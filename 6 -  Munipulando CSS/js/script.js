new Vue({
    el: '#app',
    data: {
        aplicarBlueBackground : false,
        aplicarGreen: false,
        classCSS: 'redBackground',
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
