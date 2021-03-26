import styled from "styled-components";

export const Container = styled.section`
padding-top:3.94rem;
padding-bottom:3.94rem;

max-width:1140px;
margin:auto;

display:flex;
justify-content:center;
flex-wrap:wrap;

    article{
        display:inherit;
        

        img{
            height:13.25rem;
            width:17.25rem;
            background-color:#ccc;
            border-radius:0.5rem;
            border: 2px solid #FFE732;

        }
    }

    header{
        padding-top:1.5rem;

        span{
            text-transform:uppercase;
            font-weight: 800;
            font-size: 1rem;
            line-height: 20px;
            

        }
        p{
            width:16.94rem;
            height:12.19rem;
            font-weight: 500;
            font-size: 1.2rem;
        }
    }

    span, p {
        padding:0.3rem 1.44rem;
    }
    
`;
