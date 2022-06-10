import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CURRENCY } from '../../../../../constants/currency';
import DataTable, { DataTableNumberCell, DataTableTextCell } from '../../../../common/dataTable';
import OrdersListToolBar from './ordersListToolbar';

const tableColumns = [
	{ title: 'Дата', element: <DataTableTextCell dataPath={'date'} /> },
	{ title: 'Номер', element: <DataTableTextCell dataPath={'number'} /> },
	{ title: 'Статус', element: <DataTableTextCell dataPath={'status'} /> },
	{ title: 'Количество', element: <DataTableTextCell dataPath={'count'} /> },
	{ title: 'Сумма', element: <DataTableNumberCell dataPath={'sum'} units={CURRENCY} /> },
];

const toolbarStatusOptions = [
	{ title: 'Новые', value: 'New' },
	{ title: 'Принятые', value: 'Accepted' },
	{ title: 'Архив', value: 'arch' },
];

function filterOrders(orders, filters) {
	let filteredOrders = [...orders].filter((order) => order.status === filters.status);

	if (filters.search) {
		filteredOrders = filteredOrders.filter((order) => order.number.includes(filters.search));
	}

	return filteredOrders;
}

const Orders = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const handleRowClick = (rowData) => {
		navigate(`/orders/${rowData.number}`);
	};

	const tableData = [
		{ date: '2022-05-09 11:30:00', number: 'YA-101232145400', status: 'New', count: 3, sum: 150 },
		{ date: '2022-05-09 11:35:00', number: 'YA-101232145465', status: 'New', count: 1, sum: 30 },
		{ date: '2022-05-08 11:35:00', number: 'YA-101232145477', status: 'Accepted', count: 12, sum: 300 },
		{ date: '2022-05-08 11:35:00', number: 'YA-101232145480', status: 'Accepted', count: 10, sum: 700 },
	];

	const handleChangeToolbarState = (data) => {
		const { name, value } = data;
		const currentSearchParams = Object.fromEntries([...searchParams, [name, value]]);

		if (!value) {
			delete currentSearchParams[name];
		}

		setSearchParams({ ...currentSearchParams });
	};

	const toolbarState = {
		search: searchParams.get('search'),
		status: searchParams.get('status') || toolbarStatusOptions[0].value,
	};

	const filteredOrders = filterOrders(tableData, toolbarState);

	return (
		<>
			<OrdersListToolBar
				state={toolbarState}
				onChange={handleChangeToolbarState}
				statusOptions={toolbarStatusOptions}
			/>
			<DataTable columns={tableColumns} data={filteredOrders} onRowClick={handleRowClick} />
		</>
	);
};

export default Orders;
