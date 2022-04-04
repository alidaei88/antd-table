import React from 'react';
import { Table } from 'antd';
import './MyTable.css'


const MyTable = (props) => {
    const { columns, data } = props
    return (
        <Table className='table' columns={columns} dataSource={data} />
    );
}

export default MyTable;