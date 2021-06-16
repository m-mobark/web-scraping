const cheerio = require('cheerio');
const axios = require('axios');
const fetch = require('node-fetch');

let regExpression = /(\t|\n)/g;
let url = 'https://www.shopdisney.co.uk/disney-store-disney-princess-costume-collection-for-kids-2841047080168M.html';

// ** git data from url **
const gitAllData = async () => {
	try {
		const urlResponse = await axios.get(url).then((res) => {
			// console.log(res.data); //git data from uri
		});
	} catch (e) {
		console.log(e);
	}
};
gitAllData();

axios(url)
	.then((response) => {
		const html = response.data;
		const $ = cheerio.load(html);
		const product = $('.product__details');
		//console.log(product);  // git product details
		const csrf_Token = $('.csrf_Token');
		//console.log(csrf_Token.val()); // git toke

		const productInfo = [];

		product.each(function() {
			const product_Name = $(this).find('.product__name').text();
			const old_price = $(this).find('.price__regular').text();
			const current_price = $(this).find('.price__current').text();
			const discount = $(this).find('.price__discount').text();

			productInfo.push({
				name: product_Name,
				old_price: old_price.replace(regExpression, ''),
				current_price: current_price.replace(regExpression, ''),
				Discount: discount.replace(regExpression, '')
			});
		});

		console.log(productInfo);
	})
	.catch(console.error);

// ** Post data to cart **

fetch('https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct', {
	body: 'format=ajax&Quantity=1&pid=428411449216&csrf_token=${csrf_Token}',
	method: 'POST'
})
	.then((res) => {
		console.log('result', res);
	})
	.catch((err) => {
		console.log('error', err);
	});
