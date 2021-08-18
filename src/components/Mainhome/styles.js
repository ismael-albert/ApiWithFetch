import styled from 'styled-components'

export const Content = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:  #2eff7b;
font-family: monospace;
a{
    font-size: 16px;
    font-family: monospace;
    color: #fff;
    padding: 5px;
    transition: ease 0.5s;
    &:hover{
        color: #41ead4;
        font-size: 18px;
    }
}
p{
    font-size: 16px;

}
`;