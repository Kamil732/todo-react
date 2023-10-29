import React from 'react'
import { Link } from 'react-router-dom'

function NavigationMenu() {
    return (
        <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Home
            </Link>
            <Link to="/todo-app" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Todo app
            </Link>
        </div>
    )
}

export default NavigationMenu