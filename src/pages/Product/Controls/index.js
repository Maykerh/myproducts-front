import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import history from '../../../services/history';

import { Container } from './styles';

const styles = {
    input: { minWidth: '150px', width: '100%', marginRight: '15px' },
};

const Controls = ({ isLoading, onSearch }) => {
    const [name, setName] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState(null);

    return (
        <Container>
            <div>
                <Input
                    addonBefore={'Name'}
                    style={styles.input}
                    value={name}
                    onChange={t => setName(t.target.value)}
                />
                <Input
                    addonBefore={'Category'}
                    style={styles.input}
                    value={category}
                    onChange={t => setCategory(t.target.value)}
                />
                <Input
                    addonBefore={'Description'}
                    style={styles.input}
                    value={description}
                    onChange={t => setDescription(t.target.value)}
                />
                <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    onClick={() => {
                        onSearch({ name, description, category });
                    }}
                >
                    Search
                </Button>
            </div>
            <div>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => history.push('/products/form')}
                >
                    New
                </Button>
            </div>
        </Container>
    );
};

Controls.defaultProps = {
    isLoading: false,
};

Controls.propTypes = {
    isLoading: PropTypes.bool,
    onSearch: PropTypes.func.isRequired,
};

export default Controls;
