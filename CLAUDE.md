# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14.2.17 React application for "Snippet" - a digital agency website. The site showcases services including web development, UX/UI design, and consulting, with a portfolio section and company information.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

The development server runs on http://localhost:3000. After building, a sitemap is automatically generated via the `postbuild` script.

## Architecture Overview

### Directory Structure
- **`/pages`** - Next.js file-based routing with API routes in `/api`
- **`/components`** - Reusable UI components organized by feature (About, Blog, Work, etc.)
- **`/container`** - Higher-level container components that compose multiple components and handle business logic
- **`/data`** - JSON files for static content (blog posts, portfolio items, testimonials)
- **`/public`** - Static assets with organized subdirectories for images, icons, fonts
- **`/styles`** - SCSS source files with modular architecture

### Component Architecture
The project follows a clear separation between presentational components (`/components`) and container components (`/container`). Container components handle data fetching and business logic, while components focus on UI presentation.

### Styling System
- **SCSS with Bootstrap 5.2.0** - Modular SCSS architecture with Bootstrap integration
- **CSS Modules** - Component-scoped styling for specific components
- **Custom Fonts** - Muli, FontAwesome Pro, and Linea icon fonts
- **Responsive Design** - Mobile-first approach with comprehensive breakpoint system

### Image Optimization
The project uses **Cloudinary** integration via `next-cloudinary` for optimized image delivery. Images are configured in `next.config.js` with blur placeholders and responsive loading.

### Content Management
Static content is managed through JSON files in the `/data` directory, making it easy to update portfolio items, testimonials, and other content without touching component code.

### SEO & Performance
- **Sitemap generation** via `next-sitemap` after each build
- **Speed Insights** integration with Vercel
- **Google Analytics & GTM** configured in `_app.js`
- **AOS (Animate On Scroll)** for smooth animations

### Key Dependencies
- **React 18.3.1** with Next.js 14.2.17
- **Swiper** for carousels and sliders
- **React Hook Form** for form handling
- **React Bootstrap** for UI components
- **Sass** for CSS preprocessing

## Development Notes

- Path aliases configured with `@/*` mapping to project root
- React Strict Mode enabled for development
- The project uses both TypeScript types and JSConfig for better development experience
- Mobile menu and responsive navigation are implemented with custom components
- All animations use AOS library which is initialized in `_app.js`