import React from 'react';

export default class Table extends React.Component {
  render() {
    const {data, options} = this.props;
    const heads = data.length ? Object.keys(data[0]) : [];

    const headRow = heads.map((head, index) =>
      <th className={options.headCellClassName} key={index}>{head}</th>
    );

    const dataRows = data.map((item, index) => {
      const dataRowIndex = this.props.dataRowPrimaryKey ? item[this.props.dataRowPrimaryKey] : index;

      return (
        <tr className={options.rowClassName} key={dataRowIndex}>
          {
            heads.map((head, index) =>
              <td className={options.rowCellClassName} key={index}>{item[head]}</td>
            )
          }
        </tr>
      )
    });

    return (
      <table className={options.tableClassName}>
        <thead className={options.headClassName}>
          <tr className={options.headRowClassName}>
            {headRow}
          </tr>
        </thead>
        <tbody className={options.bodyClassName}>
          {dataRows}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: React.PropTypes.array,
  options: React.PropTypes.shape({
    dataRowPrimaryKey: React.PropTypes.string,
    tableClassName: React.PropTypes.string,
    headClassName: React.PropTypes.string,
    headRowClassName: React.PropTypes.string,
    headCellClassName: React.PropTypes.string,
    bodyClassName: React.PropTypes.string,
    rowClassName: React.PropTypes.string,
    rowCellClassName: React.PropTypes.string
  })
};

Table.defaultProps = {
  data: [],
  options: {
    dataRowPrimaryKey: '',
    tableClassName: '',
    headClassName: '',
    headRowClassName: '',
    headCellClassName: '',
    bodyClassName: '',
    rowClassName: '',
    rowCellClassName: ''
  }
};