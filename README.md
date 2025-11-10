# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Portfolio Website

A modern, responsive portfolio website built with React to showcase my skills, projects, and professional experience.

**Features**

**Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
**Smooth Scrolling**: Seamless navigation between sections using AnchorLink
 **Interactive Navigation**: Dynamic underline indicators and mobile-friendly menu
 **Modern UI/UX**: Clean and professional design with smooth transitions
 **Mobile-First Approach**: Optimized mobile experience with hamburger menu

## Technologies Used

 **Frontend Framework**: React 18+
 **Styling**: CSS3 with custom properties
 **Smooth Scrolling**: React Anchor Link Smooth Scroll
 **Icons**: Custom SVG icons
 **Layout**: Flexbox and CSS Grid

##  Sections

1. **Home** - Hero section with introduction
2. **About Me** - Personal background and skills
3. **Services** - Services I offer
4. **Portfolio** - Showcase of my projects
5. **Contact** - Get in touch with me

##  Installation

To run this project locally:

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##  Project Structure

```
src/
├── assets/
│   ├── LOGO.png
│   ├── menu_open.svg
│   ├── menu_close.svg
│   └── nav_underline.svg
├── components/
│   └── Navbar/
│       ├── Navbar.js
│       └── Navbar.css
├── App.js
└── index.js
```

##  Component Details

### Navbar Component
The navigation bar includes:

**Logo**: Brand identity
**Navigation Menu**: Home, About Me, Services, Portfolio, Contact
**Mobile Responsive**: Hamburger menu for mobile devices
**Active Indicators**: Dynamic underline for current section
**Smooth Scrolling**: Seamless section transitions

### Key Features Implemented
**Mobile Menu Toggle**: Smooth slide-in/slide-out animation
**Active State Management**: Visual indicators for current section
**Responsive Breakpoints**: Optimized for various screen sizes
**Accessible Navigation**: Keyboard and screen reader friendly

## Responsive Breakpoints

**Desktop**: 769px and above
**Tablet**: 768px and below
**Mobile**: 480px and below

##  Customization

To customize this portfolio:

1. **Update Content**: Modify the text content in respective components
2. **Change Colors**: Update CSS variables in respective CSS files
3. **Replace Assets**: Swap logo and images in the assets folder
4. **Add Sections**: Create new components and update navigation

##  Dependencies

```json
{
  "react": "^18.x.x",
  "react-anchor-link-smooth-scroll": "^1.x.x",
  "react-dom": "^18.x.x"
}
```

##  Deployment

To build for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files that can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Contact

Feel free to reach out if you have any questions or want to collaborate!

---

**Built with Love using React and modern web technologies**