# Customer Support Landing Page

## Overview

This is a customer support landing page for a crypto service called "Onchain". The application is a single-page website that displays 24/7 customer support information with a prominent phone number and a grid of service offerings. It's built as a modern, responsive web application using React and Express with a focus on design consistency and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state
- **UI Framework**: Radix UI primitives with shadcn/ui component system
- **Styling**: Tailwind CSS with custom design tokens
- **Build Tool**: Vite for fast development and optimized production builds

**Design System**:
- Custom color palette centered around blue (#092D74 primary, #051941 dark navy, #FFFFFF white)
- Component library from shadcn/ui in "new-york" style with customized theming
- CSS variables for consistent color management
- Responsive design with mobile-first approach

**Key Design Decisions**:
- The application follows exact design specifications from `design_guidelines.md`
- Uses a custom blue color scheme instead of the default shadcn theme
- All UI components are type-safe and accessible through Radix UI primitives
- Implements a card-based service grid layout (2x3 grid, responsive to single column on mobile)

### Backend Architecture

**Server Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Development**: tsx for TypeScript execution without compilation
- **Production Build**: esbuild for server-side bundling

**Storage Layer**:
- In-memory storage implementation (`MemStorage`) as default
- Interface-based design (`IStorage`) allowing for database swapping
- Currently includes user management methods (getUser, getUserByUsername, createUser)
- Prepared for Drizzle ORM integration with PostgreSQL (schema defined but not actively used)

**API Design**:
- RESTful API structure with `/api` prefix
- Request logging middleware with duration tracking
- JSON body parsing with raw body preservation for webhook support
- Credential-based session support ready for implementation

### Development Environment

**Vite Integration**:
- Development server with HMR (Hot Module Replacement)
- Middleware mode for Express integration
- Replit-specific plugins for error overlay and development tooling
- Custom path aliases (@, @shared, @assets) for clean imports

**Type Safety**:
- Shared schema definitions between client and server
- Zod validation integration with Drizzle schemas
- Strict TypeScript configuration with ESNext modules

## External Dependencies

### UI and Styling
- **shadcn/ui**: Complete component library built on Radix UI
- **Radix UI**: Headless, accessible component primitives (20+ packages including dialog, dropdown, toast, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe variant API for component styling
- **Lucide React**: Icon library for UI elements

### Data and Forms
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation and type inference
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Database (Prepared but not actively used)
- **Drizzle ORM**: Type-safe PostgreSQL ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-zod**: Zod schema generation from Drizzle schemas
- Configuration points to PostgreSQL via DATABASE_URL environment variable

### Routing and Navigation
- **Wouter**: Minimalist client-side routing (chosen over React Router for simplicity)
- **React**: v18+ with modern hooks and concurrent features

### Development Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Session Management (Infrastructure Ready)
- **connect-pg-simple**: PostgreSQL session store for Express
- Session storage prepared but not actively implemented

### Additional Utilities
- **date-fns**: Modern date utility library
- **clsx** and **tailwind-merge**: Class name utilities
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel component
- **nanoid**: Unique ID generation