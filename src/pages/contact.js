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
  <form name="contact" method="post" netlify-honeypot="bot-field" netlify>
    <input type="hidden" name="bot-field" />
    <InputField name="name" id="name" label="Name" />
    <InputField name="email" id="email" label="Email" />
    <TextareaField name="message" id="message" label="Message" />
    <SubmitButton type="submit">SEND</SubmitButton>
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
        <Margin vertical={3}>bla</Margin>
        <Margin vertical={3}>
          <ContactForm />
        </Margin>
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
