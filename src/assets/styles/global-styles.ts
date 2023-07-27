import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --dark: #313131;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    overflow: auto;
  }

  html {
    /* font-size: 16px; */
    font-size: 62.5% ;/** Como geralmente o padrão de tamanho de fonte é 16px para os navegadores, ao colocar essa porcentagem temos que esse tamanho em porcentagem será equivalente a 10px. Isto é útil para sabermos facilmente qual seria a medida em unidade rem em pixels. Assim se quisermos saber quanto em rem equivale 400px é só dividir por 10, portanto 40rem */
  }

  body, input, select, textarea {
    font-size: 1.6rem; // 16px
    font-family: 'Poppins', sans-serif;
    color: var(--dark);
  }


`
