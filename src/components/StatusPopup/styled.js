import styled  from "styled-components";

const StatusMessage = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width:455px;
    text-align: center;
    background-color:white;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    padding:${({ active }) => active ? '30px 20px' : '40px 25px'};
    font-size:20px;
    font-weight:600;
    transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 19999;
    @media (min-width: 481px) and (max-width: 768px) {
        width:350px;
        font-size:15px;
        padding:${({ active }) => active ? '20px 10px' : '30px 15px'};
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width:310px;
        font-size:13px;
        padding:${({ active }) => active ? '20px 0px' : '30px 0px'};
    }
`

export {StatusMessage}