import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
          Vectornine Studios
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A complete single-page website for a creative agency. Experience the stunning design, smooth animations, and responsive layout.
        </p>
        <div className="space-y-4">
          <Button 
            onClick={() => window.open('/vectornine.html', '_blank')} 
            size="lg"
            className="mr-4"
          >
            View Full Website
          </Button>
          <p className="text-sm text-muted-foreground">
            ✨ Features: Hero animations, smooth scroll, on-scroll reveals, hover effects, and fully responsive design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
