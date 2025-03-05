
import { cn } from '@/lib/utils';

type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
  isFirst?: boolean;
  isLast?: boolean;
};

const ProcessStep = ({ number, title, description, isFirst = false, isLast = false }: ProcessStepProps) => {
  return (
    <div className="relative flex md:items-start gap-6 md:gap-8">
      {/* Timeline line */}
      {!isFirst && (
        <div className="absolute top-0 left-6 w-0.5 h-6 bg-pastel-blue/50 -translate-x-1/2 -translate-y-full"></div>
      )}
      {!isLast && (
        <div className="absolute bottom-0 left-6 w-0.5 h-full bg-pastel-blue/50 -translate-x-1/2 translate-y-6"></div>
      )}
      
      {/* Step number */}
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-pastel-blue/30 text-primary font-semibold z-10">
        {number}
      </div>
      
      {/* Step content */}
      <div className={cn(
        "flex-1 pb-12",
        { "pb-0": isLast }
      )}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Assessment",
      description: "We begin by understanding your business objectives, challenges, and exploring how AI can create value for your organization."
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "Our team crafts a comprehensive AI strategy and roadmap tailored to your specific needs and goals."
    },
    {
      number: 3,
      title: "Design & Prototyping",
      description: "We create detailed designs and interactive prototypes to visualize the solution before development begins."
    },
    {
      number: 4,
      title: "AI Development",
      description: "Our engineers build your solution using cutting-edge AI technologies and best practices in software development."
    },
    {
      number: 5,
      title: "Testing & Refinement",
      description: "We rigorously test the AI solution to ensure reliability, performance, and alignment with your objectives."
    },
    {
      number: 6,
      title: "Deployment & Integration",
      description: "We seamlessly deploy the solution and integrate it with your existing systems and workflows."
    }
  ];

  return (
    <section id="process" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach to developing exceptional AI solutions
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isFirst={index === 0}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
