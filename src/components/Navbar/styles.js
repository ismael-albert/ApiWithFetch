import styled from 'styled-components'

export const Content = styled.div`
    div{
        width: 100%;
        height: 80px;
        ul{
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                list-style: none;
                padding: 5px;
                color: #fafafa;
                font-family: monospace;
                font-size: 16px;
                cursor: pointer;
                margin-left: 10px;
                box-shadow: 2px 3px 2px #2eff7b;
                &:hover{
                    box-shadow: 3px 1px 1px #2eff7b;
                    background-image: linear-gradient(#222, #000);
                }
            }
        }
    }
`;