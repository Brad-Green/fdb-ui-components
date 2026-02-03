import figma from "@figma/code-connect/react"

import {
  RichSwitchGroup,
  RichSwitchItem,
} from "@/components/ui/rich-switch-group"

// Note: Rich Switch Group displays switches in card-style containers
// with titles and descriptions. Good for settings toggles.
figma.connect(
  RichSwitchGroup,
  // Note: connect to the Rich Switch Group component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=19-6374",
  {
    example: () => (
      <RichSwitchGroup>
        <RichSwitchItem
          title="Airplane Mode"
          description="Disable all wireless connections"
        />
        <RichSwitchItem
          title="Wi-Fi"
          description="Connect to wireless networks"
          defaultChecked
        />
        <RichSwitchItem
          title="Bluetooth"
          description="Connect to Bluetooth devices"
          defaultChecked
        />
      </RichSwitchGroup>
    ),
  }
)
