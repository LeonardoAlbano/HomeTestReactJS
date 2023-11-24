// Importa a função 'styled' da biblioteca styled-components
import styled from "styled-components";

// Define o componente estilizado 'Container'
export const Container = styled.div`
    // Configurações de layout usando grid
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
        "brand header"
        "menu search"
        "menu content"
        "newnote content";

    // Usa a propriedade 'background-color' para aplicar a cor de fundo do tema
    background-color: ${({ theme }) => theme.COLORS.BRACKGROUND_800};
`;

// Define o componente estilizado 'Brand'
export const Brand = styled.div`
    // Define a área do grid para este componente
    grid-area: brand;
    // Aplica uma cor de fundo vermelha
    background: red;
`;

// Define o componente estilizado 'Menu'
export const Menu = styled.ul`
    // Define a área do grid para este componente
    grid-area: menu;
    // Aplica uma cor de fundo verde
    background: green;
`;

// Define o componente estilizado 'Search'
export const Search = styled.div`
    // Define a área do grid para este componente
    grid-area: search;
    // Aplica uma cor de fundo seashell
    background: seashell;
`;

// Define o componente estilizado 'Content'
export const Content = styled.div`
    // Define a área do grid para este componente
    grid-area: content;
    // Aplica uma cor de fundo saddlebrown
    background: saddlebrown;
`;

// Define o componente estilizado 'NewNote' que é um botão
export const NewNote = styled.button`
    // Define a área do grid para este componente
    grid-area: newnote;
    // Aplica uma cor de fundo aliceblue
    background: aliceblue;
`;
