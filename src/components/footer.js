import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      &copy; {new Date().getFullYear()}{' '}
      <Link to={`/suscripcion`}>
        <strong>Curso Pensamiento Visual</strong>
      </Link>
    </div>
  </footer>
)

export default Footer
