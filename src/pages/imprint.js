import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container } from '../components/container'
import loremIpsum from 'lorem-ipsum'

const Imprint = () => (
  <div>
    <Helmet title="Imprint" />
    <Container>
      {loremIpsum({
        count: 100, // Number of words, sentences, or paragraphs to generate.
        //units: 'sentences', // Generate words, sentences, or paragraphs.
        sentenceLowerBound: 5, // Minimum words per sentence.
        sentenceUpperBound: 15, // Maximum words per sentence.
        paragraphLowerBound: 3, // Minimum sentences per paragraph.
        paragraphUpperBound: 7, // Maximum sentences per paragraph.
      })}
    </Container>
  </div>
)

export default Imprint
