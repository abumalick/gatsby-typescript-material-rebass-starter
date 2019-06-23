import 'normalize.css'
import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Header from './header'
import {LayoutQuery} from '../types/gatsbyGraphql'

interface IProps {
  children: React.ReactNode
}

const Layout = ({children}: IProps): JSX.Element => {
  const layoutQuery: LayoutQuery = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          canonicalUrl
          companyName
          siteTitle
        }
      }
    }
  `)
  const {
    canonicalUrl,
    companyName,
    siteTitle,
  } = layoutQuery.site!.siteMetadata!
  return (
    <>
      <Header siteTitle={siteTitle!} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Copyright{' '}
        <a href={canonicalUrl!}>{companyName}</a> - All rights reserved
      </footer>
    </>
  )
}

export default Layout
