import CSSBoxExample from "@/components/blocks/css-box-example"
import { theme } from "@/lib/theme"

export default function CSSBoxDemoPage() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: theme.colors.primary.blue }}
    >
      {/* Galaxy background */}
      <div className="absolute inset-0 w-full h-full z-10 overflow-hidden">
        <img 
          src="/galaxy-ascii.png" 
          className="w-full h-full object-cover opacity-60 rounded-2xl" 
          alt="Galaxy background" 
        />
      </div>

      <div className="relative z-20 container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-playfair font-extralight text-white mb-4">
            3D CSS Box Demo
          </h1>
          <p className="text-lg text-white/80">
            A simple 3D box component with CSS-only 3D transforms
          </p>
        </div>
        
        <CSSBoxExample />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-playfair font-light text-white mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-playfair font-light text-white mb-2">Interactive</h3>
              <p className="text-white/80 text-sm">Draggable 3D rotation with mouse</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-playfair font-light text-white mb-2">Programmatic</h3>
              <p className="text-white/80 text-sm">Control with ref methods</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-playfair font-light text-white mb-2">Customizable</h3>
              <p className="text-white/80 text-sm">Dimensions and perspective</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-playfair font-light text-white mb-2">Six Faces</h3>
              <p className="text-white/80 text-sm">Individual content per face</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-playfair font-light text-white mb-2">CSS-Only</h3>
              <p className="text-white/80 text-sm">No JavaScript 3D libraries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-playfair font-light text-white mb-2">TypeScript</h3>
              <p className="text-white/80 text-sm">Full type safety</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
