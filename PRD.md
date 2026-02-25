# Project Requirements Document (PRD)
## Indian-Themed Restaurant Website (Reusable Multi-Client Product)

### 1. Project Overview

#### 1.1 Project Name
**IndiFlavors** – Premium Indian Restaurant Website Template

#### 1.2 Purpose
To design and develop a high-end, SEO-optimized, Indian-themed restaurant website using React, JavaScript, Tailwind CSS, and Three.js, structured in a way that:
*   Allows rapid customization for multiple restaurant clients
*   Centralizes all design, branding, and theming through CSS and config
*   Supports menu display with prices
*   Delivers a modern, immersive, and professional user experience
*   Is SEO-rich for strong Google search visibility
*   Use sample images located in the /src/assets folder

### 2. Target Audience
*   Restaurant owners (Fine Dining, Casual Dining, Cloud Kitchens)
*   Indian cuisine restaurants (North Indian, South Indian, Fusion)
*   Agencies reselling restaurant websites
*   End customers searching for Indian restaurants online

### 3. Technology Stack

#### 3.1 Frontend
*   **React.js** – Component-based architecture
*   **JavaScript (ES6+)**
*   **Tailwind CSS** – Utility-first styling with theme abstraction
*   **Three.js** – Light 3D/visual enhancements (hero section, ambiance)

#### 3.2 Styling & Theming
*   Centralized Tailwind configuration
*   CSS variables for:
    *   Colors
    *   Fonts
    *   Spacing
    *   Shadows
    *   Border radius
*   Theme switching via config files (no component rewrite)

#### 3.3 SEO & Performance
*   Semantic HTML
*   Meta tags and Open Graph
*   Schema markup (Restaurant schema)
*   Optimized assets and lazy loading

### 4. Core Functional Requirements

#### 4.1 Pages & Sections

##### 4.1.1 Home Page
*   Hero section with Indian aesthetic visuals (optional Three.js animation)
*   Restaurant tagline
*   CTA buttons (View Menu, Book a Table)
*   Featured dishes
*   Cuisine highlights
*   Testimonials
*   Location preview

##### 4.1.2 About Us
*   Restaurant story
*   Chef introduction
*   Cultural inspiration
*   Philosophy & authenticity

##### 4.1.3 Menu Page (Critical)
*   Categorized menu layout
*   Prices displayed clearly
*   Vegetarian / Non-Vegetarian indicators
*   Spice level indicators
*   Responsive and filterable

**Sample Menu Structure & Prices**

*   **Starters**
    *   Paneer Tikka – ₹320
    *   Vegetable Samosa – ₹120
    *   Chicken Tandoori – ₹420
*   **Main Course**
    *   Butter Chicken – ₹480
    *   Paneer Butter Masala – ₹420
    *   Dal Makhani – ₹360
    *   Rogan Josh – ₹520
*   **Breads**
    *   Butter Naan – ₹60
    *   Garlic Naan – ₹80
    *   Tandoori Roti – ₹50
*   **Rice & Biryani**
    *   Vegetable Biryani – ₹380
    *   Chicken Biryani – ₹450
    *   Steamed Basmati Rice – ₹220
*   **Desserts**
    *   Gulab Jamun – ₹120
    *   Rasmalai – ₹150
*   **Beverages**
    *   Masala Chai – ₹90
    *   Mango Lassi – ₹140

> All menu data must be loaded from a JSON-based configuration to allow easy updates per client.

##### 4.1.4 Contact Page
*   Address
*   Phone number
*   Email
*   Google Maps embed
*   Contact form

### 5. Design & Theming Architecture (Critical Requirement)

#### 5.1 Centralized Styling Strategy
All visual customization must be controlled via:

##### 5.1.1 Tailwind Configuration
`tailwind.config.js`

Controls:
*   Brand colors
*   Font families
*   Spacing scale
*   Border radius
*   Shadows

##### 5.1.2 CSS Variables (Theme Layer)
```css
:root {
  --primary-color: #8b0000;
  --secondary-color: #f4c430;
  --accent-color: #2f4f4f;
  --font-heading: 'Playfair Display';
  --font-body: 'Inter';
}
```
Changing these values must:
*   Rebrand the entire website
*   Require zero component-level CSS changes

#### 5.2 Reusability Requirement
*   No inline hardcoded colors
*   No component-specific design overrides
*   Components must rely only on:
    *   Tailwind utility classes
    *   Global theme variables
*   Each client = new theme config + content JSON

### 6. Three.js Integration Requirements
Used sparingly for performance.

**Example use cases:**
*   3D spice particles in hero section
*   Ambient background animation
*   Subtle rotating Indian motifs (lotus, diya)
*   Must be optional and toggleable per client

### 7. SEO Requirements (High Priority)

#### 7.1 On-Page SEO
*   SEO-friendly URLs
*   Proper H1–H6 hierarchy
*   Keyword-rich headings:
    *   “Best Indian Restaurant in [City]”
    *   “Authentic Indian Cuisine”
*   Image alt tags
*   Fast page load time

#### 7.2 Meta Tags
*   Unique title & description per page
*   Open Graph tags for social sharing

#### 7.3 Structured Data
Restaurant schema:
*   Name
*   Address
*   Cuisine type
*   Menu
*   Opening hours

#### 7.4 Content SEO
*   SEO-optimized menu descriptions
*   Location-based keywords
*   Local search optimization

### 8. Performance & Accessibility
*   Mobile-first design
*   Fully responsive layout
*   Lazy loading images
*   WCAG-compliant contrast ratios
*   Keyboard navigation support

### 9. Configuration-Based Customization

#### 9.1 Client-Specific Files
*   `/config/theme.js`
*   `/config/menu.json`
*   `/config/seo.json`
*   `/config/content.json`


### 10. Deliverables
*   Fully functional React application
*   Centralized Tailwind & CSS theming
*   Sample Indian restaurant content
*   SEO-ready structure
*   Documentation for client customization

### 11. Success Criteria
*   Website can be rebranded in under 30 minutes
*   SEO score > 90 (Lighthouse)
*   Mobile & desktop responsive
*   Menu and pricing editable without touching UI code
*   Ready for resale to multiple restaurant clients
