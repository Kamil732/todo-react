import React from 'react'
import NavgiationMenu from './NavigationMenu'

function Navgiation() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 mb-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <NavgiationMenu />
            </div>
        </nav>
    )
}

export default Navgiation