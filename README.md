# swytchcode-google-analytics (statsy.in)

A modern Google Analytics dashboard built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Powered by [SwytchCode CLI](https://cli.swytchcode.com).

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- 🔐 **Secure Authentication** — Google sign-in via Firebase
- 📊 **Real-Time Dashboard** — Visualize GA metrics with interactive charts
- 📬 **Smart Email Alerts** — Daily, weekly, or monthly analytics digests
- ⚙️ **Customizable Settings** — Manage GA properties and alert preferences

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Auth | Firebase Authentication |
| Charts | Recharts |
| Animations | Framer Motion |
| Database | MySQL |
| Icons | Lucide React |

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Firebase project with Google Auth enabled
- A Google Analytics property

### Installation

```bash
# Clone the repository
git clone https://github.com/swytchcodehq/swytchcode-google-analytics.git
cd swytchcode-google-analytics

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in your values in .env.local

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your credentials. See the file for all required variables.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & API routes
│   ├── api/              # REST API endpoints
│   ├── dashboard/        # Analytics dashboard page
│   ├── login/            # Authentication page
│   └── settings/         # User settings page
├── components/           # Reusable UI components
│   ├── ui/               # Base components (Button, Input, Modal, etc.)
│   ├── layout/           # Navbar, Sidebar
│   ├── dashboard/        # Dashboard-specific components
│   └── settings/         # Settings-specific components
├── context/              # React context providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries (Firebase, email, etc.)
├── constants/            # App-wide constants
└── types/                # TypeScript type definitions
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
