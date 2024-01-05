import styled from "styled-components";

export const Toggle = styled.div`
   .toggle-light,
   .toggle-dark {
     cursor: pointer;
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: 0.5rem;
     font-size: 1rem;
     font-weight: 600;
     margin-top: 0.5rem;
   }
   

   /* Add styles for dark mode */
   &.dark-mode {
     background-color: #202c36; /* Set the dark mode background color */
     color: white; /* Set the text color for dark mode */
   }

`
