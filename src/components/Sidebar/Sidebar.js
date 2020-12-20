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
        <span> 1° posto concorso on - line “Ad Lucem” 2013 - Oubliette Magazine</span>
        <br />
        <br />
        <span> Attestato d’Onore con targa nel Premio VIVARIUM 1012</span>
        <br />
        <br />
        <span>
          Menzione d’Onore nella 8ª edizione del Premio Letterario Internazionale Trofeo
          Penna d’Autore per la Poesia
        </span>
        <br />
        <br />
        <span>Silloge Poetica "Vita di borgo" </span>
        <br />
        <br />
        <span>
          1° posto assoluto nella VIII edizione Premio Internazionale di Poesia e
          Narrativa Napoli Cultural Classic (sezione poesie a valore religioso)
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
          CA.” di Poesia e Narrativa
        </span>
        <br />
        <br />
        <span>1° posto nel concorso on-line PoesiaEPoeti 2011</span>
        <br />
        <br />
        <span>2° Posto Concorso di Poesia 2013 5° Raduno di Gocce di Poesia</span>
        <br />
        <br />
        <span>
          2° Posto assoluto alla 8^ Edizione Premio Internazionale “Memorial Gennaro
          Sparagna 2013”
        </span>
        <br />
        <br />
        <span>3° Posto alla X edizione del Premio Letterario "Le Pieridi"</span>
        <br />
        <br />
        <span>
          8° Posto alla XIII Edizione del Concorso Nazionale di Poesia “Il castello di
          Sopramonte” Prato Sesia – NOVARA
        </span>
        <br />
        <br />
        <Link to="/poesia/vola-colomba-ai-rintocchi-del-vespro-rosso-sul-colle">
          3° posto al “III Concorso Nazionale Gocce di Poesia 2012”
        </Link>
        <br />
        <br />
        <Link to="/poesia/sogno-sul-mare-del-vasto">
          Menzione d’Onore sezione haiku “III Concorso Nazionale Gocce di Poesia 2012”
        </Link>
        <br />
        <br />
        <span>
          Menzione di merito nella IV edizione del Premio Letterario Internazionale “Città
          di Martinsicuro” 2012 per la Poesia
        </span>
        <br />
        <br />
        <span>
          Menzione d’Onore – Undicesima Edizione – 2012 - Premio Internazionale
          “L’Arcobaleno della vita” - Città di Lendinara
        </span>
        <br />
        <br />
        <Link to="poesia/il-tratto-di-un-popolo-migrante">
          Menzione d’Onore sezione haiku – Undicesima Edizione – 2012 - Premio
          Internazionale “L’Arcobaleno della vita” - Città di Lendinara
        </Link>
        <br />
        <br />
        <Link to="poesia/cono-di-ombra">
          6° posto e pubblicazione su libro/enciclopedia “Le origini lucane di Antonio
          Vivaldi” in ambito “Premio POMARICVM Antonio Vivaldi”
        </Link>
        <br />
        <br />
        <Link to="poesia/povera-italia">
          Menzione d’onore 9° concorso nazionale di poesia "Il castello di Sopramonte" -
          2013
        </Link>
        <br />
        <br />
        <Link to="poesia/sguardi-sbiaditi">
          menzione di merito III Concorso di Poesia Satirica "I Fiori del Bene"
        </Link>
        <br />
        <br />
        <Link to="poesia/un-amore-eterno">
          Finalista nel XXI premio letterario “Maria Scarcella Padovano” MOI. CA. Concorso
          Internazionale di Poesia e Narrativa – 2011
        </Link>
        <br />
        <br />
        <Link to="poesia/navigando-in-un-mare-di-poesia">
          Finalista concorso on- line “San Valentino VS Faustino 2012” - Oubliette
          Magazine
        </Link>
        <br />
        <br />
        <span>Finalista nel concorso internazionale “L’otto milioni” - Ischia</span>
      </div>
    </Sider>
  )
}

export default Sidebar
