# simple-react-table

Simple ReactJS table component with few options

## Installation

yarn:
`yarn`

npm:
`npm install`

## Build

yarn:
`yarn start`

npm:
`npm run start`

## Run

yarn:
`yarn start-dev`

npm:
`npm run start-dev`

## Basic usage

Pass data and headers as JS array, footer as JS object and other options as string/boolean

```jsx
<Table data={users} footer={footer} {...options} />
```

```jsx
<Table data={users} showHeader={false} />
```

## Configuration

- `data`: Array of data objects (JS Object as key-value map)
- `footer`: JS Object like a data object but with values for footer
- `dataRowPrimaryKey`: stable, predicable, unique data key (in most cases id). See [ReactJS Reconciliation](https://facebook.github.io/react/docs/reconciliation.html)
- `tableClassName`: `<table>` class name
- `headClassName`: ``<thead>` (head) class name
- `headRowClassName`: Head `<tr>` class name
- `headCellClassName`: Head `<th>` class name
- `bodyClassName`: `<body>` (body) class name
- `rowClassName`: Body `<tr>` class name
- `rowCellClassName`: body `<td>` class name
- `footerClassName`: `<tfoot>` (footer) class name
- `footerRowClassName`: Footer `<tr>` class name
- `footerCellClassName`: Footer `<td>` class name
- `showFooter`: `true | false` If `true` shows table footer
- `showHeader`: `true | false` If `true` shows table header
- `showBody`: `true | false` If `true` shows table body
- `headers`: Header settings
- `suppressWarnings`: `true | false` If `false` shows console warnings
- `showCaption`: `true | false` If `true` shows table caption text
- `captionText`: Table caption text
- `captionClassName`: `<caption>` class name

## Headers

You can setup headers in three ways:

- all (by default)
If you want to show all fields in table, just ignore `headers` option.
- wihtout labels
Pass in `headers` array mnemonics that must be visible in table:
`headers: ['id', 'name']`
- with labels
`headers: [{mnemonic: 'id', label: 'ID'}, {mnemonic: 'name', label: 'Name'}, {mnemonic: 'email', label: 'E-mail'}]`

## License

MIT (https://opensource.org/licenses/mit-license.php)