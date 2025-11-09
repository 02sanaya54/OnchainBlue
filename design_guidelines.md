# Design Guidelines: Customer Support Landing Page

## Design Approach
This is an **exact replication** of the reference design with a custom blue color scheme. Match the original layout, spacing, typography, and component structure precisely.

## Color Palette
- **Primary Blue**: #092D74 (main backgrounds, accents)
- **Dark Navy**: #051941 (darker backgrounds, depth)
- **White**: #FFFFFF (text, card backgrounds)

Apply these colors to replace the original scheme while maintaining the same visual hierarchy and contrast relationships.

## Layout Structure

### Hero Section
- Full-width dark background (#051941)
- Centered content with max-width container
- Vertical padding: generous (py-16 to py-24)
- Heading: "24/7 Customer Support" - large, bold, white text
- Description paragraph: white text with good contrast, centered
- Phone number button: prominently displayed with phone icon, white background, primary blue text
- Clickable with tel: link

### Services Grid Section
- Background: Primary Blue (#092D74)
- Section heading: "How We Can Help" - white, centered, large
- 2x3 grid layout (6 cards total)
- Responsive: stacks to single column on mobile (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Spacing: gap-6 to gap-8 between cards

### Service Cards
- White background (#FFFFFF)
- Rounded corners (rounded-lg)
- Padding: p-6 to p-8
- Card text: Dark Navy (#051941) for maximum contrast
- Cards list:
  1. Account setup and verification
  2. Buying, selling, or transferring crypto
  3. Wallet security and recovery
  4. Transaction disputes or errors
  5. Two-factor authentication support
  6. General crypto education

### Footer
- Dark Navy background (#051941)
- White text
- Centered copyright text
- Modest padding

## Typography
- Sans-serif font stack (system fonts or simple web font)
- Hero heading: 2xl to 4xl, font-bold
- Section heading: xl to 2xl, font-semibold
- Body text: base to lg, regular weight
- Card text: base, medium weight

## Spacing System
Use Tailwind spacing: 4, 6, 8, 12, 16, 24 for consistent rhythm

## Icons
- Phone icon for the call button (Heroicons or Font Awesome)
- Simple, outlined style

## No Images
This landing page uses solid color backgrounds only - no hero images or decorative graphics.