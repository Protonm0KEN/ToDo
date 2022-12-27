import React, {useState} from 'react'
import SvgIcons from './../../assets/icons/SvgIcons';
import './ToDoSearch.scss'
const ToDoSearch = ({handleCloseSearch, search, setSearch, handleBack}) => {
  const changeSearch = (e) => {
    setSearch(e.target.value)
  }
  const [value, setValue] = useState('')
  return (
    <div className='search'>
        <div onClick={handleBack}  className="search__back">
            <SvgIcons id='back'/>
        </div>
        <input  value={search} onChange={changeSearch} type="text" className='search__input' placeholder='Поиск...' />
        <div onClick={handleCloseSearch} className="search__close">
          <SvgIcons id="close"></SvgIcons>
        </div>
    </div>
  )
}

export default ToDoSearch