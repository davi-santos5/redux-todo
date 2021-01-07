import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
	}

    body {
        background-color: #0f1a43;
        display: flex;
        justify-content: center;
        padding: 50px;
    }

    h1 {
        text-align: center;
        font-size: 50px;
        color: #fff;
        margin-bottom: 30px;
        border-bottom: 1px solid #fff;
    }

	li {
		list-style: none;
	}
`

export default GlobalStyle;