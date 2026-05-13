import { Building2, Smile, Clock, Users, FileCheck, MapPin } from 'lucide-react'

export const Stats = () => {
  const stats = [
    { value: '100+', label: 'Projects Monitored', icon: Building2 },
    { value: '98%', label: 'Client Satisfaction', icon: Smile },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '50+', label: 'Expert Representatives', icon: Users },
    { value: '100%', label: 'Verification Rate', icon: FileCheck },
    { value: '15+', label: 'Service Areas', icon: MapPin },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-4 bg-background rounded-lg border border-border hover:border-accent transition-all duration-300"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-foreground-muted mt-1">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats