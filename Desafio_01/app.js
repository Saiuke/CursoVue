new Vue({
    el: '#app',
    data: {
        meuNome: 'Ezequias',
        minhaIdade: 29,
        sourceImage: 'https://pyxis.nymag.com/v1/imgs/2ae/a6c/1989c87daca92bac5c472990bbf5694334-rowdy-peacock.rsquare.w700.jpg',

    },
    methods:{
        idadeMult: function(){
            return this.minhaIdade * 3
        },
        randNum: function(){
            return Math.round(Math.random()) + 1
        }
    }
});