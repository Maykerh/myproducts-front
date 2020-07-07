import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0169c6;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        height: 400px;
        width: 20%;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f5f5f5;
        padding: 25px;
        border-radius: 3px;

        > div {
            margin: 10px 0 25px 0;
            width: 100%;
            display: flex;
            justify-content: center;

            img {
                width: 100%;
            }
        }
    }

    form {
        width: 100%;
    }

    .login-link {
        margin-top: 10px;
        text-align: center;
    }
`;
