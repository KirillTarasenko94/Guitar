class Header {
    handleOpen() {
       shoppingPage.render();
    }

    render(count) {
    	const html = `
    	<div class="header-container">
            <div class="header-counter" onclick="headerPage.handleOpen()">
              🗑️ ${count}
            </div>   
    	</div>

    	`;
    	Root_Header.innerHTML = html;
    }
}

const headerPage = new Header();

