import { Footer as FlowbiteFooter } from 'flowbite-react'

export default function Footer() {
  return (
    <FlowbiteFooter container className="rounded-none border-t border-gray-200 dark:border-gray-700">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <FlowbiteFooter.Title title="Company" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">About</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Careers</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Blog</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="Services" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#services">
                Digital Marketing
              </FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#services">SEO</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#services">
                Content Creation
              </FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="Legal" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Terms of Service</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="Contact" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#contact">
                Get In Touch
              </FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="mailto:info@edemarketing.nl">
                info@edemarketing.nl
              </FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright
            href="/"
            by="EdeMarketing"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </FlowbiteFooter>
  )
}
