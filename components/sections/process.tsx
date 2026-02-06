'use client'

interface ProcessStep {
  number: string
  title: string
  description: string
}

function ProcessStepCard({
  step,
  index,
}: {
  step: ProcessStep
  index: number
}) {
  return (
    <div
      className="glass glass-hover p-6 space-y-4 relative"
      style={{
        animation: `fade-in-up 0.6s ease-out ${index * 150}ms both`,
      }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-playfair font-bold text-lg">
        {step.number}
      </div>
      <h3 className="font-playfair text-xl text-primary-text">{step.title}</h3>
      <p className="text-muted-text text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  )
}

export function Process() {
  const steps: ProcessStep[] = [
    {
      number: '1',
      title: 'Initial Consultation',
      description:
        'Meet with our specialists to discuss your fertility journey, medical history, and goals.',
    },
    {
      number: '2',
      title: 'Comprehensive Assessment',
      description:
        'Undergo thorough diagnostic testing to understand your unique fertility situation.',
    },
    {
      number: '3',
      title: 'Treatment Planning',
      description:
        'Develop a personalized treatment plan tailored to your needs and preferences.',
    },
    {
      number: '4',
      title: 'Ongoing Support',
      description:
        'Receive continuous care, monitoring, and emotional support throughout your treatment.',
    },
    {
      number: '5',
      title: 'Success & Beyond',
      description:
        'Achieve your parenthood goals with ongoing care and support from our team.',
    },
  ]

  return (
    <section id="process" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl text-primary-text text-balance">
              Our Process
            </h2>
            <p className="text-muted-text text-lg max-w-2xl">
              A clear, supportive pathway from consultation to success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <ProcessStepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
