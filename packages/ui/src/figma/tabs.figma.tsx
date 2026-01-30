import figma from "@figma/code-connect/react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

figma.connect(
  Tabs,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=9-639",
  {
    props: {},
    example: () => (
      <Tabs defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">Label</TabsTrigger>
          <TabsTrigger value="two">Label</TabsTrigger>
          <TabsTrigger value="three">Label</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Tab one</TabsContent>
        <TabsContent value="two">Tab two</TabsContent>
        <TabsContent value="three">Tab three</TabsContent>
      </Tabs>
    ),
  }
)

