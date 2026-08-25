import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("system-loader relative w-72 overflow-hidden rounded-sm border border-dracula-cyan/50 bg-dracula-current/80 p-4 shadow-[0_0_24px_rgba(146,215,232,0.18)]", className)}
      {...props}
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-dracula-red" />
        <span className="h-2 w-2 rounded-full bg-dracula-orange" />
        <span className="h-2 w-2 rounded-full bg-dracula-green" />
      </div>

      <div className="space-y-2 font-mono text-[10px] uppercase tracking-widest text-dracula-cyan">
        <div className="flex justify-between">
          <span>System boot</span>
          <span className="text-dracula-green">Online</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-background">
          <span className="system-loader-progress block h-full rounded-full bg-dracula-cyan" />
        </div>
        <div className="flex justify-between text-dracula-secondary">
          <span>Interface</span>
          <span>Initializing</span>
        </div>
      </div>
    </div>
  )
}

export { Spinner }
