import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ComponentGallery() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === "undefined") return false
    return document.documentElement.classList.contains("dark")
  })

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground p-10 space-y-16">
      <div className="flex items-center justify-between gap-6">
        <h1 className="text-2xl font-semibold">Component Gallery</h1>
        <div className="flex items-center gap-3">
          <Label htmlFor="dark-mode" className="text-sm">
            Dark mode
          </Label>
          <Switch
            id="dark-mode"
            checked={isDark}
            onCheckedChange={setIsDark}
          />
        </div>
      </div>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>        
        <div className="space-y-4">

          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghostMuted">Ghost Muted</Button>
            <Button variant="destructive">Destructive</Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button size="mini">Mini</Button>
            <Button size="small">Small</Button>
            <Button size="regular">Regular</Button>
            <Button size="large">Large</Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button roundness="default">Default</Button>
            <Button roundness="round">Round</Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Inputs */}
      <section className="space-y-4 max-w-sm">
        <h2 className="text-xl font-semibold">Inputs</h2>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="name@company.com" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms</Label>
        </div>

        <div className="space-y-4 max-w-sm">
          <Input placeholder="Regular size" />
          <Input size="large" placeholder="Large size" />
          <Input size="small" placeholder="Small size" />
          <Input size="mini" placeholder="Mini size" />
          <Input roundness="round" placeholder="Round input" />
        </div>
      </section>

      <Separator />

      {/* Select */}
      <section className="space-y-4 max-w-sm">
        <h2 className="text-xl font-semibold">Select</h2>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger size="large" type="destructive">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one">One</SelectItem>
            <SelectItem value="two">Two</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <Separator />

      {/* Card */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Card</h2>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            This surface should match Figma card background + border tokens.
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Dialog */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
            </DialogHeader>
            Modal surface + overlay should match tokens.
          </DialogContent>
        </Dialog>
      </section>

      <Separator />

      {/* Dropdown */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dropdown</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item One</DropdownMenuItem>
            <DropdownMenuItem>Item Two</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <Separator />

      {/* Tooltip */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tooltip</h2>
        <TooltipProvider>
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent side="top">Tooltip text</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </section>

      <Separator />

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tabs</h2>
        <Tabs defaultValue="one" className="w-[300px]">
          <TabsList>
            <TabsTrigger value="one">One</TabsTrigger>
            <TabsTrigger value="two">Two</TabsTrigger>
          </TabsList>
          <TabsContent value="one">Tab one content</TabsContent>
          <TabsContent value="two">Tab two content</TabsContent>
        </Tabs>
      </section>

      <Separator />

      {/* Alert */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Alert</h2>
        <Alert>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>
            This uses muted foreground and surface tokens.
          </AlertDescription>
        </Alert>
      </section>

    </div>
  )
}
