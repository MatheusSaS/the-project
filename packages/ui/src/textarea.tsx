import * as React from "react";

import { cn } from "./utils/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `flex 
          h-20 
          w-full 
          rounded-md 
          border 
          border-control 
          bg-foreground/[.026]
          px-3 
          py-2 
          text-sm 
          ring-offset-background 
          file:border-0 
          file:bg-transparent 
          file:text-sm 
          file:font-medium 
          placeholder:text-muted-foreground 
          focus-visible:outline-none 
          focus-visible:ring-2 
          focus-visible:ring-ring 
          focus-visible:ring-offset-2 
          disabled:cursor-not-allowed 
          disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
