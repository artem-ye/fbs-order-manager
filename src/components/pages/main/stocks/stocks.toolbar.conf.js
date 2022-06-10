import { SORT_DIRECTIONS } from '../../../common/sort';

export const toolbarSortOptions = [
	{ title: 'Артикул', value: 'sku' },
	{ title: 'Цена', value: 'price' },
	{ title: 'Скидка', value: 'discount' },
	{ title: 'Остаток', value: 'count' },
];

export const toolbarInitialState = {
	search: '',
	sort: { value: toolbarSortOptions[0].value, direction: SORT_DIRECTIONS.asc },
};
