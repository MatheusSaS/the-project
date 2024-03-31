import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";
import IconLoader from "./iconLoaderButton";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
const buttonVariants = cva(
  `inline-flex 
  items-center 
  justify-center 
  rounded-md 
  text-sm 
  font-medium 
  ring-offset-background 
  transition-colors 
  focus-visible:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-ring 
  focus-visible:ring-offset-2
  disabled:pointer-events-none 
  disabled:opacity-50
  disabled:cursor-not-allowed
  cursor-pointer 
  border`,
  {
    variants: {
      type: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      type: "default",
      size: "default",
    },
  },
);

const IconContainerVariants = cva("", {
  variants: {
    size: {
      default: "[&_svg]:h-[14px] [&_svg]:w-[14px] mr-1",
      sm: "[&_svg]:h-[18px] [&_svg]:w-[18px]  mr-1",
      lg: "[&_svg]:h-[20px] [&_svg]:w-[20px]  mr-1",
      icon: "[&_svg]:h-[10px] [&_svg]:w-[10px]  mr-1",
      large: "[&_svg]:h-[20px] [&_svg]:w-[20px]  mr-1",
      xlarge: "[&_svg]:h-[24px] [&_svg]:w-[24px]  mr-1",
      xxlarge: "[&_svg]:h-[30px] [&_svg]:w-[30px]  mr-1",
      xxxlarge: "[&_svg]:h-[42px] [&_svg]:w-[42px]  mr-1",
    },
  },
});

export type LoadingVariantProps = VariantProps<typeof loadingVariants>;
const loadingVariants = cva("", {
  variants: {
    loading: {
      default: "",
      true: `animate-spin`,
    },
  },
});

export interface ButtonProps
  // omit `type` as we use it to change type of button
  // replaced with `htmlType`
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    // omit 'disabled' as it is included in HTMLButtonElement
    Omit<ButtonVariantProps, "disabled">,
    LoadingVariantProps {
  asChild?: boolean;
  type?: ButtonVariantProps["type"];
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  icon?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type = "default",
      size = "default",
      asChild = false,
      loading,
      icon,
      iconLeft,
      htmlType = "button",
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const showIcon = loading || icon;
    const _iconLeft: React.ReactNode = icon ?? iconLeft;
    props.disabled = loading ? true : props.disabled;
    
    return (
      <Comp
        className={cn(buttonVariants({ type, size, className }))}
        data-size={size}
        type={htmlType}
        ref={ref}
        {...props}
      >
        {asChild ? (
          React.isValidElement(children) ? (
            React.cloneElement(
              children,
              undefined,
              showIcon &&
                (loading ? (
                  <div className={cn(IconContainerVariants({ size }))}>
                    <IconLoader />
                  </div>
                ) : _iconLeft ? (
                  <div className={cn(IconContainerVariants({ size }))}>
                    {_iconLeft}
                  </div>
                ) : null),
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
              children.props.children && (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                <span className={"truncate a"}>{children.props.children}</span>
              ),
            )
          ) : null
        ) : (
          <>
            {showIcon &&
              (loading ? (
                <div className={cn(IconContainerVariants({ size }))}>
                  <IconLoader />
                </div>
              ) : _iconLeft ? (
                <div className={cn(IconContainerVariants({ size }))}>
                  {_iconLeft}
                </div>
              ) : null)}{" "}
            {children && <span className={"truncate b"}>{children}</span>}{" "}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
