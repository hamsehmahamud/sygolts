import React from 'react';
import { Maximize2, Camera } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Community Outreach', className: 'md:col-span-2 md:row-span-2' },
    { id: 2, src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Youth Workshop', className: 'md:col-span-1 md:row-span-1' },
    { id: 3, src: 'https://images.unsplash.com/photo-1542810634-71277d95dc8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Health Campaign', className: 'md:col-span-1 md:row-span-1' },
    { id: 4, src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Education Drive', className: 'md:col-span-1 md:row-span-2' },
    { id: 5, src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Team Meeting', className: 'md:col-span-1 md:row-span-1' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Field Work', className: 'md:col-span-2 md:row-span-1' },
  ];

  return (
    <div className="pt-[80px] lg:pt-[100px] min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Page Hero */}
      <section className="relative py-[80px] lg:py-[120px] bg-slate-50 dark:bg-slate-900/30 overflow-hidden border-b border-slate-200 dark:border-slate-800/50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sygo-blue/10 dark:bg-sygo-blue/20 blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sygo-pink/10 dark:bg-sygo-pink/20 blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px] relative z-10 text-center">
          <div className="flex items-center justify-center gap-[12px] mb-[16px]">
            <Camera className="text-sygo-pink" size={32} />
          </div>
          <h1 className="text-[40px] md:text-[56px] font-bold text-sygo-purple dark:text-white mb-[24px] leading-tight">
            Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-sygo-pink to-sygo-purple">Gallery</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-slate-600 dark:text-slate-300 max-w-[800px] mx-auto leading-relaxed">
            A visual journey of our field activities, community outreach, and the faces of change.
          </p>
        </div>
      </section>

      {/* Modern Masonry Gallery Section */}
      <section className="py-[80px] lg:py-[120px]">
        <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-[24px]">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className={`group relative rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${image.className}`}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center">
                  <div className="w-[48px] h-[48px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <Maximize2 size={24} />
                  </div>
                  <span className="text-white font-bold text-[18px] mt-[16px] translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    {image.alt}
                  </span>
                </div>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
