import { Button, Label, TextInput, Textarea } from 'flowbite-react'

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    alert('Thank you for your message! We will be in touch soon.')
    e.target.reset()
  }

  return (
    <section id="contact" className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-md px-4 py-16 lg:px-6">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Ready to grow your business? Get in touch with our team today.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <TextInput
                id="firstName"
                type="text"
                placeholder="John"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <TextInput
                id="lastName"
                type="text"
                placeholder="Doe"
                required
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <TextInput
              id="email"
              type="email"
              placeholder="john@example.com"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="mt-1"
            />
          </div>
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
