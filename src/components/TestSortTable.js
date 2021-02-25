// import { Table, Button, Space } from 'antd';

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];

// export default function TestSortTable () {
//   state = {
//     filteredInfo: null,
//     sortedInfo: null,
//   };

//   function handleChange (pagination, filters, sorter) {
//     console.log('Various parameters', pagination, filters, sorter);
//     useState({
//       filteredInfo: filters,
//       sortedInfo: sorter,
//     });
//   };

//  function clearFilters () {
//     useState({ filteredInfo: null });
//   };

//   function clearAll () {
//     useState({
//       filteredInfo: null,
//       sortedInfo: null,
//     });
//   };

//  function setAgeSort () {
//     useState({
//       sortedInfo: {
//         order: 'descend',
//         columnKey: 'age',
//       },
//     });
//   };

//   function render() {
//     let { sortedInfo, filteredInfo } = state;
//     sortedInfo = sortedInfo || {};
//     filteredInfo = filteredInfo || {};
//     const columns = [
//       {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         filters: [
//           { text: 'Joe', value: 'Joe' },
//           { text: 'Jim', value: 'Jim' },
//         ],
//         filteredValue: filteredInfo.name || null,
//         onFilter: (value, record) => record.name.includes(value),
//         sorter: (a, b) => a.name.length - b.name.length,
//         sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
//         ellipsis: true,
//       },
//       {
//         title: 'Age',
//         dataIndex: 'age',
//         key: 'age',
//         sorter: (a, b) => a.age - b.age,
//         sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
//         ellipsis: true,
//       },
//       {
//         title: 'Address',
//         dataIndex: 'address',
//         key: 'address',
//         filters: [
//           { text: 'London', value: 'London' },
//           { text: 'New York', value: 'New York' },
//         ],
//         filteredValue: filteredInfo.address || null,
//         onFilter: (value, record) => record.address.includes(value),
//         sorter: (a, b) => a.address.length - b.address.length,
//         sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
//         ellipsis: true,
//       },
//     ];
//     return (
//       <>
//         <Space style={{ marginBottom: 16 }}>
//           <Button onClick={setAgeSort}>Sort age</Button>
//           <Button onClick={clearFilters}>Clear filters</Button>
//           <Button onClick={clearAll}>Clear filters and sorters</Button>
//         </Space>
//         <Table columns={columns} dataSource={data} onChange={handleChange} />
//       </>
//     );
//   }
// }