import React from 'react'
import { Layout, Divider } from 'antd'
import Author from './Author'
import Contacts from './Contacts'
import Menu from './Menu'
import Categories from './Categories'
import Tags from './Tags'
import { useSiteMetadata } from '../../hooks'
import Link from 'gatsby-link'

const { Sider } = Layout

const Sidebar = ({ hideMobile }) => {
  const { author, menu } = useSiteMetadata()

  return (
    <Sider className={`text-white no-print ${hideMobile && 'hide-mobile'}`}>
      <Author author={author} />
      <Contacts contacts={author.contacts} />
      <Divider className="sidebar-divider" />
      <Menu menu={menu} />
      <div className="hide-mobile  text-gray-300">
        <Categories />
        <Tags />
        <br />
        <span> 1° posto concorso on - line “Ad Lucem” 2013 - Oubliette Magazine;</span>
        <br />
        <br />
        <span> Attestato d’Onore con targa nel Premio VIVARIUM 1012;</span>
        <br />
        <br />
        <span>
          Menzione d’Onore nella 8ª edizione del Premio Letterario Internazionale Trofeo
          Penna d’Autore per la Poesia.
        </span>
        <br />
        <br />
        <span>Silloge Poetica "Vita di borgo" </span>
        <br />
        <br />
        <span>
          1° posto assoluto nella VIII edizione Premio Internazionale di Poesia e
          Narrativa Napoli Cultural Classic (sezione poesie a valore religioso).
        </span>
        <br />
        <br />
        <Link to="/poesie/ti-cerchero-mio-dio">
          1° posto assoluto Premio Nazionale Histonium 2014
        </Link>
        <br />
        <br />
        <span>
          1° Posto assoluto nella XXII edizione Concorso Letterario Internazionale “MOI.
          CA.” di Poesia e Narrativa.
        </span>
        <br />
        <br />
        <span>1° posto nel concorso on- line PoesiaEPoeti 2011.</span>
        <br />
        <br />
        <span>2° Posto Concorso di Poesia 2013 5° Raduno di Gocce di Poesia.</span>
        <br />
        <br />
        <span>
          2° Posto assoluto alla 8^ Edizione Premio Internazionale “Memorial Gennaro
          Sparagna 2013”
        </span>
        <span>3° Posto alla X edizione del Premio Letterario "Le Pieridi";</span>
        <br />
        <br />
      </div>
    </Sider>
  )
}

export default Sidebar
