import { cn } from "@/lib/utils";

interface SectionShellProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
    containerClassName?: string;
    background?: "default" | "muted" | "brand" | "none";
    enableContainer?: boolean;
}

export default function SectionShell({
    children,
    id,
    className,
    containerClassName,
    background = "default",
    enableContainer = true,
    ...props
}: SectionShellProps) {
    const bgStyles = {
        default: "bg-background",
        muted: "bg-muted",
        brand: "bg-[#0B3D91] text-white",
        none: "",
    };

    const content = enableContainer ? (
        <div className={cn("container max-w-6xl mx-auto px-6 sm:px-8", containerClassName)}>
            {children}
        </div>
    ) : (
        children
    );

    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24", // Standard vertical padding
                bgStyles[background],
                className
            )}
            {...props}
        >
            {content}
        </section>
    );
}
