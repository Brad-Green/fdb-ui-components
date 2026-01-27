import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ChevronRight, Plus } from "lucide-react"
import { FormField } from "@/components/ui/form-field"

export function ComponentGallery() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === "undefined") return false
    return document.documentElement.classList.contains("dark")
  })
  const [selectValue, setSelectValue] = React.useState<string | undefined>()
  const [demoCheckboxChecked, setDemoCheckboxChecked] = React.useState(false)
  const [demoSwitchChecked, setDemoSwitchChecked] = React.useState(false)
  const [demoRadioValue, setDemoRadioValue] = React.useState("one")
  const [demoSliderValue, setDemoSliderValue] = React.useState<number[]>([50])

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

          <div className="flex flex-wrap gap-4 items-center">
            <Button leftIcon={<Plus />}>Left icon</Button>
            <Button rightIcon={<ChevronRight />}>Right icon</Button>
            <Button leftIcon={<Plus />} rightIcon={<ChevronRight />}>
              Both
            </Button>
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

        <div className="space-y-2">
          <div className="text-sm font-medium">Input decoration</div>
          <div className="space-y-3">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Plus className="h-4 w-4" />
              </span>
              <Input decoration="leftIcon" placeholder="Left icon" />
            </div>
            <div className="relative">
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <ChevronRight className="h-4 w-4" />
              </span>
              <Input decoration="rightIcon" placeholder="Right icon" />
            </div>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Plus className="h-4 w-4" />
              </span>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <ChevronRight className="h-4 w-4" />
              </span>
              <Input decoration="both" placeholder="Both icons" />
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-sm">
          <Textarea placeholder="Regular" />
          <Textarea size="large" placeholder="Large" />
          <Textarea size="small" placeholder="Small" />
          <Textarea size="mini" placeholder="Mini" />
          <Textarea roundness="round" placeholder="Round" />
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
          <SelectTrigger size="large" variant="destructive">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one">One</SelectItem>
            <SelectItem value="two">Two</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger decoration="leftIcon">
            <span className="inline-flex items-center gap-2">
              <Plus className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Left icon decoration" />
            </span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="x">X</SelectItem>
            <SelectItem value="y">Y</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <Separator />

      {/* Validation / States */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-xl font-semibold">Validation / State Matrix</h2>
        <p className="text-sm text-muted-foreground">
          These examples are meant for quick manual checks of disabled +{" "}
          <code className="rounded bg-muted px-1 py-0.5">aria-invalid</code>{" "}
          styling.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Select (FormField-driven)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={selectValue} onValueChange={setSelectValue}>
                <FormField label="Country (normal)">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                </FormField>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectValue} onValueChange={setSelectValue}>
                <FormField label="Country (invalid)" error="Required">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                </FormField>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectValue} onValueChange={setSelectValue}>
                <FormField label="Country (disabled)" disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                </FormField>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Checkbox / Switch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="text-sm font-medium">Checkbox</div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="demo-checkbox"
                    checked={demoCheckboxChecked}
                    onCheckedChange={(v) => setDemoCheckboxChecked(v === true)}
                  />
                  <Label htmlFor="demo-checkbox">Interactive (normal)</Label>
                </div>

                <FormField error="Required">
                  <Checkbox />
                </FormField>

                <FormField error="Required" disabled>
                  <Checkbox />
                </FormField>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium">Switch</div>
                <div className="flex items-center gap-3">
                  <Switch
                    id="demo-switch"
                    checked={demoSwitchChecked}
                    onCheckedChange={setDemoSwitchChecked}
                  />
                  <Label htmlFor="demo-switch">Interactive (normal)</Label>
                </div>

                <FormField error="Required">
                  <Switch />
                </FormField>

                <FormField error="Required" disabled>
                  <Switch />
                </FormField>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Button (FormField-driven invalid)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline">Normal</Button>
              <FormField error="Required">
                <Button variant="outline">Invalid</Button>
              </FormField>
              <FormField error="Required" disabled>
                <Button variant="outline">Invalid + Disabled</Button>
              </FormField>
            </div>
            <p className="text-xs text-muted-foreground">
              This verifies <code className="rounded bg-muted px-1 py-0.5">aria-invalid</code>{" "}
              rings for button-like controls use <code className="rounded bg-muted px-1 py-0.5">ring-ring-error</code>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Slider</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <div className="text-sm font-medium">Normal</div>
              <Slider value={demoSliderValue} onValueChange={setDemoSliderValue} />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Invalid (FormField-driven)</div>
              <FormField error="Out of range">
                <Slider defaultValue={[50]} />
              </FormField>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Disabled</div>
              <Slider defaultValue={[50]} disabled />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Calendar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm font-medium">Normal navigation</div>
              <Calendar mode="single" />

              <div className="text-sm font-medium">Navigation disabled</div>
              <Calendar
                mode="single"
                fromMonth={new Date(2026, 0, 1)}
                toMonth={new Date(2026, 0, 1)}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Pagination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" aria-disabled />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Menubar (focus / disabled)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New</MenubarItem>
                    <MenubarItem disabled>Disabled item</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger disabled>Disabled trigger</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Should not open</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <p className="text-xs text-muted-foreground">
                Tab to the triggers to verify focus ring; disabled trigger should
                look/behave disabled.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Navigation Menu (focus / disabled)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4">
                      <NavigationMenuLink className="text-sm">
                        This is a stub content panel.
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger disabled>
                      Disabled trigger
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <p className="text-xs text-muted-foreground">
                Tab to the triggers to verify focus ring; disabled trigger should
                look/behave disabled.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Dropdown Menu (item focus-visible ring)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Item One</DropdownMenuItem>
                <DropdownMenuItem>Item Two</DropdownMenuItem>
                <DropdownMenuItem disabled>Disabled item</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <p className="text-xs text-muted-foreground">
              Open the menu, then use arrow keys / tab to move focus and confirm the
              focused item shows a subtle ring.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Radio Group (item-level ARIA)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Normal</div>
              <RadioGroup
                value={demoRadioValue}
                onValueChange={setDemoRadioValue}
                className="flex gap-4"
              >
                <RadioGroupItem value="one" />
                <RadioGroupItem value="two" />
                <RadioGroupItem value="three" size="large" />
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Invalid (aria-invalid on items)</div>
              <RadioGroup
                value={demoRadioValue}
                onValueChange={setDemoRadioValue}
                className="flex gap-4"
              >
                <RadioGroupItem value="one" aria-invalid />
                <RadioGroupItem value="two" aria-invalid />
                <RadioGroupItem value="three" aria-invalid size="large" />
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Disabled + Invalid</div>
              <RadioGroup defaultValue="one" className="flex gap-4" disabled>
                <RadioGroupItem value="one" aria-invalid />
                <RadioGroupItem value="two" aria-invalid />
                <RadioGroupItem value="three" aria-invalid size="large" />
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
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

      {/* Checkbox */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Checkbox</h2>
        <div className="flex items-center gap-3">
          <Checkbox />
          <Checkbox size="large" />
          <Checkbox roundness="round" />
          <Checkbox disabled />
        </div>
      </section>

      <Separator />

      {/* Radio Group */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Radio Group</h2>
        <div className="flex items-center gap-3">
        <RadioGroup defaultValue="one" className="flex gap-4">
          <RadioGroupItem value="one" />
          <RadioGroupItem value="two" />
          <RadioGroupItem value="three" size="large" />
        </RadioGroup>
        </div>
      </section>

      <Separator />

      {/* Switch */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Switch</h2>
        <div className="flex items-center gap-4">
          <Switch />
          <Switch defaultChecked />
          <Switch size="large" />
          <Switch size="large" defaultChecked />
          <Switch disabled />
        </div>
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

      <Separator />

      {/* Form Field */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Form Field</h2>
        <FormField
          label="Email"
          description="We’ll never share your email."
        >
          <Input placeholder="you@example.com" />
        </FormField>

        <FormField
          label="Email"
          required
          error="Invalid email address"
        >
          <Input />
        </FormField>

        <Select>
          <FormField label="Country">
            <SelectTrigger>
              <SelectValue placeholder="Choose a country" />
            </SelectTrigger>
          </FormField>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="mx">Mexico</SelectItem>
          </SelectContent>
        </Select>

        <FormField label="Disabled" disabled>
          <Input />
        </FormField>
      </section>

    </div>
  )
}
