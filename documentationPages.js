window.Webflow ||= [];
window.Webflow.push(() => {
	function openAccordion(){
		let accordions = $('.accordion2_component');
		for (let i=0; i<accordions.length; i++)
		{
			if(accordions.eq(i).find('.categorie-page_wrapper.w--current').length !== 0){
			accordions.eq(i).find('.accordion2_top').click();}
		}
	};
	
	function deleteMenu(){
		let currentProd = $('#current-product');
		let productList = $('.product-list');
		let idList;
		for (let i=0; i<productList.length; i++)
		{
			if (currentProd[0].innerHTML == productList.eq(i).find('.navbar-dropdown1_dropdown-link')[0].innerHTML)
		{
			idList = i;
			};
		}
		productList.eq(idList).remove();
	};

	deleteMenu();
	setTimeout(openAccordion, 400);
});
