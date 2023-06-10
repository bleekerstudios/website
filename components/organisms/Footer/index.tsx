import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand />
            <div className="">
              <Text
                value={`Copyright © ${new Date().getFullYear()}`}
                textStyle="SectionParagraph"
              />
              <Text
                value={`Bleeker Studios`}
                
                textStyle="SectionParagraph"
              />
              <Text

                value={`Manhattan, NY`}
                textStyle="SectionParagraph"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="SERVICES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">

              <NavLink value="IT Implementation & Support" href="/service/detail" />
                <NavLink value="Media" href="/service/detail" />
                <NavLink value="Development" href="/service/detail" />
                
                <NavLink value="Education & Tech Stack Audit" href="/service/detail" />
                
                
              
              </div>
            </div>
            <div className="space-y-5">
              <Text value="COMPANY" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="About" href="/about" />
                <NavLink value="Contact" href="/contact" />
                <NavLink value="Pricing" href="/pricing" />
                <NavLink value="Send Message" href="/quote" />
                <NavLink value="Privacy Policy" href="/privacy-policy" />
                <NavLink value="Term of Service" href="/term-of-service" />
                {/*<NavLink value="Jobs" href="/jobs" /> */}
                <NavLink value="Blogs" href="/blog" />
                
              </div>
            </div>
            <div className="space-y-5">
              <Text value="RESOURCES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="Support" href="/support" />
                {/* <NavLink value="Documentation" href="/documentation" /> */}
                  <NavLink value="LinkedIn" href="https://www.linkedin.com/company/bleekerstudios/" />
                  {/* <NavLink value="Sitemap" href="" /> */} 
                {/* <NavLink value="Sitemap" href="/sitemap" /> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
