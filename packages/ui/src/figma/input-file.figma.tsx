import figma from "@figma/code-connect/react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Note: Input File is simply an Input with type="file".
// Style the file input using the file: pseudo-class variants.
figma.connect(
  Input,
  // Note: connect to the Input File component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=66-5981",
  {
    example: () => (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
    ),
  }
)
