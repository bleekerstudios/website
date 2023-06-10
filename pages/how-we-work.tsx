import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const HowWeWork = () => {
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="HOW WE WORK"
            title="We have a workflow that allows the job to be delivered well"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/discuss-illustration.webp'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Some people discuss'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="STEP 1"
            title={`Architect`}
            paragraph={"After learning about your organizations roadblocks & challenges. We will recommend a solution based on your specific requirements. Once aligned on a path forward, we will define the level of effort associated with your solution"}
          />
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-right">
          <SectionSentence
            badge="STEP 2"
            title={`Develop + Integrate`}
            paragraph="In this phase we are all systems go. Heads down, laying brick by brick to build out and integrate your desired solution"
          />
        </aside>
        <aside className="w-full" data-aos="fade-up-left">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/development-illustration-2.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Development'
            />
          </div>
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/project-asset-illustration.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Project Asset'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="STEP 3"
            title={`Deploy & Educate `}
            paragraph="Here is where we get to see the solution come to life. We will create a enablement plan to educate your team on best practices and stay on to support your team while they acclimate to the new tools & services"
          />
        </aside>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default HowWeWork
