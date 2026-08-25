import { cva } from "class-variance-authority"

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",

        completed: "bg-dracula-bg/50 text-dracula-green border border-dracula-green/50 transition-all duration-300 hover:bg-dracula-green hover:text-background hover:border-dracula-green cursor-default",

        "in-progress": "bg-dracula-bg/50 text-dracula-orange border border-dracula-orange/50 transition-all duration-300 hover:bg-dracula-orange hover:text-background hover:border-dracula-orange cursor-default",

        maintenance: "bg-dracula-bg/50 text-dracula-red border border-dracula-red/50 transition-all duration-300 hover:bg-dracula-red hover:text-background hover:border-dracula-red cursor-default",

        draculaProps: "bg-dracula-bg text-dracula-orange border border-dracula-orange transition-all duration-300 hover:bg-dracula-orange hover:text-background hover:border-dracula-orange cursor-default",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
