import {ItemContainer,Suggest,Arrow} from './styled'

const SuggestionItem=(props)=>{
       const {eachItem,onSelectSuggest}=props 
       const {suggestion}=eachItem

       const onClickArrow=()=>{
        onSelectSuggest(suggestion)
       }
    return(
        <ItemContainer>
            <Suggest>{suggestion}</Suggest>
            <Arrow src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" onClick={onClickArrow}/>
        </ItemContainer>
    )

}

export default SuggestionItem