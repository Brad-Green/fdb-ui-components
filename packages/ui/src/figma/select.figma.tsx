import figma from "@figma/code-connect/react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SquareDashed } from "lucide-react"

figma.connect(
  Select,
  // Note: connect to the top-level node that contains all variants.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=16-1732",
  {
    props: {
      // Trigger axes
      size: figma.enum("Size", {
        Mini: "mini",
        Small: "small",
        Regular: "regular",
        Large: "large",
      }),

      lines: figma.enum("Lines", {
        "1 Line": "one",
        "2 Lines": "two",
      }),

      prepend: figma.enum("Show Prepend", {
        True: "Prepend:",
        False: undefined,
        true: "Prepend:",
        false: undefined,
      }),

      leftIcon: figma.enum("Show Decoration", {
        True: <SquareDashed className="size-4" />,
        False: undefined,
        true: <SquareDashed className="size-4" />,
        false: undefined,
      }),

      disabled: figma.enum("State", { Disabled: true }),
      ariaInvalid: figma.enum("State", { Error: true }),

      // The Figma component expresses "Placeholder" via its `State` axis.
      placeholder: figma.enum("State", { Placeholder: "Select an item" }),
    },
    example: ({ size, lines, leftIcon, prepend, disabled, ariaInvalid, placeholder }) => (
      <Select>
        <SelectTrigger
          size={size}
          lines={lines}
          leftIcon={leftIcon}
          prepend={prepend}
          disabled={disabled}
          aria-invalid={ariaInvalid}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">One</SelectItem>
          <SelectItem value="two">Two</SelectItem>
        </SelectContent>
      </Select>
    ),
  }
)

