<<<<<<< HEAD
# AI Scam Awareness Website

A modern, educational website focused on AI-powered fraud and scams. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎓 **Educational Content**: Comprehensive information about 5 types of AI-powered scams
- 🔍 **AI Detection Tool**: Interactive tool to analyze suspicious content
- 🌍 **Multilingual Support**: Support for multiple languages with RTL support
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Scandinavian Design**: Clean, minimalist design with smooth animations
- ♿ **Accessible**: Built with accessibility in mind (ARIA support)
- ⚡ **Fast Performance**: Optimized for speed and SEO

## Scam Types Covered

1. **Deepfake** - AI-generated fake videos & images
2. **Voice Spoofing** - AI voice cloning & impersonation
3. **AI-Powered Fake Chats** - Sophisticated bot conversations
4. **AI-Personalized Phishing** - Targeted email & message attacks
5. **AI-Driven Social Engineering** - Psychological manipulation at scale

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **i18n**: Custom implementation with locale files

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd WEBsite
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
WEBsite/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── scam-types/        # Scam types page
│   ├── detection/         # Detection tool page
│   ├── resources/         # Resources page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navigation.tsx    # Navigation bar
│   ├── Footer.tsx         # Footer component
│   └── ScamTypeCard.tsx   # Scam type card component
├── contexts/              # React contexts
│   └── LanguageContext.tsx # Language/i18n context
├── locales/               # Translation files
│   └── translations.ts    # All translations
└── public/                # Static assets
```

## Adding New Languages

1. Open `locales/translations.ts`
2. Add a new language object with the same structure as existing languages
3. Set `rtl: true` for right-to-left languages (e.g., Arabic, Hebrew)
4. Add the language to the languages array in `components/Navigation.tsx`

## AI Detection Tool Integration

The detection tool currently uses mock analysis. To integrate with OpenAI API:

1. Create a `.env.local` file:
```env
OPENAI_API_KEY=your_api_key_here
```

2. Update `app/detection/page.tsx` to use the OpenAI API:
```typescript
const response = await fetch('/api/analyze', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ content: input })
})
```

3. Create `app/api/analyze/route.ts` for the API endpoint.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting platform**

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
```typescript
scandi: {
  light: '#f8f9fa',
  gray: '#e9ecef',
  dark: '#212529',
  blue: '#4a90e2',
  accent: '#2c3e50',
}
```

### Adding New Scam Types

1. Add content to `locales/translations.ts` under `scamTypes`
2. Add the new type to the `scamTypes` array in `app/scam-types/page.tsx`
3. Add an appropriate icon from Lucide React

## SEO Optimization

- Meta tags configured in `app/layout.tsx`
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (when added)
- Open Graph tags for social sharing

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML
- Proper color contrast
- Screen reader friendly

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For questions or issues, please open an issue on GitHub or contact us through the contact page.

=======
# AI Scam Awareness Website

A modern, educational website focused on AI-powered fraud and scams. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎓 **Educational Content**: Comprehensive information about 5 types of AI-powered scams
- 🔍 **AI Detection Tool**: Interactive tool to analyze suspicious content
- 🌍 **Multilingual Support**: Support for multiple languages with RTL support
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Scandinavian Design**: Clean, minimalist design with smooth animations
- ♿ **Accessible**: Built with accessibility in mind (ARIA support)
- ⚡ **Fast Performance**: Optimized for speed and SEO

## Scam Types Covered

1. **Deepfake** - AI-generated fake videos & images
2. **Voice Spoofing** - AI voice cloning & impersonation
3. **AI-Powered Fake Chats** - Sophisticated bot conversations
4. **AI-Personalized Phishing** - Targeted email & message attacks
5. **AI-Driven Social Engineering** - Psychological manipulation at scale

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **i18n**: Custom implementation with locale files

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd WEBsite
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
WEBsite/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── scam-types/        # Scam types page
│   ├── detection/         # Detection tool page
│   ├── resources/         # Resources page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navigation.tsx    # Navigation bar
│   ├── Footer.tsx         # Footer component
│   └── ScamTypeCard.tsx   # Scam type card component
├── contexts/              # React contexts
│   └── LanguageContext.tsx # Language/i18n context
├── locales/               # Translation files
│   └── translations.ts    # All translations
└── public/                # Static assets
```

## Adding New Languages

1. Open `locales/translations.ts`
2. Add a new language object with the same structure as existing languages
3. Set `rtl: true` for right-to-left languages (e.g., Arabic, Hebrew)
4. Add the language to the languages array in `components/Navigation.tsx`

## AI Detection Tool Integration

The detection tool currently uses mock analysis. To integrate with OpenAI API:

1. Create a `.env.local` file:
```env
OPENAI_API_KEY=your_api_key_here
```

2. Update `app/detection/page.tsx` to use the OpenAI API:
```typescript
const response = await fetch('/api/analyze', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ content: input })
})
```

3. Create `app/api/analyze/route.ts` for the API endpoint.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting platform**

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
```typescript
scandi: {
  light: '#f8f9fa',
  gray: '#e9ecef',
  dark: '#212529',
  blue: '#4a90e2',
  accent: '#2c3e50',
}
```

### Adding New Scam Types

1. Add content to `locales/translations.ts` under `scamTypes`
2. Add the new type to the `scamTypes` array in `app/scam-types/page.tsx`
3. Add an appropriate icon from Lucide React

## SEO Optimization

- Meta tags configured in `app/layout.tsx`
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (when added)
- Open Graph tags for social sharing

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML
- Proper color contrast
- Screen reader friendly

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For questions or issues, please open an issue on GitHub or contact us through the contact page.

>>>>>>> 22cf4a93de2cbf6409b3118826ff002108b9e1a2
