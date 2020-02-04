import styled from 'styled-components'

export const Container = styled.div`
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
   
`
export const FormLogin = styled(Container)`
    width:550px;
    height: 300px;
    border: 1px solid lightgrey;
    border-radius: 4px;
    position:absolute;
    bottom: 35%;    
`
export const Formlabel = styled.label`
    margin:20px;
`
export const Button = styled.button`
    width:70px;
    border-radius: 4px;
    border: 1px solid blue;
    margin:10px 5px;
`
export const SocialLogin = styled.button`
    width: 50%;
    padding: 5px;
    border: none;
    border-radius: 2px;
    margin: 3px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
    background-color:${props => props.theme.main} ;
    color: white;
    text-align:center;
`

  export const theme = {
    main: "mediumseagreen"
  };
  