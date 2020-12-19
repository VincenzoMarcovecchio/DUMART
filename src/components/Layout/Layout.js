import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout as AntLayout } from 'antd'

const Layout = ({ children, title, description, keywords, article }) => (
  <AntLayout className="bg-transparent min-h-screen">
    <Helmet>
      <html lang="it" prefix="og: http://ogp.me/ns#" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="msvalidate.01" content="DAD3C6F0C2AD454596A0AE3C7A0213F8" />
      <script type="text/javascript">
        {`
  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', 'dacac6c53f32df3a88aa93954373c33541968e52');`}
      </script>

      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {article && <meta property="og:type" content="article" />}
      {article && article.title && <meta property="og:title" content={article.title} />}
      {article && article.description && (
        <meta property="og:description" content={article.description} />
      )}
    </Helmet>

    {children}
  </AntLayout>
)

export default Layout
