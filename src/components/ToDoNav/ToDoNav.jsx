import React from 'react'
import Button from '../Button/Button'
import SvgIcons from './../../assets/icons/SvgIcons';
import './ToDoNav.scss'

const ToDoNav = ({gridToList, setGridToList, handleOpenSearch}) => {
  const toggleGridToList = () => {
    setGridToList(!gridToList)
  }
  return (
    <div className='nav'>
        <h2 className='nav__title'>Все заметки</h2>
        <Button click={toggleGridToList}>
            <SvgIcons id={gridToList ? 'grid' : 'list'}/>
            <p className='nav__btn-text'>{gridToList?`Сетка` : 'Список'}</p>
        </Button>
    </div>
  )
}

export default ToDoNav