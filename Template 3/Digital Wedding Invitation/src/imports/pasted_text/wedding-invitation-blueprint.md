Here is a comprehensive Blueprint Specification based on the analysis of the provided design in "Gemini_Generated_Image_xajpwrxajpwrxajp.png". Note that the image displays a continuous, scrolling mobile-first layout split into three columns for presentation purposes.

---

### 1. Executive Visual Summary

* **Vibe & Aesthetic:** The design language is romantic, organic, and rustic-elegant. It mimics a physical wedding invitation using faux-paper textures, classic typography, and a muted, nature-inspired palette. The mood is intimate, welcoming, and deeply personal.
* **Target Layout:** This is a mobile-first, single-column vertical scroll. It heavily utilizes a centered alignment strategy to maintain a formal, traditional invitation feel, interspersed with full-width structural blocks to break up the content visually.

---

### 2. Color Palette & Typography (CSS Variables Ready)

**Color Palette**

| CSS Variable | Estimated HEX | Role & Application |
| --- | --- | --- |
| `--color-primary` | `#6b7254` | Olive Green. Used for major background sections (Countdown, RSVP, QR Code), the envelope flap graphic, and subtle accent lines. |
| `--color-background` | `#f5f4ef` | Warm Cream/Off-White. Serves as the primary background color, evoking the look of textured cardstock. |
| `--color-text-dark` | `#333333` | Dark Charcoal/Soft Black. Used for primary readability on light backgrounds to reduce harsh contrast compared to pure black. |
| `--color-text-light` | `#ffffff` | Pure White. Used for high-contrast text inside the olive green sections (dates, countdown numbers). |
| `--color-accent` | `#d4cbb8` | Warm Beige. Used for subtle dividers, timeline vertical borders, and calendar grid accents. |

**Typography**

| CSS Variable | Font Category | Role & Sizing Hierarchy |
| --- | --- | --- |
| `--font-display` | Script / Calligraphy | Primary headings (e.g., Names, "Ceremonia", "Recepción"). Weight: Normal. Sizing: Large/Fluid. |
| `--font-heading` | Classic Serif | Secondary headings, dates, and times (e.g., "14.11.2025", "Itinerario"). Weight: Medium. Sizing: Medium. |
| `--font-body` | Clean Sans-Serif | Paragraphs, addresses, small UI elements. Weight: Light/Regular. Sizing: Small (approx 14px-16px). |

---

### 3. Structural Architecture (DOM & Layout)

* **`<header id="hero-envelope">`:** A visually dominant intro section containing the envelope graphic, names, and date. Uses Flexbox (column, center alignment).
* **`<section id="intro-media">`:** Contains the first couple's photo, introductory text, and the custom audio player. Uses Flexbox with a gap of approximately 24px between elements.
* **`<section id="save-the-date">`:** A full-width section with the `--color-primary` background. Contains the countdown timer and a visual calendar block. Uses Flexbox for vertical stacking and CSS Grid for the 7-column calendar layout.
* **`<section id="event-details">`:** Houses the "Ceremonia Religiosa" and "Recepción" details. Uses a Flex column layout. Heavy top and bottom padding (approx 40px) to separate the blocks.
* **`<section id="itinerary">`:** A vertical timeline layout. Relies on a CSS Grid with a narrow left column (for time), a middle column (for the line and icons), and a wider right column (for event descriptions).
* **`<section id="dress-code">`:** Contains icons of formal wear and descriptive text. Centered Flexbox layout.
* **`<section id="gift-registry">`:** Full-width olive background block. Contains an icon, heading, text, and a prominent QR code. Flex column layout with centered content.
* **`<section id="rsvp-and-rules">`:** Combines the final call-to-action ("Confirmación") with specific rules ("Sin Niños") and a closing photo. Stacks vertically with generous spacing.

---

### 4. Granular Component Breakdown

* **Envelope Hero Graphic:** Built using layered `div` elements or an SVG. Requires precise `z-index` management so the cream invitation card appears tucked behind the olive green envelope flap.
* **Custom Audio Player:** Contains a play/play track text, shuffle, previous, play, next, and repeat icons. Requires a Flex row layout with `justify-content: center` and a `gap` of 15px. Icons should use thin SVG strokes.
* **Outlined Buttons:** E.g., "Ver ubicación", "Confirmar aquí". Styled with a transparent background, a 1px solid border matching the local text color, subtle `border-radius` (approx 4px), and padding of 10px 20px.
* **Countdown Timer:** Contains four distinct blocks (Days, Hours, Mins, Secs) separated by colons. Requires a Flex row layout. Numbers utilize the `--font-heading` while the labels below use `--font-body`.
* **Calendar Widget:** A 7-column CSS Grid. Days of the week header at the top. Requires a distinct circle stroke overlaid on the "14" to highlight the wedding date.
* **Itinerary Timeline:** Features a central continuous vertical line (using a pseudo-element `::before` on the container). Nodes consist of circular SVG icons with a white background to mask the vertical line behind them.
* **QR Code Block:** A standard image or canvas element wrapped in a white padded container with a slight drop shadow (`box-shadow: 0 4px 6px rgba(0,0,0,0.1)`) to stand out from the olive background.

---

### 5. Interactive & State Design (JavaScript & CSS States)

* **Hover States:**
* Outlined buttons should invert colors on hover (e.g., background becomes solid, text becomes background color) with a 0.3s ease transition.
* Audio player icons should drop in opacity to 70% on hover.


* **Dynamic Behavior (JS):**
* **Audio Player:** Requires HTML5 Audio API integration to toggle play/pause, update progress, and handle track looping.
* **Countdown Timer:** Needs a JavaScript function running a `setInterval` to calculate the difference between the target date (Nov 14, 2025) and the current system time, updating the DOM dynamically.
* **Scroll Animations:** As a long mobile page, elements like the timeline nodes or photos should utilize the Intersection Observer API to gently fade in and translate slightly upward as they enter the viewport.



---

### 6. Responsive Breakdown

* **Mobile-First Concept:** The provided design is explicitly optimized for mobile devices (smartphones). No elements need to be stacked or hidden on mobile, as this is the native state.
* **Desktop Adaptation:** Since a wide horizontal layout would destroy the intimate "invitation" feel, the entire main container should be constrained with `max-width: 480px` and `margin: 0 auto`.
* **Desktop Background:** The empty space on the sides of the desktop view should be filled with a subtle blurred background of the couple or a matching solid cream tone to maintain immersion.

---

### 7. AI Code Generation Prompts (Vibe Coding Ready)

**Prompt 1: Hero Envelope Animation**

> "Act as an expert CSS developer. Create an HTML/CSS component for a digital wedding invitation hero section. It needs to look like an open envelope. The background is cream. The envelope flap (pointing down) and bottom pocket are olive green (#6b7254). The cream invitation card should appear tucked inside the envelope. Include elegant cursive text for the couple's names 'Fernanda & Gustavo' on the card. Use purely HTML and CSS, ensuring the layering via z-index is pixel-perfect."

**Prompt 2: Vertical CSS Timeline**

> "Write responsive HTML and CSS for a wedding day itinerary timeline. The layout should have a subtle vertical accent line running down the middle. On top of this line, place circular nodes containing icons. To the left of each node, put the time (e.g., 4:30 pm), and to the right, put the event description (e.g., IGLESIA). Ensure the vertical line breaks seamlessly behind the circular icons. Use Flexbox or CSS Grid."

**Prompt 3: Interactive Countdown Timer**

> "Provide HTML, CSS, and vanilla JavaScript for a wedding countdown timer. The background is olive green (#6b7254) and the text is white. It needs to display Days, Hours, Minutes, and Seconds separated by colons. Use a clean serif font for the numbers. The JavaScript should target November 14, 2025, and update the DOM every second without flickering. Format it beautifully in a horizontal row."

**Prompt 4: Mobile Audio Player**

> "Build a custom, minimalist audio player UI using HTML and Tailwind CSS (or plain CSS). It should sit on a cream background. It needs text saying 'Dale play a nuestra canción' centered above it. Below the text, center a row of icons: shuffle, previous, a larger play button inside a circle, next, and repeat. Do not use default HTML audio controls; provide the semantic HTML structure and CSS to make it look elegant and ready for JavaScript wire-up."