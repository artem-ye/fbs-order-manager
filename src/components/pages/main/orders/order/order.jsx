import React from 'react';
import { CURRENCY } from '../../../../../constants/currency';
import { getMocOrderContent } from '../../../../../moc/order.moc';
import DataTable, { DataTableImageCell, DataTableNumberCell, DataTableTextCell } from '../../../../common/dataTable';

const tableColumns = [
	{ title: '#', element: <DataTableTextCell dataPath={'rowNum'} /> },
	{ title: 'Фото', element: <DataTableImageCell dataPath={'imgSrc'} /> },
	{ title: 'Артикул', element: <DataTableTextCell dataPath={'sku'} /> },
	{ title: 'Размер', element: <DataTableTextCell dataPath={'size'} /> },
	{ title: 'Штрихкод', element: <DataTableTextCell dataPath={'barcode'} /> },
	{ title: 'Количество', element: <DataTableTextCell dataPath={'count'} /> },
	{ title: 'Цена', element: <DataTableNumberCell dataPath={'price'} units={CURRENCY} /> },
	{ title: 'Скидка', element: <DataTableNumberCell dataPath={'discount'} units='%' /> },
	{ title: 'Сумма', element: <DataTableTextCell dataPath={'sum'} units={CURRENCY} /> },
];

const Order = () => {
	const tableData = getMocOrderContent();

	return (
		<>
			<h1 className='text-info m-2'>Заказ # 120 076</h1>
			<DataTable columns={tableColumns} data={tableData} />
		</>
	);
};

export default Order;
