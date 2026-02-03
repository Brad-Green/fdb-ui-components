import figma from "@figma/code-connect/react"

import { Skeleton } from "@/components/ui/skeleton"

// Note: Skeleton is used to show a placeholder while content is loading.
// Use for loading states to improve perceived performance.
figma.connect(
  Skeleton,
  // Note: connect to the Card component set (skeleton often replaces card content).
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=179-29234",
  {
    example: () => (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    ),
  }
)
