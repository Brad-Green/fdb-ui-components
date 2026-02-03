import figma from "@figma/code-connect/react"

import {
  RichRadioGroup,
  RichRadioItem,
} from "@/components/ui/rich-radio-group"

// Note: Rich Radio Group displays radio buttons in card-style containers
// with titles and descriptions. Good for plan selection or exclusive choices.
figma.connect(
  RichRadioGroup,
  // Note: connect to the Rich Radio Group component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=19-5987",
  {
    example: () => (
      <RichRadioGroup defaultValue="standard">
        <RichRadioItem
          value="free"
          title="Free"
          description="Basic features for personal use"
        />
        <RichRadioItem
          value="standard"
          title="Standard"
          description="Advanced features for small teams"
        />
        <RichRadioItem
          value="enterprise"
          title="Enterprise"
          description="Custom solutions for large organizations"
        />
      </RichRadioGroup>
    ),
  }
)
