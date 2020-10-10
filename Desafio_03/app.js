new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor igual' : 'Valor diferente'
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                    console.log('Valor alcançado, resentando...')
                    this.valor = 0;
            }, 2000)
        }
    }
});