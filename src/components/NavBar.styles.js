import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Outer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    position: fixed;
    background-color: #00D2B2;
    color: white;
    padding: 10px;
`

export const LinkOuter = styled(Link)`
    a {
        color: white;
    };
    padding-left: 10px;
    text-decoration: none;
    a:visited {
        color: #056b56;
    };
`
