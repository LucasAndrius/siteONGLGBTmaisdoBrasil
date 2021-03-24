import styled from 'styled-components';

export const Footer = styled.footer`

widht:100vw;
height:14.12rem;

background-color:#fff399;
text-align:center;
font-weight:500;
font-size:2rem;
font-family: 'Montserrat', sans-serif;

color:#424242;

    footer{
        height:100%;

        display:flex;
        flex-direction:column;
        text-align:center;
        justify-content:center;

        img{
            padding:0 1.15rem;
        }

        
    } 
    
    
}
`

export const Nav = styled.nav`
widht:100vw;
height:5.38rem;
background:#fff;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

display:flex;
justify-content:center;
align-items:center;


nav{
 font-weight:700;
 font-size:1rem;
 text-transform:uppercase;

 ul{
    display:flex;
    
    li{
        list-style:none;
        padding:0 2.37rem;
        
        
    }
     
 }

 .link{
     text-decoration:none;
     color:#424242;
 }
}
`;

export const LinkReset = styled.a`
text-decoration:none;


.disabled {
    opacity: 0.3;
  }

  

.message{
    font-size:0.9rem;
}

`;