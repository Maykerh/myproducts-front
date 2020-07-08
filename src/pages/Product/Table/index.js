import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';

const ProductTable = ({
    products,
    total,
    isLoading,
    onChangePage,
    maxHeight,
    onDelete,
    onEdit,
    currentPage,
}) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ellipsis: true,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            ellipsis: true,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: price => `$ ${price.toFixed(2)}`,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Edit',
            key: 'edit',
            render: (text, record) => <Button onClick={() => onEdit(record.id)}>Edit</Button>,
        },
        {
            title: 'Delete',
            key: 'delete',
            render: (text, record) => <Button onClick={() => onDelete(record.id)}>Delete</Button>,
        },
    ];

    return (
        <Table
            dataSource={products}
            loading={isLoading}
            pagination={{
                pageSize: 10,
                total,
                onChange: p => onChangePage(p),
                current: currentPage,
            }}
            columns={columns}
            scroll={{ y: maxHeight }}
        />
    );
};

ProductTable.defaultProps = {
    products: [],
};

ProductTable.propTypes = {
    products: PropTypes.array,
    total: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onChangePage: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    maxHeight: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
};

export default ProductTable;
