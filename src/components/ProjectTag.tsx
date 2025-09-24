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
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    {/* White circular background */}
    <circle cx="12" cy="12" r="11" fill="white" />
    {/* Cursor icon with original gradients and transparency */}
    <path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill="url(#lobe-icons-cursor-fill-0)"></path>
    <path d="M22.35 18V6L11.925 0v12l10.425 6z" fill="url(#lobe-icons-cursor-fill-1)"></path>
    <path d="M11.925 0L1.5 6v12l10.425-6V0z" fill="url(#lobe-icons-cursor-fill-2)"></path>
    <path d="M22.35 6L11.925 24V12L22.35 6z" fill="#555"></path>
    <path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="#000"></path>
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursor-fill-0" x1="11.925" x2="11.925" y1="12" y2="24">
        <stop offset=".16" stopColor="#000" stopOpacity=".39"></stop>
        <stop offset=".658" stopColor="#000" stopOpacity=".8"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursor-fill-1" x1="22.35" x2="11.925" y1="6.037" y2="12.15">
        <stop offset=".182" stopColor="#000" stopOpacity=".31"></stop>
        <stop offset=".715" stopColor="#000" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursor-fill-2" x1="11.925" x2="1.5" y1="0" y2="18">
        <stop stopColor="#000" stopOpacity=".6"></stop>
        <stop offset=".667" stopColor="#000" stopOpacity=".22"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export const LovableIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.082 0c3.91 0 7.081 3.179 7.081 7.1v2.7h2.357c3.91 0 7.082 3.178 7.082 7.1 0 3.923-3.17 7.1-7.082 7.1H0V7.1C0 3.18 3.17 0 7.082 0z"/>
  </svg>
);

export const FramerIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siFramer.hex}`}>
    <path d={siFramer.path} fill="currentColor"/>
  </svg>
);

export const MidjourneyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.369 17.676c-1.387 1.259-3.17 2.378-5.332 3.417.044.03.086.057.13.083l.018.01.019.012c.216.123.42.184.641.184.222 0 .426-.061.642-.184l.018-.011.019-.011c.14-.084.266-.178.492-.366l.178-.148c.279-.232.426-.342.625-.456.304-.174.612-.266.949-.266.337 0 .645.092.949.266l.023.014c.188.109.334.219.602.442l.178.148c.221.184.346.278.483.36l.028.017.018.01c.21.12.407.181.62.185h.022a.31.31 0 110 .618c-.337 0-.645-.092-.95-.266a3.137 3.137 0 01-.09-.054l-.022-.014-.022-.013-.02-.014a5.356 5.356 0 01-.49-.377l-.159-.132a3.836 3.836 0 00-.483-.36l-.027-.017-.019-.01a1.256 1.256 0 00-.641-.185c-.222 0-.426.061-.641.184l-.02.011-.018.011c-.14.084-.266.178-.492.366l-.158.132a5.125 5.125 0 01-.51.39l-.022.014-.022.014-.09.054a1.868 1.868 0 01-.95.266c-.337 0-.644-.092-.949-.266a3.137 3.137 0 01-.09-.054l-.022-.014-.022-.013-.026-.017a4.881 4.881 0 01-.425-.325.308.308 0 01-.12-.1l-.098-.081a3.836 3.836 0 00-.483-.36l-.027-.017-.019-.01a1.256 1.256 0 00-.641-.185c-.222 0-.426.061-.642.184l-.018.011-.019.011c-.14.084-.266.178-.492.366l-.158.132a5.125 5.125 0 01-.51.39l-.023.014-.022.014-.09.054A1.868 1.868 0 0112 22c-.337 0-.645-.092-.949-.266a3.137 3.137 0 01-.09-.054l-.022-.014-.022-.013-.021-.014a5.356 5.356 0 01-.49-.377l-.158-.132a3.836 3.836 0 00-.483-.36l-.028-.017-.018-.01a1.256 1.256 0 00-.642-.185c-.221 0-.425.061-.641.184l-.019.011-.018.011c-.141.084-.266.178-.492.366l-.158.132a5.125 5.125 0 01-.511.39l-.022.014-.022.014-.09.054a1.868 1.868 0 01-.986.264c-.746-.09-1.319-.38-1.89-.866l-.035-.03c-.047-.041-.118-.106-.192-.174l-.196-.181-.107-.1-.011-.01a1.531 1.531 0 00-.336-.253.313.313 0 00-.095-.03h-.005c-.119.022-.238.059-.361.11a.308.308 0 01-.077.061l-.008.005a.309.309 0 01-.126.034 5.66 5.66 0 00-.774.518l-.416.324-.055.043a6.542 6.542 0 01-.324.236c-.305.207-.552.315-.8.315a.31.31 0 01-.01-.618h.01c.09 0 .235-.062.438-.198l.04-.027c.077-.054.163-.117.27-.199l.385-.301.06-.047c.268-.206.506-.373.73-.505l-.633-1.21a.309.309 0 01.254-.451l20.287-1.305a.309.309 0 01.228.537zm-1.118.14L2.369 19.03l.423.809c.128-.045.256-.078.388-.1a.31.31 0 01.052-.005c.132 0 .26.032.386.093.153.073.294.179.483.35l.016.015.092.086.144.134.097.089c.065.06.125.114.16.144.485.418.948.658 1.554.736h.011a1.25 1.25 0 00.6-.172l.021-.011.019-.011.018-.011c.141-.084.266-.178.492-.366l.178-.148c.279-.232.426-.342.625-.456.305-.174.612-.266.95-.266.336 0 .644.092.948.266l.023.014c.188.109.335.219.603.442l.177.148c.222.184.346.278.484.36l.027.017.019.01c.215.124.42.185.641.185.222 0 .426-.061.641-.184l.019-.011.018-.011c.141-.084.267-.178.493-.366l.177-.148c.28-.232.427-.342.626-.456.304-.174.612-.266.949-.266.337 0 .644.092.949.266l.025.015c.187.109.334.22.603.443 1.867-.878 3.448-1.811 4.73-2.832l.02-.016zM3.653 2.026C6.073 3.06 8.69 4.941 10.8 7.258c2.46 2.7 4.109 5.828 4.637 9.149a.31.31 0 01-.421.335c-2.348-.945-4.54-1.258-6.59-1.02-1.739.2-3.337.792-4.816 1.703-.294.182-.62-.182-.405-.454 1.856-2.355 2.581-4.99 2.343-7.794-.195-2.292-1.031-4.61-2.284-6.709a.31.31 0 01.388-.442zM10.04 4.45c1.778.543 3.892 2.102 5.782 4.243 1.984 2.248 3.552 4.934 4.347 7.582a.31.31 0 01-.401.38l-.022-.01-.386-.154a10.594 10.594 0 00-.291-.112l-.016-.006c-.68-.247-1.199-.291-1.944-.101a.31.31 0 01-.375-.218C15.378 11.123 13.073 7.276 9.775 5c-.291-.201-.072-.653.266-.55zM4.273 2.996l.008.015c1.028 1.94 1.708 4.031 1.885 6.113.213 2.513-.31 4.906-1.673 7.092l-.02.031.003-.001c1.198-.581 2.47-.969 3.825-1.132l.055-.006c1.981-.23 4.083.029 6.309.837l.066.025-.007-.039c-.593-2.95-2.108-5.737-4.31-8.179l-.07-.078c-1.785-1.96-3.944-3.6-6.014-4.65l-.057-.028zm7.92 3.238l.048.048c2.237 2.295 3.885 5.431 4.974 9.191l.038.132.022-.004c.71-.133 1.284-.063 1.963.18l.027.01.066.024.046.018-.025-.073c-.811-2.307-2.208-4.62-3.936-6.594l-.058-.065c-1.02-1.155-2.103-2.132-3.15-2.856l-.015-.011z"/>
  </svg>
);

export const WebflowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={`#${siWebflow.hex}`}>
    <path d={siWebflow.path} fill="currentColor"/>
  </svg>
);
