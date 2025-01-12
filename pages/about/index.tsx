import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="About - Bleeker Studios">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
      <PageSentence
            badge="ABOUT"
            title="Bleeker Studios"
            description={`We take the time to actively listen to your unique business challenges and are committed to collaborating with you to develop solutions that are truly tailored to your needs. Our goal is to provide an exceptional partnership experience, marked by excellent communication and ongoing support.`}
          />
      
        
      </section> 

     
        
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="CLIENTS & PARTNERS"
            title="Partnership Overview"
            description={`We partner with top-tier software providers to make your workflows more efficient and to help you reduce yearly subscription expenses.`}

          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            
          </div>

          <LogoList />

          <div data-aos="fade-right">
            <StatisticList />

          </div>
        </div>
      
      </section>

     {/* <section className="grid place-items-center gap-16"> */}
        
     <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/maps.svg'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt=""
              /> 

          </div>   
        </aside>
         <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="LOCATION"
            title="Based in NY"
            description={`Headquarted in New York, NY. Bleeker Studios partners with orgnaizations across the globe.`}
          />
        </aside>
        
      </section> 
        
        
        
        { /*
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="OUR TEAM"
            title=""
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/peace.jpeg"
              job="Founder"
              name="Sofi Cherif"
            />
          </div>
          
  </div> 
</section>  */}
    </PageTemplate>
  )
}

export default About
