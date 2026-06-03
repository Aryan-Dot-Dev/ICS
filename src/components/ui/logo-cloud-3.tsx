import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="flex items-center justify-center w-28 md:w-36 h-6 shrink-0"
          >
            <img
              alt={logo.alt}
              className="pointer-events-none max-h-4 md:max-h-5 w-auto select-none dark:brightness-0 dark:invert object-contain"
              loading="eager"
              src={logo.src}
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
