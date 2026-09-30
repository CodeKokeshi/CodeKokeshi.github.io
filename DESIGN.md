---
name: CodeKokeshi Portfolio
description: A personal portfolio led by playable work and development experiments.
colors:
  ground: "#111925"
  ground-raised: "#172433"
  stage: "#223244"
  line: "#435367"
  text: "#f4f5ed"
  muted: "#bfcbcf"
  cobalt: "#586ef4"
  cobalt-deep: "#3549bd"
  amber: "#ffc247"
  light: "#e8edf0"
  light-ink: "#182332"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(68px, 7vw, 96px)"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(36px, 4vw, 56px)"
    fontWeight: 700
    lineHeight: 0.95
  body:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.09em"
rounded:
  flat: "0px"
spacing:
  tight: "8px"
  control: "14px"
  section: "24px"
  wide: "40px"
components:
  primary-action:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.light-ink}"
    rounded: "{rounded.flat}"
    padding: "10px 14px"
    height: "43px"
  selected-route:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.text}"
    rounded: "{rounded.flat}"
    padding: "13px 16px 12px"
  raised-surface:
    backgroundColor: "{colors.ground-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.flat}"
---

# Design System: CodeKokeshi Portfolio

## Overview

**Creative North Star: "World Select"**

The portfolio treats each project as something to enter and explore. Real footage, artwork, and screenshots carry the visual weight; the interface frames them with a compact route, a selected state, and short, candid copy. The site is personal and informal, with no presentation-style pitch.

The dark field resembles a quiet game selection screen without inventing a game world around the work. Art, software, mods, the older archive pages, and the timeline use the same type, colors, square edges, and focus treatment while giving their media different layouts.

**Key Characteristics:**

- Real project media leads each view.
- Cobalt identifies the current selection; amber marks actions and navigation.
- Flat slate surfaces and thin borders define depth without shadows.
- Short labels and varied media layouts keep the site from reading like an article.

## Colors

The palette is dark navy and slate, with one selection color and one action color. The values in the frontmatter match the CSS custom properties in `assets/css/portfolio.css`.

### Primary

- **Cobalt:** The selected game route item and its active state.
- **Deep Cobalt:** A reserved darker companion to the selection color.

### Secondary

- **Amber:** Play actions, route markers, focus rings, active navigation underlines, and links.

### Neutral

- **Ground and Raised Ground:** Page canvas and contained navigation or project surfaces.
- **Stage and Line:** Media frame backing and quiet separators.
- **Text and Muted:** Warm primary type and cooler supporting copy.
- **Light and Light Ink:** The selected game's detail plate and its readable inverse text.

**The Selection and Action Rule.** Use cobalt for the chosen item and amber for action or wayfinding; they have different jobs.

## Typography

Self-hosted Barlow Condensed Bold is the display voice; self-hosted Barlow Regular and SemiBold handle body text and controls. Fallbacks are defined in the frontmatter. Display headings are uppercase and tightly set; body copy remains sentence case and brief.

The homepage display scale reaches 96px on desktop and adjusts to the viewport on mobile. Selected game titles use a separate title scale. Body text is 16px with 1.5 line height; metadata and small controls remain at or above 11px. Long descriptions stay within a readable measure, usually under 65ch.

**The Two Voices Rule.** Condensed display type names the work; Barlow body type explains it. Avoid a third decorative face.

## Layout

The main content is capped near 1428px with 24px desktop side padding and 16px mobile side padding. The Games view pairs a narrow selectable route with a dominant 16:6.8 video stage and a light detail plate. At 760px and below, the stage moves first and the route becomes a horizontal strip. The opening spacing is compact enough for the selected title and description to enter a 1440×900 first viewport.

Other work uses its own composition: a dense image wall for Art, alternating image and copy rows for Software, a featured mod with a list for Mods, and a profile image beside informal copy for About. The separate archive pages use media-led heroes; the timeline becomes a vertical route on mobile. Reuse the visual rules without forcing every kind of work into one card layout.

## Elevation & Depth

The system uses no box shadows. Tonal changes, a one-pixel line, and the light selected-project plate establish hierarchy. Video and artwork sit flush in their frames.

**The Flat Stage Rule.** Reserve borders for boundaries and focus; do not add shadowed cards around media.

## Shapes

Controls, frames, markers, and image crops have square corners. Route markers are compact outlined squares joined by a continuous line. The selected marker fills amber inside its cobalt row. Art keeps its image proportions and deliberate crop variations.

## Components

### Primary action

Amber fill, dark text, square corners, and at least a 43px desktop target. The play action sits directly on the selected video. Hover darkens the amber; keyboard focus receives a three-pixel amber outline offset from the element.

### Project route

The desktop route is a vertical list of numbered markers joined by a line. On mobile it is a horizontal strip below the selected project. The active item uses cobalt and `aria-pressed`; arrow keys move between game choices. A selection updates the stage, details, and step count.

### Navigation and links

Navigation uses Barlow SemiBold with an amber underline for the active section. Text links use an amber underline or the shared CSS-drawn directional icon. The five main sections stay available in a horizontally scrollable mobile rail. Focus outlines, text selection, and scrollbars use the same palette.

### Media and tags

Project media is shown at useful scale. Thin borders and slate backing support it without decorating over it. Technical tags are small outlined labels; they remain secondary to project names and imagery.

## Do's and Don'ts

### Do:

- **Do** lead with the real game, artwork, or product screenshot for each view.
- **Do** keep cobalt selection, amber action, square edges, and the Barlow pairing consistent across new pages.
- **Do** keep desktop and phone compositions distinct while preserving the same project order and controls.

### Don't:

- **Don't** repeat identical image-text cards for every kind of work.
- **Don't** put decorative introductory labels above project headings.
- **Don't** replace the real media with generic illustrations, gradients, or invented claims.
