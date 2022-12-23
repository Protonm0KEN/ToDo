import React, {useState} from 'react'
import SvgIcons from './../../assets/icons/SvgIcons';
import './ToDoSearch.scss'
const ToDoSearch = ({handleCloseSearch, search, setSearch,}) => {
  const [value, setValue] = useState('')
  return (
    <div className='search'>
        <div  className="search__back">
            <SvgIcons id='back'/>
        </div>
        <input value={search} onChange={setSearch} type="text" className='search__input' placeholder='Поиск...' />
        <div onClick={handleCloseSearch} className="search__close">
          <SvgIcons id="close"></SvgIcons>
        </div>
    </div>
  )
}

export default ToDoSearch