define no_name = Character(None)

define kristin = Character("Kristin")


## ═══════════════════════════════════════════════════════════════════════════
## TEXT EFFECTS
## ═══════════════════════════════════════════════════════════════════════════
## Narrator: fade-in text (no typewriter) — centered on dark overlay
## Dialogue: typewriter effect — set globally via preferences.text_cps in options.rpy
## Players can click at any time to instantly reveal all text.

# ATL transform that fades narrator text in smoothly
transform narrator_fade_in:
    alpha 0.0
    linear 1.5 alpha 1.0

# Define narrator for centered text in the middle of screen
# what_slow_cps=0 disables typewriter so the fade-in looks clean
# window_background=None removes dialogue box
define narrator = Character(
    None,
    what_text_align=0.5,
    what_xalign=0.5,
    what_yalign=0.5,
    window_background=None,
    window_yalign=0.5,
    window_xalign=0.5,
    what_color="#ffffff",
    what_outlines=[(2, "#000000", 0, 0)],
    slow_cps=0,
    what_at=narrator_fade_in
)

init python:
    def narr(text, alpha=0.45, hold=False):
        """Narrator helper: ensures dim overlay + narrator style without copy/paste."""
        overlay_was_showing = renpy.showing("dark_overlay", layer="master")

        if not overlay_was_showing:
            renpy.show(
                "dark_overlay",
                at_list=[renpy.store.truecenter, renpy.store.Transform(alpha=alpha)],
                layer="master",
            )
            renpy.with_statement(renpy.store.dissolve)

        renpy.say(renpy.store.narrator, text)

        if (not hold) and (not overlay_was_showing):
            renpy.hide("dark_overlay", layer="master")
            renpy.with_statement(renpy.store.dissolve)

## ═══════════════════════════════════════════════════════════════════════════
## FLIP ANIMATIONS
## ═══════════════════════════════════════════════════════════════════════════
## Pure flip transforms that only handle xzoom
## Use with any position: show character at top, flip_left

transform flip_anim:
    linear 0.3 xzoom -1.0

# Instant flip (no animation) - use as image attribute
transform flip:
    xzoom -1.0

define fast_ease = MoveTransition(0.15)

# Characters
define boy_aldorith = Character("Boy Aldorith", image="boy_aldorith")
define girl_aldorith = Character("Girl Aldorith", image="girl_aldorith")
define yaoguai_king = Character("Yaoguai King", image="yaoguai_king")

# Chapter 1 cast
define dorian = Character("Dorian", image="dorian")
define elara = Character("Elara", image="elara")

# Kids always speak with the dialogue window at the top.
define lucas = Character("Lucas", image="lucas_kid", window_yalign=0.0)
define daniel = Character("Daniel", image="daniel_kid", window_yalign=0.0)
define emily = Character("Emily", image="emily_kid", window_yalign=0.0)
define sarah = Character("Sarah", image="sarah_kid", window_yalign=0.0)
define kids = Character("Kids", window_yalign=0.0)

# Use this when adults are visible and kids should speak in the bottom textbox.
define kids_bottom = Character("Kids")

# Use these when a scene requires each kid's name but the textbox must stay at the bottom.
define lucas_bottom = Character("Lucas", image="lucas_kid")
define daniel_bottom = Character("Daniel", image="daniel_kid")
define emily_bottom = Character("Emily", image="emily_kid")
define sarah_bottom = Character("Sarah", image="sarah_kid")

# Choice 1 non-sprite speakers
define lead_fire_channeler = Character("Lead Fire Channeler")
define channelers = Character("Channelers")

# Choice 2 non-sprite speakers
define nervous_performer_1 = Character("Nervous Performer 1")
define nervous_performer_2 = Character("Nervous Performer 2")
define nervous_performer_3 = Character("Nervous Performer 3")

# Choice 3 speakers
define vendor = Character("Vendor")
define soldier_1 = Character("Soldier 1")
define male_soldier_1 = Character("Male Soldier 1")
define male_soldier_2 = Character("Male Soldier 2")
define soldier_gao = Character("Soldier Gao", image="soldier_gao")

# Choice 4 speakers
define yuxuan = Character("Yuxuan", image="yuxuan")
define roboto = Character("Roboto", image="roboto")
define male_1 = Character("Male 1")
define female_1 = Character("Female 1")
define male_2 = Character("Male 2")