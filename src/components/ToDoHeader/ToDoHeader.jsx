import React, {useState} from 'react'
import SvgIcons from '../../assets/icons/SvgIcons'
import './ToDoHeader.scss'
import ToDoSearch from '../ToDoSearch/ToDoSearch'
const ToDoHeader = ({search, setSearch}) => {
  const [openSearch, setOpenSearch] = useState(false)
  const handleOpenSearch = () => {
    setOpenSearch(true)
  }
  const handleCloseSearch = () => {
    setOpenSearch(false)
    setSearch('')
  }
  const handleBack = () => {
    setOpenSearch(false)
  }
  return (
    openSearch ? <ToDoSearch 
    search = {search} 
    setSearch = {setSearch} 
    handleCloseSearch={handleCloseSearch}
    handleBack = {handleBack}/> 
    :
    <div className='todoHeader'>
        <h2 className="todoHeader__title">Заметки</h2>
        <div onClick={handleOpenSearch} className='todoHeader__search'>
          <SvgIcons id="search"/>
      </div>
    </div>
  )
}

export default ToDoHeader