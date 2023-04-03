import { useState } from 'react'
import SuggestionItem from '../SuggestionItem'
import {Container,Image,CardContainer,SearchContainer,SearchLogo,InputElement,ListContainer} from './styled'

const GoogleSuggestions=(props)=>{
    const {suggestionsList}=props
    
    const [searchInput,setSearchInput]=useState("")

    const onChangeInput=(event)=>{
         setSearchInput(event.target.value)
    }

  
    const onSelectSuggest=(suggestion)=>{
        setSearchInput(suggestion)
    }

    const filteredResults=suggestionsList.filter(eachItem=>(
        eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase())
    ))


    return(
       <Container>
        <Image src="https://assets.ccbp.in/frontend/react-js/google-logo.png" alt="google logo"/>
        <CardContainer>
            <SearchContainer>
                <SearchLogo src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="search icon"/>
                <InputElement type="search" placeholder="Search Google" onChange={onChangeInput} value={searchInput}/>
            </SearchContainer>
            <ListContainer>
              {filteredResults.map(eachItem=>(
                <SuggestionItem eachItem={eachItem} key={eachItem.id} onSelectSuggest={onSelectSuggest}/>
              ))}
            </ListContainer>
        </CardContainer>
       </Container>
    )

}

export default GoogleSuggestions

