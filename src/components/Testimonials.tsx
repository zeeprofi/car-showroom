
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "AutoRevive Motors provided an exceptional experience when I was looking to upgrade my car. The transparency and professionalism throughout the process were remarkable. I got a fair price for my old car and found the perfect replacement."
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "IT Professional",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "As a first-time car buyer, I was nervous about purchasing a pre-owned vehicle. The team at AutoRevive Motors guided me through every step, explaining everything clearly and helping me find a reliable car within my budget. Highly recommend!"
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Doctor",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 4,
      text: "I've bought two cars from AutoRevive Motors over the past few years. Their after-sales service is excellent, and they stand behind the vehicles they sell. The warranty coverage gave me peace of mind with both purchases."
    }
  ];
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className={`py-16 transition-colors duration-300 ${isDark ? 'bg-black' : ''}`} id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isDark ? 'text-[#FEF7CD]' : ''}`}>
          What Our <span className="text-primary">Customers</span> Say
        </h2>
        <p className={`section-subtitle text-center ${isDark ? 'text-[#FEF7CD]/80' : ''}`}>
          Don't just take our word for it. Here's what our satisfied customers have to say.
        </p>
        <div className="relative max-w-4xl mx-auto mt-12 px-4">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className={`rounded-lg shadow-md p-6 md:p-8 transition-colors duration-300
                    ${isDark ? 'bg-[#101010] border border-[#232323] text-[#FEF7CD]' : 'bg-white'}
                  `}>
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className={`font-semibold text-lg ${isDark ? 'text-[#FEF7CD]' : ''}`}>{testimonial.name}</h4>
                        <p className={`${isDark ? 'text-[#FEF7CD]/70' : 'text-gray-600'}`}>{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : isDark ? 'text-[#222]/40' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className={`italic ${isDark ? 'text-[#FEF7CD] border-t border-[#222]/50 pt-4 font-medium' : 'text-gray-700'}`}>{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className={`absolute top-1/2 left-0 -translate-y-1/2 shadow-md z-10
            ${isDark ? 'bg-[#1A1F2C] border-[#444] text-[#FEF7CD] hover:bg-[#232323]' : 'bg-white hover:bg-gray-100'}
            `}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className={`absolute top-1/2 right-0 -translate-y-1/2 shadow-md z-10
            ${isDark ? 'bg-[#1A1F2C] border-[#444] text-[#FEF7CD] hover:bg-[#232323]' : 'bg-white hover:bg-gray-100'}
            `}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200
                  ${activeSlide === index 
                    ? isDark ? 'bg-primary' : 'bg-primary' 
                    : isDark ? 'bg-[#222]' : 'bg-gray-300'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
