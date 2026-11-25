# Taste Centre Restaurant Website

A responsive restaurant website showcasing Indian cuisine, with dedicated Home, Menu, About, and Contact pages. The project is built with React and Vite and includes animated page transitions, a category-filterable menu, configurable restaurant content, and page-specific SEO metadata.

## Features

- **Home:** Restaurant introduction, featured dishes, and a customer testimonial carousel.
- **Menu:** Filter dishes by category and view descriptions, prices, and vegetarian labels.
- **About and Contact:** Restaurant story, contact information, embedded map, and a contact form UI.
- **Motion and visuals:** Framer Motion animations and a Three.js/React Three Fiber particle-hero component.
- **Configuration:** Restaurant details, menu items, SEO metadata, and theme values live in `src/config/`.
- **Responsive layout:** Tailwind CSS utility classes support mobile and desktop layouts.

> The contact form is currently a front-end interface and does not submit messages to a server. Connect a form service or backend before using it to receive inquiries.

## Tech Stack

- React 19 and JavaScript
- Vite 7
- Tailwind CSS 4
- React Router
- Framer Motion
- Three.js, React Three Fiber, and Drei
- React Helmet Async for page metadata

## Getting Started

### Prerequisites

Install Node.js and npm.

### Install and run

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal when the development server is ready.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |

## Project Structure

```text
src/
├── assets/       # Food images and visual assets
├── components/   # Shared layout, navigation, transitions, and Hero3D
├── config/       # Restaurant content, menu, SEO, and theme values
├── pages/        # Home, Menu, About, and Contact pages
├── App.jsx       # Routes and shared application layout
├── index.css     # Global styles
└── main.jsx      # Application entry point
```

## Customization

- Edit `src/config/content.json` to change the restaurant name, contact details, homepage copy, and testimonials.
- Edit `src/config/menu.json` to update menu categories, dish descriptions, prices, dietary labels, and spice levels.
- Edit `src/config/seo.json` to change the page titles and descriptions.
- Adjust brand colors and font values in `src/config/theme.js`; Tailwind theme extensions are also defined in `tailwind.config.js`.
- Replace images in `src/assets/` with the restaurant's own imagery. The Google Maps embed is currently set in `src/pages/Contact.jsx` and should be updated for the intended location.

## Production Build

```bash
npm run build
npm run preview
```

The generated static site is in `dist/` and can be deployed to a static hosting provider. Configure the host to serve `index.html` for client-side routes such as `/menu`, `/about`, and `/contact`.