import styled from "styled-components";


export const Header = styled.header`
height: 90px;
box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);

.container {
    display: flex;
    width: 1440px;
    margin: auto;
    justify-content: space-between;
    align-items: center;

    p{
        cursor: pointer
    }
}


&.dark-mode {
    background-color: #2B3844; /* Set the dark mode background color */

   .container{
    h1{
    color: white; /* Set the text color for dark mode */
    }

    p{
        color: white; /* Set the text color for dark mode */
        }
   } 
  }

@media(max-width: 1440px){
    &{
        padding: 0px 20px;

        .container{
            width: auto
        }
    }
}

@media(max-width: 768px){
    .container{
        height: 100%;
        h1{
            font-size: 17px;
        }
        p{
            font-size: 14px;
        }
    } 
}
`