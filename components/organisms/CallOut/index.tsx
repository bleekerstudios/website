import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import SectionSentence from 'components/molecules/SectionSentence'
import React from 'react'

const CallOut = () => {
  return (
    <>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 place-items-center m-0 py-12 lg:grid-cols-2">
        <div className="text-center sm:w-8/12 md:w-10/12 lg:w-full lg:text-left">
          <SectionSentence title="Don't know where to begin? No worries, send us your problem & we'll reach out." />
        </div>
        <div className="flex flex-col gap-5 w-full sm:w-fit sm:flex-row lg:w-full lg:justify-end">
          <ButtonLink value="Let's Chat" href="/quote" />
          {/* <ButtonLink value="FAQ" color="white" style="light" href="/faq" /> */}
        </div>
      </section>
      <LineDivider />
    </>
  )
}

export default CallOut
