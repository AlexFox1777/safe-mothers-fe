import styled from "styled-components";

export const StyledLabel = styled.div`
    font-family: 'Asap', sans-serif;
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: bold;
    border-radius:3px;
    padding: 0.4% 0;
    @media (max-width: 500px) {
        padding-right: 3%;
    }  
    @media (max-width: 700px) {
        padding-top: 0;
        padding-bottom: 0;
    }
    
    .add-icon{
        margin-left: 2%;
        padding-top: 0.5%;
        padding-bottom: 0.5%;
        height: 1%;
    };
    
    .name{
        width: 20%; 
        text-align: left;
        padding-left: 1%;
        white-space: nowrap;
        display: flex;
        align-items: center;
    }
    .see-more{
        padding-right: 3%;
        fill: #ab7bff;
        width: 20%;
        &:hover{
            fill: #d896ff;
        }
    }
    
    .inline-badges{
        display: flex;
        justify-content: flex-start;
        margin: 0 20px;
        width: 55%; 
    }
    
    .inline{
        display: flex;
        align-items: center;
        width: 7%;
        white-space: nowrap;
        @media (max-width: 700px) {
          justify-content: flex-end;
        }
    }
    
    .status-icon{
        width: 40%;
        height: 40%;
    }
     
    .status-text{
        white-space: nowrap;
        padding-left: 5%;
        @media (max-width: 700px) {
          display: none;
        }
    }     
     
    .icon-container{
        width: 8%;
        height: 8%;
    }
    
    .icon{
        width: 30%;
        height: 30%;
        margin: 0 1%;
    }
    
    .responsive-icon{
        @media (max-width: 730px) {
            display: none;
        }
        @media (max-width: 850px) {
            margin-left: 40%;
        }
    }
    
    .modal{
        background: red;
        border-radius: 5px; !important
    }
     
    p{
        justify-content: space-between;
        width: 33%;
    }
        
    .svg-icon{
        width: 3%;
        height: 3%;
        margin: 0 1%;
    }
    
    .svg-text{
        font-weight: normal;
        text-align: left;
        padding-left: 3%;
    }
     .modal-title{
        font-family: 'Asap', sans-serif;
   }    
`;

export const CustomBadge = styled.div`
    font-family: 'Asap', sans-serif;
    white-space: nowrap;
    text-transform: uppercase;
    margin-left: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    background:  ${props => props.badgeColor}
    border-radius: 20px;
    color:  ${props => props.badgeText}
    width: ${props => props.width}
    height: 100%;
    padding-top: ${props => props.top ? props.top : '0.5%'};
    padding-bottom: ${props => props.bottom ? props.bottom : '0.5%'};
    padding-left: ${props => props.left ? props.left : '0'};
    padding-right: ${props => props.right ? props.right : '0'};
    position: relative;
    @media (max-width: 950px) {
        width: 50px;
        font-size: 0.6rem;
    }
`;
