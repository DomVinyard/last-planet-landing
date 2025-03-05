
import { cn } from '@/lib/utils';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  color: string;
};

const Testimonial = ({ quote, author, role, company, color }: TestimonialProps) => {
  return (
    <div className="relative p-6 md:p-8 rounded-2xl bg-white shadow-sm border border-gray-100 h-full flex flex-col">
      <div className={cn(
        "absolute top-0 left-0 w-full h-1 rounded-t-2xl",
        color
      )}></div>
      
      <div className="mb-6">
        <svg className="h-8 w-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 2.211-3.995 5.852v1.997h7v7h-13zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 2.211-3.996 5.852v1.997h7v7h-13z" />
        </svg>
      </div>
      
      <p className="text-lg font-medium mb-6 flex-grow">{quote}</p>
      
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}, {company}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Last Planet transformed our customer service with their AI solution. We've seen a 40% reduction in response time and significantly improved customer satisfaction scores.",
      author: "Sarah Chen",
      role: "CTO",
      company: "NexGen Retail",
      color: "bg-pastel-blue"
    },
    {
      id: 2,
      quote: "Their team's expertise in AI and deep understanding of our industry made all the difference. The solution they built has given us a competitive edge we didn't think was possible.",
      author: "Michael Rodriguez",
      role: "VP of Innovation",
      company: "Horizon Finance",
      color: "bg-pastel-green"
    },
    {
      id: 3,
      quote: "Working with Last Planet was seamless from start to finish. They delivered a sophisticated AI solution on time and within budget that has revolutionized our data analysis capabilities.",
      author: "Emma Thompson",
      role: "Director of Operations",
      company: "Pulse Healthcare",
      color: "bg-pastel-purple"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-pastel-peach/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Hear what our clients have to say about working with Last Planet
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              color={testimonial.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
