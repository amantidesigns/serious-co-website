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
    // Padding - Tailwind CSS standards (4px base unit)
    padding: {
      xs: 'p-1',      // 4px
      sm: 'p-2',      // 8px
      md: 'p-3',      // 12px
      lg: 'p-4',      // 16px
      xl: 'p-6',      // 24px
      '2xl': 'p-8',   // 32px
      '3xl': 'p-12',  // 48px
      '4xl': 'p-16',  // 64px
      section: 'py-32', // 128px
      sectionSmall: 'py-16', // 64px
    },
    
    // Margin - Tailwind CSS standards
    margin: {
      xs: 'm-1',      // 4px
      sm: 'm-2',      // 8px
      md: 'm-3',      // 12px
      lg: 'm-4',      // 16px
      xl: 'm-6',      // 24px
      '2xl': 'm-8',   // 32px
      '3xl': 'm-12',  // 48px
      '4xl': 'm-16',  // 64px
      bottom: 'mb-8', // 32px
      bottomSmall: 'mb-6', // 24px
      bottomLarge: 'mb-12', // 48px
      bottomXLarge: 'mb-20', // 80px
    },
    
    // Gap - Tailwind CSS standards
    gap: {
      xs: 'gap-1',    // 4px
      sm: 'gap-2',    // 8px
      md: 'gap-3',    // 12px
      lg: 'gap-4',    // 16px
      xl: 'gap-6',    // 24px
      '2xl': 'gap-8', // 32px
      '3xl': 'gap-12', // 48px
    },
    
    // Space between elements - Tailwind CSS standards
    space: {
      xs: 'space-y-1',   // 4px
      sm: 'space-y-2',   // 8px
      md: 'space-y-3',   // 12px
      lg: 'space-y-4',   // 16px
      xl: 'space-y-6',   // 24px
      '2xl': 'space-y-8', // 32px
      '3xl': 'space-y-12', // 48px
      '4xl': 'space-y-16', // 64px
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
    
    // Max width - Tailwind CSS standards
    maxWidth: {
      xs: 'max-w-xl',      // 576px
      sm: 'max-w-2xl',     // 672px
      md: 'max-w-3xl',     // 768px
      lg: 'max-w-4xl',     // 896px
      xl: 'max-w-5xl',     // 1024px
      '2xl': 'max-w-6xl',  // 1152px
      '3xl': 'max-w-7xl',  // 1280px (Tailwind container default)
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
