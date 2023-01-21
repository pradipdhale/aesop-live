import React from 'react'
import MenuBar from './partials/Menubar'
import NavOne from './partials/Navone'
import NavTwo from './partials/NavTwo'

const Header = () => {
  return (
    <div>
        <NavOne />
        <NavTwo />
        <MenuBar />
    </div>
  )
}

export default Header