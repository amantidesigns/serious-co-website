import { ReactNode } from 'react';

interface ProjectTagProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'default' | 'work-type' | 'industry';
}

export default function ProjectTag({ children, icon, variant = 'default' }: ProjectTagProps) {
  const baseClasses = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200";
  
  const variantClasses = {
    default: "bg-white/10 text-white/80 border border-white/20 hover:bg-white/15 hover:text-white",
    'work-type': "bg-blue-500/20 text-blue-300 border border-blue-400/30 hover:bg-blue-500/30 hover:text-blue-200",
    industry: "bg-green-500/20 text-green-300 border border-green-400/30 hover:bg-green-500/30 hover:text-green-200"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

// Icon components for different tools/platforms
export const FigmaIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" fill="#F24E1E"/>
    <path d="M0 18c0-3.314 2.686-6 6-6h6v6c0 3.314-2.686 6-6 6s-6-2.686-6-6z" fill="#A259FF"/>
    <path d="M12 0v12h6c0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6v-6c-3.314 0-6-2.686-6-6s2.686-6 6-6z" fill="#FF7262"/>
  </svg>
);

export const SupabaseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z" fill="#3ECF8E"/>
  </svg>
);

export const VercelIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L24 22H0L12 1z" fill="currentColor"/>
  </svg>
);

export const BoltIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#FFB800"/>
  </svg>
);

export const CursorIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
  </svg>
);

export const LovableIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF6B6B"/>
  </svg>
);

export const FramerIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12l12-8v8l-12 8V4L0 12l12 8v-8z" fill="#0055FF"/>
  </svg>
);

export const MidjourneyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FF6B35"/>
    <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2"/>
  </svg>
);
