import styled from "styled-components";

export const InputArea = styled.section`
display: flex;
width: 1024px;
margin: auto;
justify-content: space-between;
padding: 40px 0px;




  
  .input-block {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 450px;
    border-radius: 2px;
    padding: 0px 10px;
    box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
    font-size: 14px;
    gap: 10px;
  }

  input{
    outline: 0;
    border: none;
  }

 

select{
    border-radius: 2px;
    padding: 0px 20px;
    border: none;
    box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
    outline: 0;
    font-size: 14px;
}

.search{
    width: 3%;
}

&.dark-mode{
    background-color: #202c36;

    .input-block{
        color: white;
    }

    select{
        color: white;
    }

}
  
&.dark-mode {
    input {
      background-color: #333333; /* Set the dark mode background color for the input */
      color: #ffffff; /* Set the text color for dark mode */
    }
  }

@media(max-width: 1024px){
    &{
        width: auto;
        padding: 20px
        
    }
}

@media(max-width: 768px){
    &{
        flex-direction: column;
        select{
            margin-top: 10px;
            height: 50px;
            width: max-content;
        }

        input{
            width: 97%;
        }
    }


}

`