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
      showBody,
      headers,
      suppressWarnings,
      showCaption,
      captionText,
      captionClassName
    } = this.props;

    let captionElement = null;
    if (showCaption) {
      captionElement = <caption className={captionClassName}>{captionText}</caption>;
    }

    let heads = [];

    if (headers.length) {
      /* Boolean OR prevent mnemonic and label to be a undefined or null (allow string methods) */
      headers.forEach(header => {
        if (typeof header === "string") {
          heads.push({mnemonic: header || '', label: header || ''});
        } else if (typeof header === "object") {
          heads.push({mnemonic: header.mnemonic || '', label: header.label || ''});
        }
        /* Do nothing if header has unknown type */
      });
    } else if (data.length) {
      heads.push(...Object.keys(data[0]).map(field => ({mnemonic: field, label: field})));
    }

    let headerElement = null;
    if (showHeader) {
      const headRow = heads.map((head, index) =>
        <th className={headCellClassName} key={index}>
          {head.label}
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
          {footer[head.mnemonic]}>
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
      if (!suppressWarnings && !dataRowPrimaryKey) {
        console.warn(
          "Table Component: \n" +
          "You must pass item's stable, predictable, and unique key in the component as a 'dataRowPrimaryKey' option.\n" +
          "Table can work well if the items are never reordered, but reorders will be slow."
        );
      }
      const dataRows = data.map((item, index) => {
        const dataRowIndex = dataRowPrimaryKey ? item[dataRowPrimaryKey] : index;

        return (
          <tr className={rowClassName} key={dataRowIndex}>
            {
              heads.map((head, index) =>
                <td className={rowCellClassName} key={index}>
                  {item[head.mnemonic]}
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
        {captionElement}
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
  showBody: React.PropTypes.bool,
  headers: React.PropTypes.array,
  suppressWarnings: React.PropTypes.bool,
  showCaption: React.PropTypes.bool,
  captionText: React.PropTypes.string,
  captionClassName: React.PropTypes.string
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
  showBody: true,
  headers: [],
  suppressWarnings: true,
  showCaption: false,
  captionText: '',
  captionClassName: ''
};