import { ReactNode } from 'react';
import { 
  siFigma, 
  siSupabase, 
  siVercel, 
  siLightning, 
  siXcode, 
  siAnthropic, 
  siFramer, 
  siOpenai,
  siWebflow 
} from 'simple-icons';

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

// Icon components using Simple Icons
export const FigmaIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siFigma.hex}`}>
    <path d={siFigma.path} fill="currentColor"/>
  </svg>
);

export const SupabaseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siSupabase.hex}`}>
    <path d={siSupabase.path} fill="currentColor"/>
  </svg>
);

export const VercelIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siVercel.hex}`}>
    <path d={siVercel.path} fill="currentColor"/>
  </svg>
);

export const BoltIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siLightning.hex}`}>
    <path d={siLightning.path} fill="currentColor"/>
  </svg>
);

export const CursorIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siXcode.hex}`}>
    <path d={siXcode.path} fill="currentColor"/>
  </svg>
);

export const LovableIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siAnthropic.hex}`}>
    <path d={siAnthropic.path} fill="currentColor"/>
  </svg>
);

export const FramerIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siFramer.hex}`}>
    <path d={siFramer.path} fill="currentColor"/>
  </svg>
);

export const MidjourneyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siOpenai.hex}`}>
    <path d={siOpenai.path} fill="currentColor"/>
  </svg>
);

export const WebflowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siWebflow.hex}`}>
    <path d={siWebflow.path} fill="currentColor"/>
  </svg>
);
