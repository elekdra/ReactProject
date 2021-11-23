import DataTable from 'react-data-table-component';

import './DocumentTable.css';
const paginationComponentOptions = {
  rowsPerPageText: 'No of Rows per page',
  rangeSeparatorText: 'of',
  selectAllRowsItem: true,
};
const columns = [
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'Training',
    selector: (row) => row.training,
    sortable: true,
  },
  {
    name: 'Version',
    selector: (row) => row.version,
    sortable: true,
  },
  {
    name: 'Company',
    selector: (row) => row.company,
    sortable: true,
  },
  {
    name: 'Action',
    selector: (row) => row.fileUrl,
    sortable: true,
  },
];

function DocumentTable(props) {
  console.log(props.fileItems);

  const data = props.fileItems;
  return (
    <div className='datatable-items'>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  );
}

export default DocumentTable;
