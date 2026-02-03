import figma from "@figma/code-connect/react"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// Note: ScrollArea is built on Radix ScrollArea. Scrollbars appear based on
// overflow/content. The orientation prop on ScrollBar controls scrollbar direction.
figma.connect(
  ScrollArea,
  // Note: connect to the Scrollbar component node.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=164-18669",
  {
    props: {},
    example: () => (
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Content</h4>
          <div className="text-sm">
            Scrollable content goes here. Add enough content to trigger the
            scrollbar visibility.
          </div>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    ),
  }
)
