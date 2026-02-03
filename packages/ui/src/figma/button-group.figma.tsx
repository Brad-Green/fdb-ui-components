import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

// Note: ButtonGroup is a container that groups related buttons together.
// Use ToggleGroup when buttons toggle a state; use ButtonGroup when
// buttons perform actions.
figma.connect(
  ButtonGroup,
  // Note: connect to the Button Group component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=784-82792",
  {
    example: () => (
      <ButtonGroup>
        <Button variant="outline">Action 1</Button>
        <Button variant="outline">Action 2</Button>
        <Button variant="outline">Action 3</Button>
      </ButtonGroup>
    ),
  }
)
