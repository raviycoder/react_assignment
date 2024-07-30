import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
    <div className="container">
      <p>&copy; 2024 User Mangement. All Rights Reserved.</p>
      <p>
        <Link to="/" className="text-white">
          Home
        </Link>{' '}
        |{' '}
        <Link to="/login" className="text-white">
          Login
        </Link>{' '}
        |{' '}
        <Link to="/users" className="text-white">
          Users
        </Link>
      </p>
    </div>
  </footer>
  )
}

export default Footer