# Snippet Digital Agency Website

A modern, responsive website for Snippet - a digital agency specializing in web development, UX/UI design, and consulting services. Built with Next.js and React, featuring a portfolio showcase, service pages, and company information.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React 18, Bootstrap 5
- **Responsive Design**: Mobile-first approach with smooth animations
- **Portfolio Showcase**: Dynamic work gallery with filtering capabilities
- **Service Pages**: Dedicated pages for Development, UX/UI Design, and Consulting
- **Performance Optimized**: Image optimization with Cloudinary integration
- **SEO Ready**: Automatic sitemap generation and meta tag optimization
- **Analytics Integration**: Google Analytics and Vercel Speed Insights

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.17
- **Frontend**: React 18.3.1, Bootstrap 5.2.0
- **Styling**: SCSS, CSS Modules
- **Animations**: AOS (Animate On Scroll), Swiper
- **Images**: Cloudinary integration
- **Forms**: React Hook Form
- **Icons**: FontAwesome Pro, Linea Icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website_nextversion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
├── components/          # Reusable UI components
│   ├── About/          # About section components
│   ├── Blog/           # Blog-related components
│   ├── Work/           # Portfolio components
│   └── ...
├── container/          # Container components with business logic
├── data/              # JSON data files
├── pages/             # Next.js pages and API routes
│   ├── services/      # Service-specific pages
│   └── api/           # API endpoints
├── public/            # Static assets
│   └── images/        # Organized image directories
├── styles/            # SCSS stylesheets
│   ├── scss/          # Source SCSS files
│   └── css/           # Compiled CSS
└── utils/             # Utility functions
```

## 🎨 Key Components

- **Portfolio System**: Dynamic work showcase with category filtering
- **Service Pages**: Detailed pages for each service offering
- **Contact Forms**: Integrated contact and project inquiry forms
- **Responsive Navigation**: Mobile-friendly navigation with smooth transitions
- **Animation System**: Scroll-triggered animations throughout the site

## 🔧 Configuration

### Environment Setup
- Cloudinary domain configured in `next.config.js`
- Sitemap generation via `next-sitemap.config.js`
- Path aliases configured with `@/*` mapping

### Content Management
- Static content managed through JSON files in `/data`
- Easy to update portfolio items, testimonials, and service details
- Blog posts and company information stored as structured data

## 🚀 Deployment

The application is optimized for deployment on Vercel:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended)
   - Connect your repository to Vercel
   - Automatic deployments on push to main branch
   - Includes automatic sitemap generation

## 📱 Pages

- **Home** (`/`) - Agency introduction and key services
- **About** (`/about-us`) - Company information and team
- **Services** (`/services`) - Service overview with detailed sub-pages:
  - Development (`/services/development`)
  - UX/UI Design (`/services/ux-ui-design`)
  - Consulting (`/services/consulting`)
- **Work** (`/work`) - Portfolio showcase
- **Contact** (`/contact`) - Contact information and inquiry form

## 🎯 Performance Features

- **Image Optimization**: Next.js Image component with Cloudinary
- **Code Splitting**: Automatic route-based code splitting
- **SEO Optimization**: Meta tags, structured data, and sitemap
- **Lazy Loading**: Components and images load on demand
- **Fast Refresh**: Hot reloading in development

## 📧 Contact & Support

For questions about this project or Snippet's services, visit the contact page or reach out through the website's contact form.

---

Built with ❤️ by Snippet Digital Agency
