import React from 'react';
import { CURRENCY } from '../../../../constants/currency';

import { DataTableImageCell, DataTableNumberCell, DataTableTextCell } from '../../../common/dataTable';

export const stocksTableColumns = [
	{ title: 'Артикул', element: <DataTableTextCell dataPath={'sku'} /> },
	{ title: 'Фото', element: <DataTableImageCell dataPath={'imgSrc'} /> },
	{ title: 'Размер', element: <DataTableTextCell dataPath={'size'} /> },
	{ title: 'Штрихкод', element: <DataTableTextCell dataPath={'barcode'} /> },
	{ title: 'Цена', element: <DataTableNumberCell dataPath={'price'} units={CURRENCY} /> },
	{ title: 'Скидка', element: <DataTableNumberCell dataPath={'discount'} units='%' /> },
	{ title: 'В наличии', element: <DataTableTextCell dataPath={'count'} /> },
];

export const PRODUCTS_PER_PAGE = 25;
