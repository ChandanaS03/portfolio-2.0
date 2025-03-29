
import { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

// Placeholder art data - replace with your actual artwork details
const artCategories = [
  {
    id: 'digital',
    name: 'Digital Art',
    items: [
      {
        id: 1,
        title: 'Digital Artwork 1',
        description: 'A vibrant digital illustration showcasing my style',
        image: '/placeholder.svg',
      },
      {
        id: 2,
        title: 'Digital Artwork 2',
        description: 'Abstract digital composition with geometric elements',
        image: '/placeholder.svg',
      },
      {
        id: 3,
        title: 'Digital Artwork 3',
        description: 'Character concept art with a futuristic theme',
        image: '/placeholder.svg',
      },
    ],
  },
  {
    id: 'traditional',
    name: 'Traditional Art',
    items: [
      {
        id: 4,
        title: 'Traditional Artwork 1',
        description: 'Watercolor painting of a serene landscape',
        image: '/placeholder.svg',
      },
      {
        id: 5,
        title: 'Traditional Artwork 2',
        description: 'Acrylic portrait study with bold colors',
        image: '/placeholder.svg',
      },
    ],
  },
  {
    id: 'sketches',
    name: 'Sketches',
    items: [
      {
        id: 6,
        title: 'Sketch 1',
        description: 'Quick pencil sketch exploring form and shadow',
        image: '/placeholder.svg',
      },
      {
        id: 7,
        title: 'Sketch 2',
        description: 'Detailed character design sketch',
        image: '/placeholder.svg',
      },
      {
        id: 8,
        title: 'Sketch 3',
        description: 'Urban landscape sketch with perspective study',
        image: '/placeholder.svg',
      },
    ],
  },
];

const ArtSection = () => {
  const [currentCategory, setCurrentCategory] = useState(artCategories[0].id);
  const [currentArtIndex, setCurrentArtIndex] = useState(0);
  
  const handlePrevious = (categoryId: string) => {
    const category = artCategories.find(cat => cat.id === categoryId);
    if (category) {
      setCurrentArtIndex((prev) => (prev === 0 ? category.items.length - 1 : prev - 1));
    }
  };
  
  const handleNext = (categoryId: string) => {
    const category = artCategories.find(cat => cat.id === categoryId);
    if (category) {
      setCurrentArtIndex((prev) => (prev === category.items.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="art" className="section-container bg-muted/30">
      <h2 className="section-heading">
        <span className="text-primary font-mono">04.</span> Art Album
      </h2>

      <div className="mt-8">
        <Tabs defaultValue={artCategories[0].id} value={currentCategory} onValueChange={setCurrentCategory}>
          <TabsList className="flex justify-center space-x-2 mb-8">
            {artCategories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                onClick={() => setCurrentArtIndex(0)}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {artCategories.map(category => {
            const currentArt = category.items[currentArtIndex];
            
            return (
              <TabsContent 
                key={category.id} 
                value={category.id} 
                className="focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="flex flex-col items-center">
                  <Card className="w-full max-w-4xl bg-card/50 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={currentArt.image} 
                          alt={currentArt.title}
                          className="w-full h-[400px] object-cover rounded-t-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4">
                          <h3 className="text-xl font-semibold text-primary">{currentArt.title}</h3>
                          <p className="text-foreground/70 mt-1">{currentArt.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4">
                        <button
                          onClick={() => handlePrevious(category.id)}
                          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                          aria-label="Previous artwork"
                        >
                          <ArrowLeft size={20} className="text-primary" />
                        </button>
                        <span className="text-sm text-foreground/60">
                          {currentArtIndex + 1} / {category.items.length}
                        </span>
                        <button
                          onClick={() => handleNext(category.id)}
                          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                          aria-label="Next artwork"
                        >
                          <ArrowRight size={20} className="text-primary" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-8 flex gap-2 overflow-x-auto pb-4 max-w-4xl">
                    {category.items.map((art, index) => (
                      <div 
                        key={art.id}
                        onClick={() => setCurrentArtIndex(index)}
                        className={`cursor-pointer flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border-2 transition-all ${
                          index === currentArtIndex ? 'border-primary scale-105' : 'border-transparent opacity-70'
                        }`}
                      >
                        <img 
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
        
        <div className="flex justify-center mt-12">
          <a 
            href="https://instagram.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-primary flex items-center gap-2"
          >
            View Full Art Portfolio <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArtSection;
