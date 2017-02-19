import React from 'react';

export default class Table extends React.Component {
  render() {
    const data = this.props.data;
    const heads = data.length ? Object.keys(data[0]) : [];

    const headRow = heads.map((head, index) =>
      <th key={index}>{head}</th>
    );

    const dataRows = data.map((item, index) => {
      const dataRowIndex = this.props.dataRowPrimaryKey ? item[this.props.dataRowPrimaryKey] : index;

      return (
        <tr key={dataRowIndex}>
          {
            heads.map((head, index) =>
              <td key={index}>{item[head]}</td>
            )
          }
        </tr>
      )
    });

    return (
      <table>
        <thead>
          <tr>
            {headRow}
          </tr>
        </thead>
        <tbody>
          {dataRows}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: React.PropTypes.array,
  options: React.PropTypes.shape({
    dataRowPrimaryKey: React.PropTypes.string
  })
};

Table.defaultProps = {
  data: [],
  options: {
    dataRowPrimaryKey: ''
  }
};