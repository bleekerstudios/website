import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiArrowUp,
  FiCheckCircle,
  FiDownload,
  FiGlobe,
  FiLayout,
  FiMonitor,
  FiRefreshCcw,
  FiSmartphone,
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'
const Services = () => {
  return (
    <>
      <PageTemplate title='Services - Bleeker Studios'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="SERVICES"
              title="Overview of services we've implemented to solve our partners problems"
            />
          </div>
        </section>
        <LineDivider />

        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[545px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='server maintenance'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="SOFTWARE/HARDWARE IMPLEMENTATION & IT SUPPORT"
                title="Deploy new solutions to streamline your workflows"
                paragraph="Net-new solutions to make your teams life easier"
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <IconListItem icon={<FiDownload />} value='Workstation Management Software' />
                <IconListItem icon={<FiArrowUp />} value='Mac/PC ' />
                <IconListItem icon={<FiRefreshCcw />} value='Salesforce' />
                <IconListItem icon={<FiCheckCircle />} value='Jira' />
                <IconListItem icon={<FiCheckCircle />} value='Slack' />
                <IconListItem icon={<FiCheckCircle />} value='Google Suite' />
                <IconListItem icon={<FiCheckCircle />} value='Software Configuration' />
                <IconListItem icon={<FiCheckCircle />} value='Content Management Systems' />
                <IconListItem icon={<FiCheckCircle />} value='Microsoft Office & Apps' />
                <IconListItem icon={<FiCheckCircle />} value='ChatGPT & AI Tools' />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
        </section>





        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Media'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="MEDIA"
                title="Expand your digital footprint"
                paragraph="Deliever best in class experiences that appeal to the masses"
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Design"
                  description="Create a modern design for your idea."
                  icon={<FiLayout />}
                />
                <SmallCardIcon
                  title="Advertising"
                  description="Promotional Products"
                  icon={<FiLayout />}
                />
                 <SmallCardIcon
                  title="Film"
                  description="Promotional Products"
                  icon={<FiLayout />}
                />
                <SmallCardIcon
                  title="Social Media"
                  description="Promotional Products"
                  icon={<FiLayout />}
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
         
         
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="DEVELOPMENT"
                title="We simplify the creation and deployment of appslications"
                paragraph="We'll work with you to design an application that will scale as your business grows"
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiSmartphone />}
                  title="Mobile App Development"
                />
                <CardListIcon
                  icon={<FiMonitor />}
                  title="Desktop App Development"
                />
                <CardListIcon icon={<FiGlobe />} title="Web Development" />
                <CardListIcon icon={<FiGlobe />} title="UX Design" />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='IDE for development'
              />
            </figure>
          </aside>
        </section>
        
      
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[545px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='server maintenance'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="EDUCATION & TECH STACK AUDIT"
                title="Upskill your team and understand your mission critical tools"
                paragraph="Build an understanding into which software provides the highest ROI"
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <IconListItem icon={<FiDownload />} value='Software Training' />
              <IconListItem icon={<FiDownload />} value='Technical Enablement' />
                <IconListItem icon={<FiDownload />} value='Software Sale Negotation' />
                <IconListItem icon={<FiArrowUp />} value='Software Evaluation' />
                <IconListItem icon={<FiRefreshCcw />} value='Audit & Consolidation' />
                <IconListItem icon={<FiCheckCircle />} value='Cost-Benefit Analysis' />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Services
