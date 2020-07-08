import React, { useRef, useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';

import Table from './Table';
import Controls from './Controls';

import { Container } from './styles';

import api from '../../services/api';
import history from '../../services/history';
import { deleteProduct } from './actions';

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState(null);
    const [total, setTotal] = useState(0);
    const [reload, setReload] = useState(0);
    const [filters, setFilters] = useState({});

    const tableWrapperRef = useRef();

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);

            const response = await api.get('/products', {
                params: { page, ...filters },
            });

            setTotal(response.data.count);
            setProducts(response.data.rows);

            setIsLoading(false);
        };

        loadData();
    }, [page, filters, reload]);

    const hasRecordsInActualPageAfterDelete = () => {
        return total - 1 > (page - 1) * 10;
    };

    const onDelete = async id => {
        if (window.confirm('Are you sure you want to delete?')) {
            await deleteProduct(id);

            if (!hasRecordsInActualPageAfterDelete()) {
                setPage(page - 1);
            } else {
                setReload(reload + 1);
            }
        }
    };

    const onEdit = async id => {
        history.push({
            pathname: '/products/form',
            state: { id },
        });
    };

    const onSearch = searchFilters => {
        const newFilters = {};

        Object.keys(searchFilters).forEach(key => {
            if (searchFilters[key] !== null && searchFilters[key] !== '') {
                newFilters[key] = searchFilters[key];
            }
        });

        if (Object.keys(newFilters).length > 0) {
            setPage(1);
        }

        setFilters(newFilters);
    };

    const getTableMaxHeight = () => {
        return window.parent.innerHeight - 320;
    };

    return (
        <Container>
            <ContentHeader title={'Products'} />
            <Controls isLoading={isLoading} onSearch={onSearch} />
            <div className="table-wrapper" ref={tableWrapperRef}>
                <Table
                    products={products}
                    total={total}
                    isLoading={isLoading}
                    onChangePage={setPage}
                    maxHeight={getTableMaxHeight()}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    currentPage={page}
                />
            </div>
        </Container>
    );
};

export default Products;
