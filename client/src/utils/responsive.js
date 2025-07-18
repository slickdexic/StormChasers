/**
 * Responsive Design Utilities
 * Provides breakpoints, mixins, and utility functions for responsive design
 */

// Breakpoints
export const breakpoints = {
  mobile: '320px',
  mobileLarge: '425px', 
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
  desktopLarge: '2560px'
};

// Media queries
export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.mobileLarge})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  laptop: `@media (max-width: ${breakpoints.laptop})`,
  desktop: `@media (min-width: ${breakpoints.laptop})`,
  
  // Specific ranges
  mobileOnly: `@media (max-width: ${breakpoints.mobileLarge})`,
  tabletUp: `@media (min-width: ${breakpoints.mobileLarge})`,
  tabletOnly: `@media (min-width: ${breakpoints.mobileLarge}) and (max-width: ${breakpoints.tablet})`,
  laptopUp: `@media (min-width: ${breakpoints.tablet})`,
  desktopUp: `@media (min-width: ${breakpoints.laptop})`
};

// Container widths
export const containerSizes = {
  mobile: '100%',
  tablet: '750px',
  laptop: '1200px',
  desktop: '1400px'
};

// Spacing scale
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem'
};

// Typography scale for responsive text
export const typography = {
  mobile: {
    h1: '1.75rem',
    h2: '1.5rem',
    h3: '1.25rem',
    h4: '1.125rem',
    body: '1rem',
    small: '0.875rem'
  },
  tablet: {
    h1: '2rem',
    h2: '1.75rem',
    h3: '1.5rem',
    h4: '1.25rem',
    body: '1rem',
    small: '0.875rem'
  },
  desktop: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    body: '1.125rem',
    small: '1rem'
  }
};

// Touch target sizes
export const touchTargets = {
  minimum: '44px', // WCAG minimum
  comfortable: '48px',
  large: '56px'
};

// Responsive grid utilities
export const gridUtils = {
  // Responsive card grid
  cardGrid: `
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    
    ${mediaQueries.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
    
    ${mediaQueries.laptop} {
      grid-template-columns: repeat(3, 1fr);
    }
    
    ${mediaQueries.desktop} {
      grid-template-columns: repeat(4, 1fr);
    }
  `,
  
  // Responsive player grid
  playerGrid: `
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    
    ${mediaQueries.tablet} {
      grid-template-columns: repeat(4, 1fr);
    }
  `,
  
  // Responsive button group
  buttonGroup: `
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    
    ${mediaQueries.tablet} {
      flex-direction: row;
      flex-wrap: wrap;
    }
  `
};

// Responsive component styles
export const responsiveStyles = {
  // Game container responsive padding
  gameContainer: `
    padding: 1rem;
    
    ${mediaQueries.tablet} {
      padding: 1.5rem;
    }
    
    ${mediaQueries.laptop} {
      padding: 2rem;
    }
  `,
  
  // Card responsive sizing
  playingCard: {
    small: `
      width: 40px;
      height: 56px;
      
      ${mediaQueries.tablet} {
        width: 50px;
        height: 70px;
      }
    `,
    medium: `
      width: 60px;
      height: 84px;
      
      ${mediaQueries.tablet} {
        width: 80px;
        height: 112px;
      }
    `,
    large: `
      width: 80px;
      height: 112px;
      
      ${mediaQueries.tablet} {
        width: 100px;
        height: 140px;
      }
      
      ${mediaQueries.laptop} {
        width: 120px;
        height: 168px;
      }
    `
  },
  
  // Modal responsive sizing
  modal: `
    width: 95vw;
    max-width: 500px;
    margin: 1rem;
    
    ${mediaQueries.tablet} {
      width: 80vw;
      max-width: 600px;
    }
    
    ${mediaQueries.laptop} {
      width: 70vw;
      max-width: 800px;
    }
  `,
  
  // Header responsive layout
  header: `
    padding: 0.5rem 1rem;
    
    ${mediaQueries.tablet} {
      padding: 1rem 1.5rem;
    }
    
    ${mediaQueries.laptop} {
      padding: 1rem 2rem;
    }
  `
};

// Utility functions
export const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= parseInt(breakpoints.mobileLarge);
  }
  return false;
};

export const isTablet = () => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    return width > parseInt(breakpoints.mobileLarge) && width <= parseInt(breakpoints.tablet);
  }
  return false;
};

export const isDesktop = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth > parseInt(breakpoints.tablet);
  }
  return false;
};

// Get responsive value based on screen size
export const getResponsiveValue = (mobile, tablet, desktop) => {
  if (isMobile()) return mobile;
  if (isTablet()) return tablet || mobile;
  return desktop || tablet || mobile;
};

export default {
  breakpoints,
  mediaQueries,
  containerSizes,
  spacing,
  typography,
  touchTargets,
  gridUtils,
  responsiveStyles,
  isMobile,
  isTablet,
  isDesktop,
  getResponsiveValue
};
