import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Calculator from '../components/calculator'
import Intro from '../components/intro'
import Footer from '../components/footer'
import Cat from '../components/cat'


class RootIndex extends React.Component {
  render() {
    const hero = get(this,'props.data.contentfulBlogPost')
    const button = get(this,'props.data.allContentfulCtaButton.edges[0].node')
    const introData = get(this,'props.data.contentfulIntroBlock')
    return (
      <Layout>
        <Hero

          image={hero.heroImage.gatsbyImage}
          title={hero.title}
          description={hero.description.raw}
          btnUrl = {button.url}
          btnLabel ={button.label}
        />
        <Intro data={introData}/>
        <Calculator 
        btnUrl = {button.url}
        btnLabel ={button.label}
          />
        <Footer/>
        <Cat/>
      </Layout>
    )
  }
}

export default RootIndex



export const pageQuery = graphql`
 {
  contentfulBlogPost(contentful_id: {eq: "WNEyjI4aGjqthWVf8QV3c"}) {
    heroImage {
      gatsbyImage(height: 1000 ,placeholder: BLURRED)
    }
    description {
      raw
    }
    title
     }
     allContentfulCtaButton(filter: {contentful_id: {eq: "1IW6jmrMgf5ieBLLmxGIiB"}}) {
      edges {
        node {
          url
          label
        }
      }
    }
    contentfulIntroBlock(contentful_id: {eq: "57hNo8QogYjVzljw6TusHL"}) {
      check {
        gatsbyImage(height: 1000, placeholder: BLURRED)
      }
      data {
        description
        title
      }
    }
    }
`
