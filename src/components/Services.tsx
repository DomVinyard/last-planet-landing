
import { Brain, Code, Cloud, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  return (
    <div className="group relative p-6 md:p-8 rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md overflow-hidden">
      <div className={cn(
        "absolute top-0 right-0 w-32 h-32 rounded-full -translate-x-10 -translate-y-10 blur-2xl opacity-20 transition-opacity duration-300 group-hover:opacity-40",
        color
      )}></div>
      
      <div className="relative space-y-4">
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-lg",
          color,
          "bg-opacity-30"
        )}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold">{title}</h3>
        
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "AI Strategy Consulting",
      description: "We help businesses identify opportunities for AI integration and develop comprehensive implementation strategies.",
      icon: <Brain className="h-6 w-6 text-primary" />,
      color: "bg-[#403E43]"
    },
    {
      id: 2,
      title: "Custom AI Development",
      description: "Build tailored AI solutions designed specifically for your unique business challenges and objectives.",
      icon: <Code className="h-6 w-6 text-primary" />,
      color: "bg-[#1A1F2C]"
    },
    {
      id: 3,
      title: "AI Cloud Solutions",
      description: "Deploy and scale AI applications with our cloud-native architecture and infrastructure expertise.",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      color: "bg-[#222222]"
    },
    {
      id: 4,
      title: "AI Integration Services",
      description: "Seamlessly connect AI capabilities with your existing systems, applications, and workflows.",
      icon: <Zap className="h-6 w-6 text-primary" />,
      color: "bg-[#333333]"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-[#222222]/90">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-lg text-gray-300">
            We offer a comprehensive suite of AI development services to bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
