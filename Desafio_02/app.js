new Vue({
    el: '#app',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta: function(){
            alert('Yeeeha!')
        },
        changeValue: function (event){
            this.valor = event.target.value
        }
    }
})