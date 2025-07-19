import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  category?: string;
  width?: number;
  height?: number;
  className?: string;
  text?: string;
  textColor?: string;
  bgColor?: string;
  rounded?: boolean;
  pattern?: 'gradient' | 'dots' | 'lines' | 'solid';
  imageIndex?: number;
}

export function PlaceholderImage({
  category,
  width = 600,
  height = 400,
  className,
  text,
  textColor = "text-primary-foreground",
  bgColor = "bg-primary/20",
  rounded = true,
  pattern = 'gradient',
  imageIndex,
}: PlaceholderImageProps) {
  const displayText = text || category || "Elegance";

  // Generate semi-realistic placeholder based on pattern type
  const getBgStyle = () => {
    const index = imageIndex || Math.floor(Math.random() * 5) + 1;

    const gradients = [
      'bg-gradient-to-br from-amber-100 to-amber-300',
      'bg-gradient-to-br from-rose-100 to-rose-200',
      'bg-gradient-to-br from-stone-100 to-stone-300',
      'bg-gradient-to-br from-neutral-100 to-neutral-300',
      'bg-gradient-to-br from-amber-50 to-amber-200',
    ];

    switch(pattern) {
      case 'gradient':
        return gradients[index % gradients.length];
      case 'dots':
        return 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:16px_16px] bg-amber-50';
      case 'lines':
        return 'bg-[linear-gradient(45deg,#f3f4f6_25%,transparent_25%,transparent_50%,#f3f4f6_50%,#f3f4f6_75%,transparent_75%,transparent)] bg-[length:16px_16px] bg-amber-50';
      case 'solid':
      default:
        return bgColor;
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden relative",
        pattern === 'solid' ? bgColor : getBgStyle(),
        rounded && "rounded-md",
        className
      )}
      style={{ width, height }}
    >
      <span className={cn("text-lg font-medium z-10", textColor)}>
        {displayText}
      </span>

      {/* Add decoration elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        {pattern === 'gradient' && (
          <>
            <div className="absolute w-20 h-20 rounded-full bg-white/30 top-5 left-5"></div>
            <div className="absolute w-16 h-16 rounded-full bg-white/20 bottom-8 right-8"></div>
          </>
        )}
      </div>
    </div>
  );
}