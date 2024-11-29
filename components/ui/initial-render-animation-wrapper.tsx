"use client";

import { useEffect, useState } from "react";
import Loading from "@/app/loading";

export default function InitialRenderAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [renderChildren, setRenderChildren] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderChildren(true);
    }, 2000);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        renderChildren ? "w-full" : "flex items-center justify-center"
      }`}
    >
      {renderChildren ? children : <Loading />}
    </div>
  );
}
