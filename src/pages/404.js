import React from 'react'
import { Link } from 'gatsby'
import { RiSkullLine } from 'react-icons/ri'

import SEO from '../components/seo'
import Layout from '../components/layout'

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: 'center',
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: '128px',
            color: 'var(--primary-color)',
          }}
        />
        <h1>404: Página NO encontrada</h1>
      </header>
      <Link to="/" className="button">
        Ir a Inicio
      </Link>
    </div>
  </Layout>
)

export default NotFound
