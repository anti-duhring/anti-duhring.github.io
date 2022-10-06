import Select from 'react-select'
import styled from 'styled-components';
import { useContext } from 'react';
import { LanguageContext } from '../../Context/language';
import { Colors } from '../../utils/colors';
import { isMobile } from 'react-device-detect';

const LangSelect = () => {
    const {
        setLanguage
    } = useContext(LanguageContext);

    const options = [
        { value: 0, label: 'Português' },
        { value: 1, label: 'English' },
    ]

    const customStyles = {
        option: (provided, state) => {
        //console.log(state)
        return ({
          ...provided,
          cursor: 'pointer',
          backgroundColor: state.isSelected ? Colors.secondaryBlue : state.isFocused ? Colors.secondaryBlueLowOpacity : 'white'
        })},
        control: (base,state) => {
            //console.log(state) 
        return ({
          // none of react-select's styles are passed to <Control />
          ...base,
          boxShadow: state.isFocused? `0 0 0 1px ${Colors.secondaryBlue}` : 'none',
          borderColor: state.isFocused? Colors.secondaryBlue : 'hsl(0, 0%, 80%)',
          width: 150,
          fontSize: '.8rem',
          cursor: 'pointer',
        })},
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
        
            return { ...provided, opacity, transition };
        }
      }

    const changeLang = (newValue) => {
        setLanguage(newValue.value)
    }

    return ( 
        <Container>
            <Select 
                defaultValue={options[0]}
                options={options}
                onChange={changeLang}
                styles={customStyles}
                isSearchable={!isMobile}
            />
        </Container>
     );
}
 
export default LangSelect;

const Container = styled.div`
    margin: .5rem;
    display: flex;
    justify-content: flex-end;
`