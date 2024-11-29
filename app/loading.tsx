"use client";

import PulsingLogoColor from "@/components/svg/pulsing-logo-color";

type LoadingProps = {
  showText?: boolean;
};

export default function Loading({ showText = false }: LoadingProps) {
  return (
    <div className="flex-grow flex items-center justify-center min-h-screen w-full bg-background/80 backdrop-blur-sm">
      <div className="text-center w-1/5">
        <PulsingLogoColor />
        {showText && (
          <>
            <h2 className="mt-4 text-xl font-semibold text-foreground text-black">
              Loading...
            </h2>
            <p className="mt-2 text-sm text-muted-foreground text-black">
              Please wait while we prepare your content.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
