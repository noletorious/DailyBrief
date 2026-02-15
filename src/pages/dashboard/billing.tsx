import { CheckCircle, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'

const FREE_FEATURES = [
  'Daily brief (limited)',
  '3 build ideas per day',
  '2 interview questions per day',
  'Quote of the day',
  'Basic scroll feed',
]

const PRO_FEATURES = [
  'Unlimited brief items',
  'Unlimited build ideas',
  'Unlimited interview prep',
  'Portfolio tracker',
  'Full scroll feed with all topics',
  'Interest learning & personalization',
  'Resume-based question targeting',
]

export default function BillingPage() {
  return (
    <TooltipProvider>
      <div className="space-y-8 max-w-2xl">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Billing</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage your subscription.</p>
        </div>

        {/* Current plan */}
        <Card className="border-border/60">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Current plan</CardTitle>
                <CardDescription className="mt-1">Free tier</CardDescription>
              </div>
              <Badge variant="secondary">Free</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {FREE_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Pro plan */}
        <Card
          className="border-primary/30 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, oklch(0.17 0.02 255) 0%, oklch(0.19 0.04 55 / 0.15) 100%)',
          }}
        >
          <div className="absolute top-3 right-3">
            <Badge variant="default">Pro</Badge>
          </div>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>
              <span className="font-heading text-2xl font-bold text-foreground">$9</span>
              <span className="text-muted-foreground"> / month</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              {PRO_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-block">
                  <Button disabled className="gap-2 opacity-60 cursor-not-allowed">
                    <Lock className="h-3.5 w-3.5" />
                    Upgrade to Pro — Coming soon
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Stripe integration coming in the next release</p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  )
}
