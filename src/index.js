import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table';
import users from './data/users';

ReactDOM.render(
  <Table data={users}/>,
  document.getElementById('content')
);