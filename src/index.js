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
  rowCellClassName: 'simple-table-cell',
  footerClassName: 'simple-table-foot',
  footerRowClassName: 'simple-table-foot-row',
  footerCellClassName: 'simple-table-foot-cell'
};

/* Use 'options.showFooter = true' to test footer */
const footer = {
  _id: '{{objectId()}}',
  index: '{{index()}}',
  guid: '{{guid()}}',
  isActive: '{{bool()}}',
  balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
  age: '{{integer(20, 40)}}',
  eyeColor: '{{random("blue", "brown", "green")}}',
  name: '{{firstName()}} {{surname()}}',
  gender: '{{gender()}}',
  company: '{{company().toUpperCase()}}',
  email: '{{email()}}',
  phone: '+1 {{phone()}}',
  address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
  about: '{{lorem(1, "paragraphs")}}',
  registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  latitude: '{{floating(-90.000001, 90)}}',
  longitude: '{{floating(-180.000001, 180)}}'
};

ReactDOM.render(
  <Table data={users} footer={footer} {...options}/>,
  document.getElementById('content')
);