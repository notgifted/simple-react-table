import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table';
import users from './data/users';

const options = {
  dataRowPrimaryKey: '_id',
  tableClassName: 'simple-table',
  headClassName: 'simple-table-head',
  headRowClassName: 'simple-table-head-row',
  headCellClassName: 'simple-table-header',
  bodyClassName: 'simple-table-body',
  rowClassName: 'simple-table-row',
  rowCellClassName: 'simple-table-cell'
};

ReactDOM.render(
  <Table data={users} options={options}/>,
  document.getElementById('content')
);