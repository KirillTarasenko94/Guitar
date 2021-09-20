class Spiner {
 
 handleClear() {
 	Root_Spiner.innerHTML = '';
 }
	render() {
		const html = `
         <div class="spiner-container">
           <img class="spiner__img" src="components/Spiner/img/Pulse.svg" />
         </div>
		`;

		Root_Spiner.innerHTML = html;
	}
}

const spinerPage = new Spiner();