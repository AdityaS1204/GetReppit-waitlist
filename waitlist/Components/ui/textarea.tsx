import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[100px] w-full rounded-xl border border-black/5 bg-neutral-50/50 px-4 py-3 text-base transition-all placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/5 focus-visible:border-black/20 disabled:cursor-not-allowed disabled:opacity-50 font-[family-name:var(--font-instrument-sans)]",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea }
