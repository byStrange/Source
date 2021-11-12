console.log('Hello world') // Hello world


const __app__ = {
	data() {
		return {
			message: 'Hello world',
			html:''
		}
	},
	methods : {
		tester() {
			this.html = document.querySelector('input').value;
			document.querySelector('body').innerHTML += this.html
		}
	}
}
var vue = Vue.createApp(__app__)
vue.mount('#app1')