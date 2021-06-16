const fetch = require('node-fetch');

const cheerio = require('cheerio');
const html = `https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct`;

const $ = cheerio.load(html);

let csrtToken = $('.csrftoken');
console.log(csrtToken.val());

// fetch('html', {
// 	body:
// 		'format=ajax&Quantity=1&pid=428411449216&csrf_token=mutjxjgDnd2M7NPpP1wo4pvWSEAj8qW6l4YhxOU4yUmVcBdX6N_aAel5xyMlmNR9UQ1Kw30LZA39Nf8Bkq6ITjTTWURVWbt2_eR_U9ozWaOXWMxZfWz0zfo7y0294WlfqMEn_VrnD1Bnjdjek8Igsmv_IO8DV5WviIr5HvcMsi4QX9e-wo8%3D',
// 	method: 'POST',
// 	mode: 'cors'
// })
// 	.then((res) => {
// 		console.log('result', res);
// 		console.log(`statusCode: ${res.statusCode}`);
// 	})
// 	.catch((err) => {
// 		console.log('error', err);
// 	});
