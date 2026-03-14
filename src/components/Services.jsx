import { Card } from 'flowbite-react'

const services = [
  {
    title: 'Digital Marketing',
    description:
      'Reach your audience online through targeted campaigns across social media, search engines, and display advertising.',
    icon: '📱',
  },
  {
    title: 'Content Creation',
    description:
      'Engage your audience with compelling content including blog posts, videos, and graphics tailored to your brand.',
    icon: '✍️',
  },
  {
    title: 'SEO Optimization',
    description:
      'Improve your search engine rankings and drive organic traffic to your website with proven SEO strategies.',
    icon: '🔍',
  },
  {
    title: 'Brand Strategy',
    description:
      'Build a strong, recognizable brand identity that resonates with your target market and sets you apart.',
    icon: '🎯',
  },
  {
    title: 'Email Marketing',
    description:
      'Connect with your customers directly through personalized email campaigns that convert and retain clients.',
    icon: '📧',
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Make data-driven decisions with in-depth analytics and clear reporting on all your marketing activities.',
    icon: '📊',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md text-center lg:mb-16 mx-auto">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
            We offer a full range of marketing services to help your business
            thrive in a competitive market.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="text-center">
              <div className="mb-2 text-4xl">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
