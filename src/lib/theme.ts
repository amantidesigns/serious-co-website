/**
 * Design tokens for the Serious Co website
 * This file contains all the hard-coded values found in the codebase
 * organized as reusable design tokens.
 */

export const theme = {
  colors: {
    // Primary brand colors
    primary: {
      blue: '#0B3D91',
      white: '#FFFFFF',
      lightGray: '#F2F2F2',
    },
    
    // Border colors with opacity
    border: {
      white20: '#FFFFFF33', // 20% opacity
      white10: '#FFFFFF1A', // 10% opacity
      white25: 'rgba(255,255,255,0.25)',
    },
    
    // Star effect colors (various white opacities)
    star: {
      opacity60: 'rgba(255,255,255,0.6)',
      opacity40: 'rgba(255,255,255,0.4)',
      opacity80: 'rgba(255,255,255,0.8)',
      opacity50: 'rgba(255,255,255,0.5)',
      opacity70: 'rgba(255,255,255,0.7)',
      opacity30: 'rgba(255,255,255,0.3)',
      opacity90: 'rgba(255,255,255,0.9)',
    },
    
    // Drop shadow colors
    shadow: {
      white60: 'rgba(255,255,255,0.6)',
      white80: 'rgba(255,255,255,0.8)',
    },
  },
  
  spacing: {
    // Padding
    padding: {
      xs: 'px-4',
      sm: 'px-6',
      md: 'px-7',
      lg: 'px-8',
      xl: 'py-4',
      xxl: 'py-8',
      section: 'py-32',
      sectionSmall: 'py-16',
    },
    
    // Margin
    margin: {
      xs: 'mt-4',
      sm: 'mt-6',
      md: 'mt-8',
      lg: 'mt-10',
      xl: 'mt-12',
      xxl: 'mt-16',
      bottom: 'mb-8',
      bottomSmall: 'mb-6',
      bottomLarge: 'mb-12',
      bottomXLarge: 'mb-20',
    },
    
    // Gap
    gap: {
      xs: 'gap-2',
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-10',
      xxl: 'gap-14',
    },
    
    // Space between elements
    space: {
      xs: 'space-y-4',
      sm: 'space-y-6',
      md: 'space-y-8',
      lg: 'space-y-10',
      xl: 'space-y-16',
    },
  },
  
  sizing: {
    // Width
    width: {
      xs: 'w-80',
      sm: 'max-w-2xl',
      md: 'max-w-3xl',
      lg: 'max-w-4xl',
      xl: 'max-w-5xl',
      xxl: 'max-w-7xl',
      container: 'w-2xl',
      full: 'w-full',
    },
    
    // Height
    height: {
      xs: 'h-14',
      sm: 'h-8',
      md: 'h-12',
      lg: 'h-[112px]',
      xl: 'min-h-screen',
      full: 'h-full',
      viewport: 'min-h-[100vh]',
    },
    
    // Max width
    maxWidth: {
      xs: 'max-w-xl',
      sm: 'max-w-2xl',
      md: 'max-w-3xl',
      lg: 'max-w-4xl',
      xl: 'max-w-5xl',
      xxl: 'max-w-7xl',
    },
  },
  
  typography: {
    // Font sizes
    fontSize: {
      xs: 'text-sm',
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl',
      xl: 'text-2xl',
      xxl: 'text-3xl',
      xxxl: 'text-4xl',
      huge: 'text-6xl',
      massive: 'text-7xl',
      enormous: 'text-8xl',
      gigantic: 'text-9xl',
    },
    
    // Font weights
    fontWeight: {
      thin: 'font-thin',
      light: 'font-light',
      normal: 'font-medium',
      bold: 'font-bold',
      extralight: 'font-extralight',
    },
    
    // Line heights
    lineHeight: {
      tight: 'leading-tight',
      relaxed: 'leading-relaxed',
      normal: 'leading-6',
    },
    
    // Letter spacing
    letterSpacing: {
      tight: 'tracking-tight',
      tighter: 'tracking-tighter',
      custom: 'tracking-[-0.32px]',
    },
  },
  
  borderRadius: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-2xl',
    full: 'rounded-full',
  },
  
  // Z-index values
  zIndex: {
    base: 'z-10',
    overlay: 'z-20',
  },
  
  // Positioning
  position: {
    absolute: {
      bottom: 'bottom-20',
      bottomLarge: 'bottom-52',
      top: 'top-8',
      topLarge: 'top-[72px]',
      topNegative: '-top-35',
      topNegativeLarge: '-top-110',
    },
  },
  
  // Transitions
  transition: {
    colors: 'transition-colors',
    all: 'transition-all',
    duration: {
      fast: 'duration-150',
      normal: 'duration-200',
      slow: 'duration-300',
    },
  },
  
  // Effects
  effects: {
    hover: {
      scale: 'active:scale-[0.98]',
    },
    opacity: {
      star: 'opacity-80',
    },
  },
  
  // Responsive breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Helper function to get CSS custom properties
export const getCSSVar = (path: string): string => {
  return `var(--${path.replace(/\./g, '-')})`;
};

// Helper function to combine multiple classes
export const combineClasses = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};
