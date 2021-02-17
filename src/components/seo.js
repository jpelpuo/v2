import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
// import { useLocation } from '@reach/router';

const SEO = ({ description, lang, title, meta }) => {
    // const { pathname } = useLocation();

    const { site } = useStaticQuery(
        graphql`
        query MyQuery {
            site {
              siteMetadata {
                defaultTitle: title
                defaultDescription: description,
                author
                twitterHandle
              }
            }
          }
        `
    )

    const {
        defaultTitle,
        defaultDescription,
        author,
        twitterHandle
    } = site.siteMetadata;

    const seoData = {
        title: title || defaultTitle,
        MetaDescription: description || defaultDescription,
        // url: `${siteUrl}${pathname}`,
        // image:
        author: author
    }

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={seoData.title}
            titleTemplate={`%s | ${defaultTitle}`}
            meta={[
                {
                    name: `description`,
                    content: seoData.MetaDescription
                },
                {
                    property: `og:title`,
                    content: seoData.title
                },
                {
                    property: `og:description`,
                    content: seoData.MetaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: twitterHandle
                },
                {
                    name: `twitter:title`,
                    content: seoData.title
                },
                {
                    name: `twitter:description`,
                    content: seoData.MetaDescription
                }
            ].concat(meta)
            }
        />
    )

}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
}

SEO.propTypes = {
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    lang: PropTypes.string,
    title: PropTypes.string
}


export default SEO;