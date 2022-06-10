import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import getMocStocks from '../../../../moc/stocks.moc';
import DataTable from '../../../common/dataTable';
import Pagination from '../../../common/pagination';
import { filterStockTable, sortStocksTable } from './helpers';
import { PRODUCTS_PER_PAGE, stocksTableColumns } from './stocks.table.conf';
import StocksToolbar from './stocksToolbar';
import { toolbarInitialState, toolbarSortOptions } from './stocks.toolbar.conf';

const tableData = getMocStocks().slice(0, 215);

const Stocks = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [toolbarState, setToolbarState] = useState(toolbarInitialState);
	const [filteredTableData, setFilteredTableData] = useState(() => tableData);

	const handlePageChange = (pageNum) => {
		setSearchParams({ page: pageNum });
		window.scrollTo(0, 0);
	};

	const handleToolbarChange = (data) => {
		setToolbarState((prev) => {
			return { ...prev, ...data };
		});
	};

	useEffect(() => {
		let filteredStocks = filterStockTable([...tableData], toolbarState.search);
		filteredStocks = sortStocksTable(filteredStocks, toolbarState.sort);
		setFilteredTableData(filteredStocks);
	}, [toolbarState]);

	const pageNum = Number(searchParams.get('page')) || 1;

	return (
		<>
			<StocksToolbar state={toolbarState} sortOptions={toolbarSortOptions} onChange={handleToolbarChange} />
			<Pagination
				dataProp='data'
				itemsPerPage={PRODUCTS_PER_PAGE}
				activePageNum={pageNum}
				onChange={handlePageChange}
			>
				<DataTable columns={stocksTableColumns} data={filteredTableData} />
			</Pagination>
		</>
	);
};

export default Stocks;
