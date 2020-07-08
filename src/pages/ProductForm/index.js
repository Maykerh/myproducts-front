import React, { useState, useEffect } from 'react';
import { Form, Button, Input, InputNumber, Spin } from 'antd';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';

import history from '../../services/history';

import ContentHeader from '../../components/ContentHeader';

import { Container, HeaderWrapper, FormWrapper } from './styles';
import { createProduct, loadProductData, updateProduct } from './actions';

const ProductForm = props => {
    const id = props.location.state ? props.location.state.id : null;

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(id !== null);
    const [productData, setProductData] = useState(null);

    const handleProductSubmit = values => {
        setIsLoading(true);

        if (id) {
            updateProduct(id, values);
        } else {
            createProduct(values);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        const load = async () => {
            if (id) {
                const response = await loadProductData(id);

                setProductData(response.data);
            }

            setIsLoadingData(false);
        };

        load();
    }, [id]);

    if (isLoadingData) {
        return <Spin />;
    }

    return (
        <Container>
            <Form
                layout={'vertical'}
                name="product"
                initialValues={{ ...productData, remember: true }}
                onFinish={handleProductSubmit}
            >
                <HeaderWrapper>
                    <ContentHeader title={'Product data'} />
                    <Button
                        disabled={isLoading}
                        icon={<ArrowLeftOutlined />}
                        onClick={() => history.push('/products')}
                    >
                        {'Return'}
                    </Button>
                    <Button
                        loading={isLoading}
                        type="primary"
                        htmlType="submit"
                        icon={<CheckOutlined />}
                    >
                        {isLoading ? 'Saving' : 'Save'}
                    </Button>
                </HeaderWrapper>
                <FormWrapper>
                    <div className="row">
                        <Form.Item
                            label="name"
                            name="name"
                            style={{ width: '100%' }}
                            rules={[{ required: true, message: 'Please input product name!' }]}
                        >
                            <Input size={'large'} disabled={isLoading} maxLength={255} />
                        </Form.Item>
                    </div>
                    <div className="row">
                        <Form.Item
                            label="Category"
                            name="category"
                            style={{ width: '100%', marginRight: '15px' }}
                            rules={[{ required: true, message: 'Please input product category!' }]}
                        >
                            <Input size={'large'} disabled={isLoading} maxLength={255} />
                        </Form.Item>
                        <Form.Item
                            label="Price"
                            name="price"
                            style={{ width: '250px', marginRight: '15px' }}
                            rules={[{ required: true, message: 'Please input product price!' }]}
                        >
                            <InputNumber
                                formatter={value =>
                                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                }
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                size={'large'}
                                style={{ width: '100%' }}
                                disabled={isLoading}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Quantity"
                            name="quantity"
                            style={{ width: '250px' }}
                            rules={[{ required: true, message: 'Please input product quantity!' }]}
                        >
                            <InputNumber
                                size={'large'}
                                style={{ width: '100%' }}
                                disabled={isLoading}
                            />
                        </Form.Item>
                    </div>
                    <div className="row">
                        <Form.Item
                            label="Description"
                            name="description"
                            maxLength={1000}
                            style={{ width: '100%' }}
                            rules={[
                                { required: true, message: 'Please input product description!' },
                            ]}
                        >
                            <Input.TextArea style={{ height: '150px' }} disabled={isLoading} />
                        </Form.Item>
                    </div>
                </FormWrapper>
            </Form>
        </Container>
    );
};

export default ProductForm;
