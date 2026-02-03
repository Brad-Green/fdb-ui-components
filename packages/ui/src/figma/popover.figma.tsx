import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Note: Popover displays rich content in a portal, triggered by a button.
// The content appears near the trigger element.
figma.connect(
  Popover,
  // Note: connect to the Menu component set (also used for popups/popovers).
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=176-27848",
  {
    example: () => (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    ),
  }
)
