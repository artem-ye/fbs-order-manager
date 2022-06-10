import srcData from './suppliers_products.json';

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomSize() {
	const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

	return SIZES[Math.ceil(getRandomArbitrary(0, SIZES.length - 1))];
}

function getMocStocks() {
	const products = srcData[0].products;

	const result = products.map((entry, index) => {
		const [sku, title] = entry.title.split('/');

		let barcode = String(index + 1);
		barcode = '0'.repeat(13 - barcode.length) + barcode;

		return {
			sku,
			title,
			imgSrc: `http://img.nothingshop.com/images/${sku}/default/preview.jpg`,
			barcode: barcode,
			price: getRandomArbitrary(1, 50).toFixed(2),
			discount: Math.floor(getRandomArbitrary(10, 50)),
			count: Math.floor(getRandomArbitrary(15, 150)),
			size: getRandomSize(),
		};
	});

	return result;
}

export default getMocStocks;
