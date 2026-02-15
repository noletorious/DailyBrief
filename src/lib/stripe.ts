export const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || ''

// Placeholder — will return real portal URL when Stripe is configured
export async function getStripePortalUrl(): Promise<string> {
  return '#'
}
