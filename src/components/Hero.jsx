import { Button } from 'flowbite-react'

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:px-12 lg:py-24">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Grow Your Business with{' '}
          <span className="text-blue-600 dark:text-blue-500">
            Smart Marketing
          </span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          We help businesses in Ede and the surrounding region develop effective
          marketing strategies that drive real results.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="#contact" size="lg">
            Get Started
          </Button>
          <Button href="#services" size="lg" color="light">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
