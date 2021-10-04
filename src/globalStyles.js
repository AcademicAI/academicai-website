import { createGlobalStyle } from 'styled-components'

import { color, typography } from './theme'

const GlobalStyle = createGlobalStyle`
    /** Removemos margin e padding colocados pelo browser */
    * {
        margin: 0;
        padding: 0;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    html {
        box-sizing: border-box;
        /* Para facilitar os cálculos de [rem], reajustamos a fonte do html
        * para 10px.
        * O tamanho padrão da fonte normalmente é 16px, desse modo 
        * 1rem = 16px, 100% = 16px
        * Fazendo regra de três temos (100% / 16 px) * 10 = 62.5%, desse modo
        * teremos 1rem = 10px, 62.5% = 10px */
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    
    html,
    body,
    #__next {
        height: 100%;
    }
    body {
        font-family: ${typography.type.primary};
        font-size: ${typography.size.s3}rem;
        color: ${color.darkest};
        font-weight: ${typography.weight.normal};
    }
    button,
    input,
    textarea,
    select {
        outline: none;
        font-family: ${typography.type.primary};
    }
    button {
        display: inline-block;
        cursor: pointer;
    }
    img {
        display: block;
        width: 100%;
    }
    /** Algumas medias queries para escalar o tamanho da fonte de acordo com o
    * tamanho da tela. Isso ajuda a automatizar um pouco da responsividade.
    * A unidade 'rem' é relativa ao tamanho da fonte do documento. Quando
    * usamos essa unidade para definir tamanhos de 'margin' e 'padding', 
    * eles serão escalados de acordo com a fonte do documento. Desse modo,
    * todas as propriedades usando unidades 'rem' serão afetadas pelas medias
    * queries a seguir:
     */
    /* 1200px / 16px = 75em */
    @media (max-width: 75em) {
        html {
            font-size: 60%;
        }
    }
    /* 980px / 16px = 61.25em */
    @media (max-width: 61.25em) {
        html {
            font-size: 58%;
        }
    }
    /* 460px / 16px = 28.75em */
    @media (max-width: 28.75em) {
        html {
            font-size: 55%;
        }
    }

    li {
    list-style: none;
    }

    a {
        text-decoration: none;
    }
`
export default GlobalStyle
