import figma from "@figma/code-connect/react"

import {
  RichCheckboxGroup,
  RichCheckboxItem,
} from "@/components/ui/rich-checkbox-group"

// Note: Rich Checkbox Group displays checkboxes in card-style containers
// with titles and descriptions. Good for feature toggles or preference settings.
figma.connect(
  RichCheckboxGroup,
  // Note: connect to the Rich Checkbox Group component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=19-6351",
  {
    example: () => (
      <RichCheckboxGroup>
        <RichCheckboxItem
          value="notifications"
          title="Push Notifications"
          description="Receive push notifications on your device"
        />
        <RichCheckboxItem
          value="emails"
          title="Email Updates"
          description="Get weekly digest emails"
        />
        <RichCheckboxItem
          value="marketing"
          title="Marketing Communications"
          description="Receive news about products and features"
        />
      </RichCheckboxGroup>
    ),
  }
)
