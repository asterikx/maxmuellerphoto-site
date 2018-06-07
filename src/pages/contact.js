import React, { Component } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { media } from "../config/media"
import { Margin, Padding, mt } from "styled-components-spacing"
import breakpoint from "styled-components-breakpoint"
import Helmet from "react-helmet"
import loremIpsum from "lorem-ipsum"
import { Container } from "../components/container"

/*


const Label = styled.label``
*/

const Input = styled.input`
  width: 100%;
`
const Textarea = styled.textarea`
  width: 100%;
  resize: vertical;
`

const FieldWrapper = styled.div`
  &:not(:first-child) {
    ${mt(3)};
  }
`

const SubmitButton = styled.button`
  min-width: 12rem;
  color: ${props => props.theme.darkContrast};
  background-color: ${props => props.theme.dark};
  ${mt(3)};
`

const InputField = ({ label, name, id, type = "text" }) => (
  <FieldWrapper>
    <label htmlFor={id}>{label}</label>
    <Input name={name} id={id} type={type} />
  </FieldWrapper>
)

const TextareaField = ({ label, name, id, rows = 6 }) => (
  <FieldWrapper>
    <label htmlFor={id}>{label}</label>
    <Textarea name={name} id={id} rows={rows} />
  </FieldWrapper>
)

const ContactForm = () => (
  <form name="contact" method="POST" netlify-honeypot="bot-field" netlify>
    <p class="hidden">
      <label>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>
    </p>
    <p>
      <label>
        Email: <input type="text" name="email" />
      </label>
    </p>
    <p>
      <label>
        Message: <textarea name="message" />
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
)

const Layout = styled.div`
  display: grid;
  ${breakpoint("tablet")`
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  `}
  }
`

const HeroImage = styled.image``

const Contact = ({ data }) => {
  const { title: siteTitle } = data.site.siteMetadata

  return (
    <Container>
      <Helmet title={`Contact - ${siteTitle}`} />
      <Layout>
        bla
        <ContactForm />
      </Layout>
    </Container>
  )
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
