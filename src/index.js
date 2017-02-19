import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table';
import users from './data/users';

const options = {
  dataRowPrimaryKey: '_id'
};

ReactDOM.render(
  <Table data={users} options={options}/>,
  document.getElementById('content')
);