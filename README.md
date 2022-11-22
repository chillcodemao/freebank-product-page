# freebank-product-page
// Product page for the Freebank mobile banking app


**Description**
- create a product page for the fictional banking solution Freebank


**Scope:**
- create responsive design for product page with desktop, laptop and mobile break points
- implement sticky nav bar
- use modal windows for user login / password recovery and for signing up for a new account
- use smooth scrolling for page navigation
- implement lazy loading for "Overview" images
- create a Trusted Customers logo carousel on first page
- animate revealing page sections
- implement "Features" tabbed component
- create Customer testimonials slider with navigation
- create footer section


**Functionality & Rules**
- Freebank logo is clickable and smooth scrolls viewport to top of page on click (nav & footer)
- page sections and content are revealed and animated as user scrolls down for the first time on the page
- DOM - create and display a cookie notification message (GDPR simulation) that, unless clicked, will blur the background and remove visibility of page sections, except for the header
- navbar is sticky and is dinamically attached to the top of the viewport usign DOM manipulation, when page sections intersect viewport, with Intersection Obserbver API
- navbar links hover efect using DOM event delegation
- trusted partenrs carousel slider is animated with keyframes to scroll the logos alternatively; overflow hidden on X axis, any resolution
- carousel animation will be paused on mouse over and resumed whe mouse exists the sider; no link clicking implemented;
- "Features" images are lazy loaded for improved page loading time, using "data-src" property on image elements
- create a tabbed component to shwocase the main Freebank features
- tab display logic using DOM manipulation: active classes assigned to active content and made visible to user
- Features tab / Instant Transfers: when click on Freebank app highlighted text, take user to a new page and load previous project: Freebank mobile app
- create testimonials slider and animate with DOM manipulation: scroll left / rigth with mouse or keyboard arrows; dinamically create dots according to number of slides; clicking a dot scrolls slider to selected slide
- hover effects on CTA buttons and tabbed component buttons
- responsive resolution @media points: 1366px, 1100px, 880px, 575px
- modal windows resize according to user screen resolution
- no user credentials storing and checking implemented
- show alert messsage when submitting recover password form

!Note:
- additional responsive @media point to be implemented with dedicated mobile design @375px (new nav as well) - in progress


**Misc**
- text editor used: VS Code
- design files created and used: initial sketch, figma file and .png file exported
- Freebank logo is an original image file created for this project through OpenAI's DALL-E image processing AI
- colors and design direction for the UI was inspired by the colors and look of the logo
- image files resized for faster load times
- css files split into 3 parts: 1 for style reset, 2 for setting colors and fonts and the 3rd for the rest of the styling
- Nunito Sans google font used
