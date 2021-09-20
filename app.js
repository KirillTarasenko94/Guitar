function render() {

  const productsStore = localStorageUtil.getProducts();
  headerPage.render(productsStore.length);

  aa.render();
}

spinerPage.render();

let Catalog = [];



fetch('http://myjson.dit.upm.es/api/bins/1ukc')
   .then(res => res.json())
   .then(body => {
   	  Catalog = body;
     setTimeout(function() {
        spinerPage.handleClear();
      render();
    },1000)
      
   })
   .catch(error => {
    spinerPage.handleClear();
     errorPage.render();
   })

