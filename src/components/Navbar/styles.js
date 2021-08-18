import styled from 'styled-components'

export const Content = styled.div`
width: 100%;
    nav{
        width: 85%;
        height: 80px;
        margin: 0 auto;
        ul{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            h3{
                color: #ccc;
                font-family: monospace;
                    
                
            }
           
            li{
                
              
                width: 80px;
                list-style: none;
                margin-left: 20px;
                padding: 5px;
                color: #fafafa;
                font-family: monospace;
                font-size: 16px;
                cursor: pointer;
                
                box-shadow: 2px 3px 2px #2eff7b;
                transition: ease 0.3s;
                &:hover{
                    box-shadow: -3px 1px 1px #41ead4;
                    background-image: linear-gradient(#222, #000);
                    margin-top:3px ;
                    
                }
              
            }
           
        }
        
    }
    @media (max-width: 568px) {
                   
        nav{
            width: 100%;
            ul{
                display: block;
                li{
                    margin-top: 10px;
                }
            }
        }
        }
`;