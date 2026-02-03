import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"

// Note: Toggle Button in Figma represents a button that can be pressed/toggled.
// The pressed state is expressed via aria-pressed. For full toggle functionality,
// consider using Radix Toggle primitive. This mapping shows the basic pattern.
figma.connect(
  Button,
  // Note: connect to the Toggle Button component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=816-112827",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Outline: "outline",
        Ghost: "ghost",
        GhostMuted: "ghostMuted",
        "Ghost Muted": "ghostMuted",
        Destructive: "destructive",
      }),
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
      pressed: figma.enum("State", {
        Pressed: true,
        Default: false,
      }),
      disabled: figma.enum("State", { Disabled: true }),
    },
    example: ({ variant, size, roundness, pressed, disabled }) => (
      <Button
        variant={variant}
        size={size}
        roundness={roundness}
        disabled={disabled}
        aria-pressed={pressed}
      >
        Toggle
      </Button>
    ),
  }
)
