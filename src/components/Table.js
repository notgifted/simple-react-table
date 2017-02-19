import React from 'react';

export default class Table extends React.Component {
  render() {
    const data = this.props.data;
    const heads = data.length ? Object.keys(data[0]) : [];

    const headRow = heads.map((head, index) =>
      <th key={index}>{head}</th>
    );

    const dataRows = data.map((item, index) =>
      <tr key={index}>
        {
          heads.map((head, index) =>
            <td key={index}>{item[head]}</td>
          )
        }
      </tr>
    );

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
  data: React.PropTypes.array
};

Table.defaultProps = {
  data: []
};