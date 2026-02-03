import figma from "@figma/code-connect/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AvatarStack } from "@/components/ui/avatar-stack"

// Note: AvatarStack displays overlapping avatars with an optional +N indicator.
// Use the max prop to limit visible avatars.
figma.connect(
  AvatarStack,
  // Note: connect to the Avatar Stack component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=22-9509",
  {
    example: () => (
      <AvatarStack max={3}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/radix-ui.png" alt="@radix" />
          <AvatarFallback>RX</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>+2</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>+3</AvatarFallback>
        </Avatar>
      </AvatarStack>
    ),
  }
)
