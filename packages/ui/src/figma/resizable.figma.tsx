import figma from "@figma/code-connect/react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

// Note: Resizable is built on react-resizable-panels. The orientation prop
// controls panel layout direction. Emits data-orientation and data-with-handle.
figma.connect(
  ResizablePanelGroup,
  // Note: connect to the top-level node that contains all variants.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=222-27733",
  {
    props: {
      orientation: figma.enum("Orientation", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
    },
    example: ({ orientation }) => (
      <ResizablePanelGroup
        orientation={orientation}
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel Two</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
  }
)
