"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Copy, Mail } from "lucide-react"

interface ShareDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ShareDialog({ open, onOpenChange }: ShareDialogProps) {
  const [copied, setCopied] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [email, setEmail] = useState("")

  // Generate a fake survey invitation URL
  const shareUrl = "https://team-survey.example.com/survey/invite/abc123"

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSendEmail = (e) => {
    e.preventDefault()
    // In a real app, this would send the email
    setEmailSent(true)
    setTimeout(() => {
      setEmailSent(false)
      setEmail("")
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Invite Team Members</DialogTitle>
          <DialogDescription>Share this survey with your team members to gather their feedback</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="link" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="link">Survey Link</TabsTrigger>
            <TabsTrigger value="email">Email Invite</TabsTrigger>
          </TabsList>

          <TabsContent value="link" className="mt-4">
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input id="link" readOnly value={shareUrl} className="h-10" />
              </div>
              <Button
                type="button"
                size="icon"
                onClick={handleCopy}
                variant={copied ? "default" : "outline"}
                className="transition-all duration-200"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy</span>
              </Button>
            </div>

            {copied && (
              <p className="text-sm text-center text-primary mt-2">Survey invitation link copied to clipboard!</p>
            )}
          </TabsContent>

          <TabsContent value="email" className="mt-4">
            <form onSubmit={handleSendEmail}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Team member's email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="teammate@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2" disabled={emailSent}>
                  {emailSent ? (
                    <>
                      <Check className="h-4 w-4" />
                      Invitation Sent!
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4" />
                      Send Invitation
                    </>
                  )}
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>

        <DialogFooter className="sm:justify-start">
          <div className="text-xs text-muted-foreground">Anyone with this link can take the survey</div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

