import { forwardRef, ElementType, ReactElement, Ref } from 'react';
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/utils";
import { PolymorphicComponentPropsWithRef } from '../utils/polmofphicTypes';


const textStyles = cva("w-full", {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light"
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl"
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    italic: {
      true: "italic"
    },
    underline: {
      true: "underline underline-offset-2"
    }
  },
  defaultVariants: {
    size: "base",
    align: "left"
  }
});

// C -> estandar indica que es un componente
type TextProps<C extends ElementType> = PolymorphicComponentPropsWithRef<C, VariantProps<typeof textStyles>>

type TextComponent = <C extends ElementType = 'p'>(prop: TextProps<C>) => ReactElement | null;

export const Text: TextComponent = forwardRef(
    <C extends ElementType = "p">(
        { as, children, emphasis, size, weight, align, italic, underline, className, ...props }: TextProps<C>,
        //ref?: Ref<PolymorphicRef<C>>
        //ref?: Ref<C>
        ref: Ref<HTMLParagraphElement>
    ) => {
        const Component = as || "p";

        return (
            <Component 
                className={
                    cn(textStyles({ emphasis, size, weight, align, italic, underline }), className)} 
                {...props} 
                ref={ref}
            >
                {children}
            </Component>
        );
    }   
) as TextComponent;


    