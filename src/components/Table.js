import React from 'react';

export default class Table extends React.Component {
  render() {
    const {
      data,
      footer,
      dataRowPrimaryKey,
      tableClassName,
      headClassName,
      headRowClassName,
      headCellClassName,
      bodyClassName,
      rowClassName,
      rowCellClassName,
      footerClassName,
      footerRowClassName,
      footerCellClassName,
      showFooter,
      showHeader,
      showBody
    } = this.props;
    const heads = data.length ? Object.keys(data[0]) : [];

    let headerElement = null;
    if (showHeader) {
      const headRow = heads.map((head, index) =>
        <th className={headCellClassName} key={index}>
          {head}
        </th>
      );

      headerElement = (
        <thead className={headClassName}>
          <tr className={headRowClassName}>
            {headRow}
          </tr>
        </thead>
      )
    }

    let footerElement = null;
    if (showFooter) {
      const footerRow = heads.map((head, index) =>
        <td className={footerCellClassName} key={index}>
          {footer[head]}>
        </td>
      );

      footerElement = (
        <tfoot className={footerClassName}>
          <tr className={footerRowClassName}>
            {footerRow}
          </tr>
        </tfoot>
      );
    }

    let bodyElement = null;
    if (showBody) {
      const dataRows = data.map((item, index) => {
        const dataRowIndex = dataRowPrimaryKey ? item[dataRowPrimaryKey] : index;

        return (
          <tr className={rowClassName} key={dataRowIndex}>
            {
              heads.map((head, index) =>
                <td className={rowCellClassName} key={index}>
                  {item[head]}
                </td>
              )
            }
          </tr>
        )
      });

      bodyElement = (
        <tbody className={bodyClassName}>
          {dataRows}
        </tbody>
      )
    }

    return (
      <table className={tableClassName}>
        {headerElement}
        {bodyElement}
        {footerElement}
      </table>
    );
  }
}

Table.propTypes = {
  data: React.PropTypes.array,
  footer: React.PropTypes.object,
  dataRowPrimaryKey: React.PropTypes.string,
  tableClassName: React.PropTypes.string,
  headClassName: React.PropTypes.string,
  headRowClassName: React.PropTypes.string,
  headCellClassName: React.PropTypes.string,
  bodyClassName: React.PropTypes.string,
  rowClassName: React.PropTypes.string,
  rowCellClassName: React.PropTypes.string,
  footerClassName: React.PropTypes.string,
  footerRowClassName: React.PropTypes.string,
  footerCellClassName: React.PropTypes.string,
  showFooter: React.PropTypes.bool,
  showHeader: React.PropTypes.bool,
  showBody: React.PropTypes.bool
};

Table.defaultProps = {
  data: [],
  footer: {},
  dataRowPrimaryKey: '',
  tableClassName: '',
  headClassName: '',
  headRowClassName: '',
  headCellClassName: '',
  bodyClassName: '',
  rowClassName: '',
  rowCellClassName: '',
  footerClassName: '',
  footerRowClassName: '',
  footerCellClassName: '',
  showFooter: false,
  showHeader: true,
  showBody: true
};