
import React from 'react';

const SellCarHero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-primary/90 pt-32 pb-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell Your Car With Confidence</h1>
          <p className="text-lg text-gray-100 mb-8">Get the best value for your vehicle with our hassle-free selling process</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
              <p className="text-2xl font-bold">3,500+</p>
              <p className="text-sm opacity-80">Cars Sold</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
              <p className="text-2xl font-bold">₹10 Cr+</p>
              <p className="text-sm opacity-80">Total Value</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-sm opacity-80">Seller Rating</p>
            </div>
          </div>
          
          {/* Small gearbox animation as decoration */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-20 hidden md:block">
            <div className="gearbox" style={{transform: 'scale(0.5)', height: '150px'}}>
              <div className="overlay"></div>
              <div className="gear one">
                <div className="gear-inner">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
              <div className="gear three">
                <div className="gear-inner">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellCarHero;
