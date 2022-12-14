import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;   
   }

   :root {
      font-size: 62.5%;
   }

   body {
      background-color: ${ ({theme}) => theme.COLORS.BG_PRIMARY };

      -webkit-font-smoothing: antialiased;
   }

   body, input, button, textarea {
      font-family: 'Roboto Slab', serif;
      font-size: 1.6rem;
      outline: none;
   }

   a {
      text-decoration: none;
   }

   button, a {
      cursor: pointer;
      transition: filter 0.2s;
   }
   
   button:hover, a:hover {
      filter: brightness(0.9);
   }

   ::-webkit-scrollbar {
      width: 0.8rem;
   }

   ::-webkit-scrollbar-thumb {
      width: 5rem;
      background: ${ ({theme}) => theme.COLORS.BG_ROSE };
      border-radius: 0.8rem;  
   }

   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }
`