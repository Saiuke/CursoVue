new Vue({
	el: '#desafio',
	data: {
		statusEfeito: false,
		activeClass: '',
		efeito:'',
		botaoEfeito: 'Iniciar Efeito',
		blueBackground: 'blueBackground',
		movingAround: true,
		thatClass:'',
		barWidth: 0,
		barTimer: null,
	},
	computed:{
		progressBar(){
			return {
				width: this.barWidth + '%'
			}
		}		
	},
	watch:{
		barWidth(velho, novo){
			if(novo == 99){
				clearInterval(this.barTimer);
				this.barTimer = null;
			}
		}
	},
	methods: {
		iniciarEfeito() {
			if (this.statusEfeito == false) {
				this.statusEfeito = true;
				this.botaoEfeito = 'Parar Efeito';
				this.efeito = setInterval(() => {
					this.activeClass = this.activeClass == 'destaque' ? 'encolher' : 'destaque';
				}, 500)
			} else {
				this.statusEfeito = false;
				this.activeClass = '';
				clearInterval(this.efeito);
				this.botaoEfeito = 'Iniciar Efeito';
			}
		},
		iniciarProgresso() {
			if(this.barWidth != '100' && this.barTimer == null){
				this.barTimer = setInterval(() => {
					this.barWidth++
				}, 50)
			}
		}
	}
})