import styled from 'styled-components'

export const Container = styled.div`
    background-color:#E5E5E5;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
   
`
export const ImageLogo =styled.img`
    width: 50px;
    height: 50px;
    margin-left:10px;
`
export const FirebaseText =styled.img`
    width: 82px;
    height: 50px;
    position:absolute;
    margin-right:5px;
    right:90%
`
export const ProfileImg = styled(ImageLogo)`
    border-radius:50px;
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
export const SocialLogin = styled.button`
    width: 45%;
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
export const Button = styled.button`
    width: 100px;
    padding: 5px;
    border: none;
    border-radius: 2px;
    margin: 3px ;
    opacity: 0.85;
    display: inline-block;
    font-size: 10px;
    line-height: 10px;
    text-decoration: none;
    background-color:#1E90FF ;
    color: white;
    text-align:center;

`
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    margin:auto
    width:1200px;
    background-color: #001529;
    font-weight:700;
    postion:relative;
`
export const ButtonHeader = styled.div`
    border-left: 1px solid rgb(70,70,70);
    border-right: 1px solid rgb(70,70,70);
    line-height:50px;
    color: white;
    font-size:12px;
    margin-right:10px
`
export const theme = {
    main: "mediumseagreen"
};
