import React, {useState} from 'react';
import './App.css';

const Search = ({setString}) => {
  const [noInput, setNoInput] = useState('')
  const handleSearch = (evt) => {
    if(evt.target.value){
      setNoInput('')
      setString(evt.target.value)
    }
    else 
    setNoInput('Please provide information')
  }

  return (
    <form>
        <input type="text" name="name" onChange={(evt) => handleSearch(evt)}/>
    {noInput}
    </form>
  )
}

export default Search;
