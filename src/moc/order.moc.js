const tableData = [
	{
		rowNum: 1,
		imgSrc: 'http://img.nothingshop.com/images/201103/default/preview.jpg',
		sku: '201103',
		size: 'M',
		barcode: '1234567891234',
		price: 50,
		count: 3,
		sum: 150,
	},
	{
		rowNum: 2,
		imgSrc: 'http://img.nothingshop.com/images/201102/default/preview.jpg',
		sku: '201102',
		size: 'XL',
		barcode: '1234567891234',
		price: 50,
		count: 3,
		sum: 150,
	},
];

export function getMocOrderContent() {
	return tableData;
}
