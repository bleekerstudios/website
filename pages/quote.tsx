import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import SelectGroup from 'components/molecules/FormGroup/SelectGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import ContactForm from 'components/atoms/Form/ContactForm'

const Quote = () => {
  return (
    <>
      <PageTemplate title='Send Message - Bleeker Studios'>
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start" data-aos="fade-down-right">
            <div className="text-center lg:text-left">
              <PageSentence
                title="Tell Us Your Problems And We'll Help Find A Solution"
                description="Bleeker Studios leverages a modern framework for solving our customers problems. Check it out below."
                badge="CONNECT WITH US"
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="How We Work"
                href="/how-we-work"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-up-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
            <ContactForm/>
              <div className="grid grid-cols-2 gap-4">
               
               
              
              
              </div>
              <div className="grid grid-cols-2 gap-4">
                
              
                
                
              </div>
              
              
              
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Quote
