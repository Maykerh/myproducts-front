import { createGlobalStyle } from 'styled-components';

import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
	html,
	body,
	#root {
		height: 100%;
		margin: 0;
		padding: 0;
		overflow: auto;
	}

	body {
        background-color: #f5f5f5;
		-webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
	}

	body,
	input,
	a {
		text-decoration: none;
	}
`;

export default GlobalStyle;
