import styled from "styled-components";

export const CountryPage = styled.main`
height: calc(100vh - 90px);

&.dark-mode{
    
        .back-container{
          .arrow{
            path{
          fill: white;
            }
          }
        }
        

    .back--button{
        color: white;
    }

    .loading{
        color: white;
    }

    
}

.container{
    width: 1440px;
    margin: auto;
    padding; 40px 0px;

}

.loading{
    min-height: 100vh;
}

.back-container{
    text-decoration: none;
    color: #000;
    margin-bottom: 30px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2); 
    position: relative;  
    
}
.back--button{
    text-decoration: none;
    color: #000;
    
       
}
.arrow {
    margin-right: 10px;

}

@media(min-width: 768px) and (max-width: 1440px){
    &{
        padding: 20px;
    }
    .container {
        width: auto
    }
}

@media (max-width: 767px){
    &{
        height: auto;
        padding: 20px;
    }
    .container {
        width: auto
    }
}

`