import figma from "@figma/code-connect/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

// Note: HoverCard shows additional content on hover.
// Use for preview cards, user profiles, or quick info displays.
figma.connect(
  HoverCard,
  // Note: connect to the Tooltip component set (similar hover behavior).
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=133-14788",
  {
    example: () => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <span className="cursor-pointer text-sm underline">@shadcn</span>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@shadcn</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
  }
)
