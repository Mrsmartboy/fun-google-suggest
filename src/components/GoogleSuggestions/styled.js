import styled from 'styled-components'

export const Container=styled.div`
display:flex;
flex-direction:column; 
justify-content:center;
align-items:center;
min-height:100vh;
`

export const Image =styled.img`
  width:30%;
  margin:10px;
`

export const CardContainer=styled.div`
  background-color:#ffffff;
  display:flex;
  flex-direction:column;
  width:40%;
  box-shadow: 3px 4px 4px 3px #bfbfbf;
  border-radius:10px;
 padding:5px;
  margin:10px;
  
`

export const SearchContainer=styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:0px;
  

`
export const SearchLogo=styled.img`
   width:32px;
   height:32px;
`

export const InputElement=styled.input`
  border:none;
  outline:none;
 
  width:100%;
  color:#64748b;
  font-size:15px;
  font-weight:600;
  
`

export const ListContainer=styled.ul`
  list-style-type:none;
  width:90%;
  padding-left:8px;
`


