## ═══════════════════════════════════════════════════════════════════════════
## CINEMATIC EFFECTS LIBRARY
## ═══════════════════════════════════════════════════════════════════════════
## Reusable transforms, filters, and overlays for making scenes feel alive.


## ─────────────────────────────────────────────────────────────────────────
## IDLE / BREATHING ANIMATIONS
## ─────────────────────────────────────────────────────────────────────────
## Apply with: show character at top, breathing

# Gentle breathing — barely perceptible idle motion
transform breathing:
    ease 3.0 zoom 1.005 yoffset -2
    ease 3.0 zoom 1.0 yoffset 0
    repeat

# Nervous breathing — faster, slightly more motion
transform breathing_nervous:
    ease 1.2 zoom 1.006 yoffset -3
    ease 1.2 zoom 1.0 yoffset 0
    repeat

# Subtle idle sway — characters feel less like cardboard cutouts
transform idle_sway:
    ease 4.0 xoffset 2 rotate 0.15
    ease 4.0 xoffset -2 rotate -0.15
    repeat

# Trembling — fear, cold, or emotional distress
transform tremble:
    linear 0.04 xoffset 2
    linear 0.04 xoffset -2
    linear 0.04 xoffset 1
    linear 0.04 xoffset -1
    repeat

# Soft trembling — less intense, lip-quivering hesitation
transform tremble_soft:
    linear 0.06 xoffset 1 yoffset 1
    linear 0.06 xoffset -1 yoffset -1
    repeat


## ─────────────────────────────────────────────────────────────────────────
## CHARACTER ACTION TRANSFORMS
## ─────────────────────────────────────────────────────────────────────────
## One-shot animations. Use: show character at position, flinch

# Flinch — recoil from verbal/physical impact
transform flinch:
    ease 0.06 xoffset -15 yoffset 5
    ease 0.25 xoffset 0 yoffset 0

# Surprise jump — startled reaction
transform surprise_jump:
    easein 0.08 yoffset -30
    easeout 0.2 yoffset 0

# Head shake — denial or disbelief
transform head_shake:
    ease 0.07 xoffset 8
    ease 0.07 xoffset -8
    ease 0.07 xoffset 5
    ease 0.07 xoffset -5
    ease 0.07 xoffset 0

# Step forward — assertive, threatening, or commanding
transform step_forward:
    ease 0.3 zoom 1.04 yoffset -8

# Step back — retreat, intimidated
transform step_back:
    ease 0.3 zoom 0.97 yoffset 5

# Looming — character subtly grows to feel intimidating
transform looming:
    ease 0.8 zoom 1.06 yoffset -10

# Shrinking — character feels smaller, submissive
transform shrinking:
    ease 0.6 zoom 0.96 yoffset 5

# Cornered (no scale) — intimidated posture without zoom changes
transform cornered:
    ease 0.2 yoffset 8 xoffset -6
    ease 0.2 yoffset 5 xoffset -3

# Resolve step (no scale) — slight forward intent without exposing crop edges
transform resolve_step:
    ease 0.3 xoffset -12 yoffset -6

# Crumble (no scale) — emotional collapse without zoom changes
transform crumble:
    ease 0.3 yoffset 14 xoffset 6

# Forced exit right (no scale) — use when a character is pushed away
transform forced_exit_right:
    linear 0.9 xalign 1.5 yalign -1

# Enter from left to top-left framing (no scale)
transform enter_left_top:
    xalign -0.25
    yalign -1
    linear 0.4 xalign 0.12


## ─────────────────────────────────────────────────────────────────────────
## SCREEN SHAKES
## ─────────────────────────────────────────────────────────────────────────
## Apply to layer: show layer master at screen_shake

transform screen_shake_light:
    xoffset 0 yoffset 0
    linear 0.03 xoffset 4 yoffset 2
    linear 0.03 xoffset -3 yoffset -2
    linear 0.03 xoffset 2 yoffset 1
    linear 0.03 xoffset -1 yoffset -1
    linear 0.03 xoffset 0 yoffset 0

transform screen_shake_heavy:
    xoffset 0 yoffset 0
    linear 0.03 xoffset 12 yoffset 8
    linear 0.03 xoffset -10 yoffset -6
    linear 0.03 xoffset 8 yoffset 5
    linear 0.03 xoffset -6 yoffset -3
    linear 0.03 xoffset 4 yoffset 2
    linear 0.03 xoffset -2 yoffset -1
    linear 0.03 xoffset 0 yoffset 0

# Impact — single sharp jolt then settle
transform impact_shake:
    xoffset 0 yoffset 0
    linear 0.02 xoffset 8 yoffset -5
    linear 0.04 xoffset -4 yoffset 3
    linear 0.06 xoffset 0 yoffset 0


## ─────────────────────────────────────────────────────────────────────────
## CAMERA / ZOOM EFFECTS
## ─────────────────────────────────────────────────────────────────────────
## Apply to layer: show layer master at slow_zoom_in

# Slow zoom — builds tension over a long dialogue
transform slow_zoom_in:
    zoom 1.0 xalign 0.5 yalign 0.5
    linear 8.0 zoom 1.06

# Quick dramatic zoom — shock or revelation
transform quick_zoom:
    zoom 1.0
    ease 0.25 zoom 1.12

# Zoom reset — return camera to normal
transform zoom_reset:
    ease 0.5 zoom 1.0 xoffset 0 yoffset 0

# Impact zoom — quick punch-in and back
transform impact_zoom:
    zoom 1.0
    linear 0.05 zoom 1.1
    linear 0.15 zoom 1.0


## ─────────────────────────────────────────────────────────────────────────
## COLOR / MOOD FILTERS
## ─────────────────────────────────────────────────────────────────────────
## Apply to layer: show layer master at cold_underground

# Cold underground — blue-ish tint for catacombs/underground
transform cold_underground:
    matrixcolor TintMatrix("#c8d0e8")

# Warm torchlight — orange flicker feel
transform warm_torchlight:
    matrixcolor TintMatrix("#ffe0b0")

# Desaturate — depression, shock, loss of hope
transform desaturate:
    matrixcolor SaturationMatrix(0.25)

# Gradual desaturation — hope draining away
transform losing_color:
    matrixcolor SaturationMatrix(1.0)
    linear 4.0 matrixcolor SaturationMatrix(0.2)

# Danger / blood / anger tint
transform danger_tint:
    matrixcolor TintMatrix("#ffcccc")

# Return to normal colors
transform normal_colors:
    matrixcolor SaturationMatrix(1.0)


# Background focus helpers for VN-style depth control.
transform bg_focus_clear:
    blur 0.0

transform bg_focus_blur:
    blur 8.0

# Dim — make things subtly darker
transform dim_scene:
    matrixcolor BrightnessMatrix(-0.08)

# Speaker highlight vs listener dim
transform speaking:
    matrixcolor BrightnessMatrix(0.0)

transform listening:
    matrixcolor BrightnessMatrix(-0.15)

# Stronger dialogue focus pair for scenes where subtle dim is hard to read.
transform speaking_focus:
    matrixcolor BrightnessMatrix(0.08)

transform listening_focus:
    matrixcolor BrightnessMatrix(-0.42)


## ─────────────────────────────────────────────────────────────────────────
## FLASH OVERLAYS
## ─────────────────────────────────────────────────────────────────────────

image white_flash = Solid("#ffffff", xysize=(1920, 1080))
image red_flash = Solid("#ff0000", xysize=(1920, 1080))
image danger_overlay = Solid("#330000", xysize=(1920, 1080))
image tension_overlay = Solid("#000000", xysize=(1920, 1080))

# Placeholder illustration cards (use until final art files exist)
image illustration_placeholder_burial_ritual = Composite(
    (1920, 1080),
    (0, 0), Solid("#0e0e14"),
    (0, 0), Text("Illustration Needed: Burial Ritual", size=64, color="#f0f0f0", outlines=[(2, "#000000", 0, 0)], xalign=0.5, yalign=0.45, text_align=0.5),
    (0, 0), Text("TODO: Replace with final illustration file", size=36, color="#b8b8b8", xalign=0.5, yalign=0.55, text_align=0.5)
)

image illustration_placeholder_queen_hand = Composite(
    (1920, 1080),
    (0, 0), Solid("#101018"),
    (0, 0), Text("Illustration Needed: Queen's hand being wrapped", size=58, color="#f0f0f0", outlines=[(2, "#000000", 0, 0)], xalign=0.5, yalign=0.45, text_align=0.5),
    (0, 0), Text("TODO: Replace with final illustration file", size=36, color="#b8b8b8", xalign=0.5, yalign=0.55, text_align=0.5)
)

# Reusable flash transform
transform flash_effect:
    alpha 0.0
    linear 0.05 alpha 0.8
    linear 0.4 alpha 0.0


## ─────────────────────────────────────────────────────────────────────────
## SCENE TRANSITIONS (custom)
## ─────────────────────────────────────────────────────────────────────────

# Slow dramatic dissolve
define slow_dissolve = Dissolve(1.5)

# Very slow fade for mood shifts
define mood_dissolve = Dissolve(2.5)

# Quick cut with slight flash
define hard_cut = Dissolve(0.1)

# Fade to black and back
define fade_black = Fade(0.5, 0.3, 0.5)

# Long contemplative fade
define long_fade = Fade(1.0, 1.0, 1.0)


## ─────────────────────────────────────────────────────────────────────────
## FLICKERING TORCHLIGHT
## ─────────────────────────────────────────────────────────────────────────
## Simulates uneven torchlight in underground scenes

image torch_flicker = Solid("#000000", xysize=(1920, 1080))

transform torchlight_flicker:
    alpha 0.0
    choice:
        linear 0.3 alpha 0.04
    choice:
        linear 0.5 alpha 0.06
    choice:
        linear 0.2 alpha 0.02
    choice:
        linear 0.4 alpha 0.05
    choice:
        linear 0.15 alpha 0.03
    choice:
        linear 0.35 alpha 0.0
    repeat
