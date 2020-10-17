function MeuVue(param) {
    console.log(param.el);
    this.$el = document.querySelector(param.el)
    this.$data = param.data

    //Setter and Getter for object properties
    for (let atr in this.$data) {
        Object.defineProperty(this, atr, {
            get: () => {
                return this.$data[atr]
            },
            set: value => {
                this.$data[atr] = value
            }
        })
    }

    //Data interpolation
    const regex = /\{\{([\s\w+]*)\}\}/g
    this.$el.innerHTML = this.$el.innerHTML.replace(regex, (match, $1) => {
        const value = this[$1.trim()]
        return value ? value : eval($1)
    })
}

const vm = new MeuVue({
    el: '#app',
    data: {
        nome: 'Maria',
        sobrenome: 'das Dores',
    }
})

console.log(vm.nome);