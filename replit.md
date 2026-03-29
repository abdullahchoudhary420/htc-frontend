# Home Town Ice Cream Catering Web Application

## Overview

This is a full-stack web application for Home Town Ice Cream Catering, an ice cream catering service company specializing in premium frozen treats for events. The application is built using a modern React frontend with an Express.js backend, featuring a PostgreSQL database managed through Drizzle ORM. The frontend utilizes shadcn/ui components built on top of Radix UI primitives for a polished user interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Form Handling**: React Hook Form with Zod for validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple

### Development Setup
- **Development Server**: Hot module replacement with Vite integration
- **Type Checking**: Strict TypeScript configuration with path mapping
- **Code Quality**: Shared types between client and server in `/shared` directory

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user authentication with username/password
- **Type Safety**: Drizzle-generated TypeScript types and Zod schemas
- **Validation**: Insert schemas for data validation

### Frontend Pages
- **Home**: Hero section with ice cream catering introduction and service overview
- **Services**: Ice cream catering offerings (birthday parties, corporate events, weddings)
- **About**: Company story, values, and team statistics focused on ice cream expertise
- **Contact**: Contact form with location and business information
- **404**: Custom not found page

### UI Components
- **Navigation**: Responsive navigation with mobile menu support
- **Footer**: Company information and social media links
- **Form Components**: Built using React Hook Form with shadcn/ui components
- **Toast Notifications**: User feedback for form submissions

### Storage Layer
- **Interface**: IStorage interface for CRUD operations
- **Implementation**: MemStorage class for in-memory data (development)
- **Database Ready**: Prepared for PostgreSQL integration with Drizzle

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle API requests and interact with storage
3. **Database Operations**: Storage interface abstracts database operations
4. **Response Handling**: Type-safe responses with error handling
5. **State Updates**: React Query manages cache invalidation and updates

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **UI Library**: Radix UI primitives for accessible components
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **CSS**: Tailwind CSS with PostCSS processing
- **Development**: tsx for TypeScript execution in development
- **Bundling**: esbuild for server-side bundling

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI components ensure WCAG compliance
- **Type Safety**: End-to-end TypeScript with shared schemas
- **Performance**: Optimized builds with code splitting

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations stored in `./migrations`

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Production**: NODE_ENV=production for optimized serving
- **Development**: Integrated Vite dev server with HMR

### Hosting Considerations
- **Static Assets**: Client build output served from `dist/public`
- **API Routes**: Express server handles `/api/*` routes
- **Database**: PostgreSQL connection via environment variable
- **Sessions**: Server-side session storage in PostgreSQL

The application is structured for easy deployment on platforms like Railway, Heroku, or similar services that support Node.js applications with PostgreSQL databases.

## Recent Changes

### January 23, 2025 - Database Removal and Simplification
- Removed PostgreSQL database dependency for easier local development setup
- Replaced database storage with in-memory storage for contact form submissions
- Updated contact form to include event date and guest count fields
- Simplified API endpoints to use `/api/contact` instead of `/api/inquiries`
- Removed database-related files (db.ts, drizzle configuration)
- Updated contact form validation to match new simplified data structure
- Added interactive Google Maps section to contact page

### January 22, 2025 - Ice Cream Catering Focus
- Updated branding from "Home Town Catering" to "Home Town Ice Cream Catering"
- Modified all content to focus specifically on ice cream catering services
- Updated hero images to showcase ice cream and frozen treats
- Revised service offerings to highlight birthday parties, corporate events, and wedding celebrations
- Changed menu sections from traditional catering to ice cream flavors and specialty treats
- Updated company story and values to reflect ice cream expertise and joy-focused mission
- Modified contact information with ice cream-specific email address