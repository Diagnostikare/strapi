# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands 

- `yarn dev` or `yarn develop` - Start Strapi in development mode
- `yarn start` - Start Strapi in production mode 
- `yarn build` - Build the Strapi application
- `yarn console` - Open Strapi console
- `yarn deploy` - Deploy the application
- `yarn upgrade` - Upgrade Strapi to latest version
- `yarn upgrade:dry` - Dry run upgrade to latest version

## Architecture Overview

This is a Strapi v5 headless CMS application designed for the Diagnostikare project. The application uses PostgreSQL as its database and is configured for deployment on Railway.

### Content Types Structure

The application defines several content types:
- **Blog** (`src/api/blog/`) - Blog posts with author, title, description, images, cover, speciality, and references
- **Site** (`src/api/site/`) - Site configuration and metadata
- **Theme** (`src/api/theme/`) - Theme configuration
- **Webpage** (`src/api/webpage/`) - Individual webpage content
- **Principal Navbar** (`src/api/principal-navbar/`) - Main navigation configuration

### Components

Reusable components are defined in `src/components/`:
- **BOE components** (`boe/`) - Login data, navbar, and table data components
- **Navbar components** (`navbar/`) - Navigation item components  
- **Webpage components** (`webpage/`) - Header, options, and subnav components

### Key Features

- **Custom UUID Plugin**: Uses `strapi-advanced-uuid` for generating unique identifiers
- **GraphQL Support**: Includes GraphQL plugin for API queries
- **File Uploads**: Configured with local file upload provider
- **Import/Export**: Includes strapi-import-export plugin
- **ChartBrew Integration**: Analytics integration via @chartbrew/plugin-strapi

### Database Configuration

- Uses PostgreSQL with connection string from `DATABASE_URL` environment variable
- Connection pool configured with min: 0, max: 7 connections
- Debug mode enabled in database configuration

### Development Setup

For local development with Railway:
1. Install dependencies: `yarn install`
2. Link to Railway service: `railway link`
3. Start development: `railway run yarn develop`
4. Access admin at `http://127.0.0.1:1337/admin`

### File Structure

- `config/` - Strapi configuration files (database, server, etc.)
- `src/api/` - API endpoints with MVC structure (controllers, routes, services, content-types)
- `src/components/` - Reusable content components
- `src/extensions/` - Strapi plugin extensions
- `types/generated/` - TypeScript type definitions
- `public/uploads/` - File upload storage
