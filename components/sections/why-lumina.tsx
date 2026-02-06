'use client'

export function WhyLumina() {
  const metrics = [
    {
      number: '2,500+',
      label: 'Families Helped',
      description: 'Successful journeys to parenthood',
    },
    {
      number: '98%',
      label: 'Satisfaction Rate',
      description: 'Patient satisfaction with care',
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Dr. Elena Vance expertise',
    },
    {
      number: '68%',
      label: 'Success Rate',
      description: '15% higher than national average',
    },
  ]

  return (
    <section id="why-lumina" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl text-primary-text text-balance">
              Why Choose Lumina
            </h2>
            <p className="text-muted-text text-lg max-w-2xl">
              We combine clinical excellence with compassionate care to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="glass glass-hover p-6 space-y-3 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: `fade-in 0.6s ease-out ${index * 100}ms both`,
                }}
              >
                <p className="font-playfair text-3xl md:text-4xl text-cyan-400">
                  {metric.number}
                </p>
                <h3 className="text-primary-text font-semibold">{metric.label}</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
