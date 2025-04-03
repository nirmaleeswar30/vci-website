import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Image {
  id: number;
  url: string;
  alt: string;
}

const images: Image[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Student studying"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Group project"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Campus life"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Students discussing"
  }
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    } else {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(images[newIndex].id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigate('prev');
    if (e.key === 'ArrowRight') navigate('next');
  };

  return (

    <section className="min-h-screen">
    <div className='bg-gray-800 p-10 md:px-8 lg:px-16'>

    </div>
    <div className="container mx-auto px-4 py-13">
      <h1 className="text-5xl font-bold font-mono mb-8 text-gray-800">Gallery</h1>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden  shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(image.id)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */} 
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={images.find(img => img.id === selectedImage)?.url}
              alt={images.find(img => img.id === selectedImage)?.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default ImageGallery;