import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Container, Header, HeaderMenu, HeaderControls, ContentContainer } from './styles';

import logo from '../../assets/logo.png';
import { eraseSession } from '../../utils/session';
import history from '../../services/history';

export default ({ children }) => {
    const userData = {};
    const activePage = useLocation().pathname.replace('/', '');

    function handleLogout() {
        eraseSession();

        history.push('/');
    }

    return (
        <Container>
            <Header>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <HeaderMenu activePage={activePage}>
                    <Link id="orders" to="/products">
                        Products
                    </Link>
                </HeaderMenu>
                <HeaderControls>
                    <div>
                        <div>{userData.name}</div>
                        <div onClick={() => handleLogout()}>Logout</div>
                    </div>
                </HeaderControls>
            </Header>
            <ContentContainer>{children}</ContentContainer>
        </Container>
    );
};
