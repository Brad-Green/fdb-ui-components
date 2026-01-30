import { GripVertical } from "lucide-react"
import {
  Group,
  Panel,
  Separator,
} from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof Group>) => (
  <Group
    data-slot="resizable-panel-group"
    data-orientation={orientation}
    className={cn(
      // Tailwind doesn't know about react-resizable-panels internals, so we
      // expose our own stable orientation signal for styling.
      "group/resizable flex h-full w-full data-[orientation=vertical]:flex-col",
      className
    )}
    orientation={orientation}
    {...props}
  />
)

const ResizablePanel = Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean
}) => (
  <Separator
    data-slot="resizable-handle"
    data-with-handle={withHandle ? "true" : undefined}
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 group-data-[orientation=vertical]/resizable:h-px group-data-[orientation=vertical]/resizable:w-full group-data-[orientation=vertical]/resizable:after:left-0 group-data-[orientation=vertical]/resizable:after:h-1 group-data-[orientation=vertical]/resizable:after:w-full group-data-[orientation=vertical]/resizable:after:-translate-y-1/2 group-data-[orientation=vertical]/resizable:after:translate-x-0 group-data-[orientation=vertical]/resizable:[&>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div
        data-slot="resizable-handle-grip"
        className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"
      >
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
