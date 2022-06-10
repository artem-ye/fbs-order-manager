import { SORT_DIRECTIONS } from '../../../common/sort';

export function sortStocksTable(data, sortOptions) {
	const { value: FIELD_NAME, direction: DIRECTION } = sortOptions;

	const [GETHER, LESS] = DIRECTION === SORT_DIRECTIONS.asc ? [1, -1] : [-1, 1];
	const sortFn = (a, b) => (a[FIELD_NAME] > b[FIELD_NAME] ? GETHER : LESS);
	return data.sort(sortFn);
}

export function filterStockTable(data, searchStr) {
	if (!searchStr) {
		return data;
	}

	return data.filter((item) => {
		return item.sku.includes(searchStr) || item.barcode.includes(searchStr);
	});
}
