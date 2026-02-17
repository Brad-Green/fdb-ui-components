import figma from "@figma/code-connect/react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Note: Input File is simply an Input with type="file".
// Variant axes: Size, Roundness, File Chosen?, State
figma.connect(
  Input,
  // Note: connect to the Input File component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=66-5981",
  {
    props: {
      size: figma.enum("Size", {
        Mini: "mini",
        Small: "small",
        Regular: "regular",
        Large: "large",
      }),
      roundness: figma.enum("Roundness", {
        Default: "default",
        Round: "round",
      }),
    },
    example: ({ size, roundness }) => (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="file-upload">File</Label>
        <Input id="file-upload" type="file" size={size} roundness={roundness} />
      </div>
    ),
  }
)
