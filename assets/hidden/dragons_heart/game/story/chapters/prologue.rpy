label prologue:
    # ── SCENE 1: Underground prayer — establish mood ──
    scene bg tiangho_underground_1 with long_fade
    play ambience "audio/ambience/calm_ambience_cave.ogg"
    # Cold underground color filter + torchlight flicker ambient
    show layer master at cold_underground
    show torch_flicker at torchlight_flicker

    # Let the player absorb the atmosphere
    pause 0.8

    voice "audio/prologue/0000-1.ogg"
    no_name "{cps=30}Let their spirits pass without suffering. Let their memories remain unspoiled."

    voice "audio/prologue/0000-2.ogg"
    no_name "{cps=30}Let Your cloak be warm. Let their burdens fall at Your feet, Almighty Enoch."

    # ── NARRATION: Introduce Kristin ──
    # Slow zoom builds tension during narration
    show layer master at slow_zoom_in
    $ narr("A young woman with silver hair knelt in the dust and shadow, her fingers cold against the blood-spattered floor. The torchlight flickered against her trembling form. She closed her eyes and spoke softly, her voice barely more than a breath.")

    # Reset zoom
    show layer master at zoom_reset

    # ── SCENE 2: Kristin praying — intimate CG ──
    hide torch_flicker
    scene bg 01_kristin_praying with slow_dissolve
    show layer master at warm_torchlight
    pause 0.3

    voice "audio/prologue/0001.ogg"
    kristin "{cps=28}Grant me strength to carry out your will:{w=0.5} {cps=20}to lay these {cps=15}bodies to rest with reverence, to honor their passage, and to usher them into your sacred silence."

    $ narr("Two aldorith soldiers stood at the threshold, their faces sharp with impatience, their breath fogging faintly in the chill of the underground.")

    # ── SCENE 3: Underground — soldiers waiting ──
    scene bg tiangho_underground_1 with fade_black
    show layer master at cold_underground
    show torch_flicker at torchlight_flicker
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)
    pause 0.1

    # Characters breathe — they're alive
    show boy_aldorith neutral at topleft:
        breathing
    show girl_aldorith neutral at topright:
        toggle_flip
        breathing
    with dissolve

    voice "audio/prologue/0002.ogg"
    # Dim girl while boy speaks — spotlight effect
    show girl_aldorith neutral at topright:
        listening
        breathing
    boy_aldorith "{cps=30}She's still praying. {w=0.75}{cps=25}It's been five minutes."

    # Swap speaker focus
    show boy_aldorith neutral at topleft:
        listening
        breathing
    show girl_aldorith neutral at topright:
        speaking
        breathing
    # voice "audio/prologue/0003.ogg"
    girl_aldorith "{cps=30}You're right. We cannot linger. The rot will draw attention."

    # ── SCENE 4: Kristin praying CG — she's still going ──
    hide torch_flicker
    scene bg 01_kristin_praying with slow_dissolve
    show layer master at warm_torchlight

    # Slow zoom during narration adds weight
    show layer master at slow_zoom_in

    $ narr("Kristin's voice quivered as she continued to whisper her prayer—begging Enoch to take their souls gently. To let them find peace. To weigh the sins of the living, not the dead.")
    show layer master at zoom_reset

    # ── SCENE 5: Boy Aldorith snaps ──
    scene bg tiangho_underground_1 with fade_black
    show layer master at cold_underground
    show torch_flicker at torchlight_flicker
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)

    show boy_aldorith neutral at top with dissolve:
        breathing

    # Zoom in as he commands — feels aggressive, closing in
    show layer master at slow_zoom_in
    voice "audio/prologue/0004.ogg"
    boy_aldorith "{cps=30}Enough of this, Kristin."
    show layer master at zoom_reset

    # ── NARRATION: Kristin reacts — emotional impact ──
    # Screen shake to simulate the jolt of being called out
    show layer master at impact_shake

    $ narr("Kristin flinched as if struck. She turned, eyes wide, lips pale.")

    # ── SCENE 6: Kristin enters — vulnerable ──
    show boy_aldorith neutral at topleft with ease:
        listening
        breathing
    show kristin neutral at topright with dissolve:
        toggle_flip
        breathing_nervous

    voice "audio/prologue/0005.ogg"
    # Kristin trembles as she speaks — hesitant, scared
    show kristin neutral at topright:
        tremble_soft
    kristin "{cps=30}I was only… {w=1}I was praying to Lord Enoch."

    # ── SCENE 7: Girl enters — intimidation begins ──
    # Boy slides offscreen, girl enters from her side
    show girl_aldorith neutral at offscreenleft:
        toggle_flip
    show boy_aldorith neutral at offscreenleft with fast_ease
    pause 0.1

    show girl_aldorith neutral at topleft with ease:
        toggle_flip
        breathing

    # Kristin flinches at girl's arrival
    show kristin neutral at topright:
        flinch
        breathing_nervous

    # Mood shifts darker — color slowly drains
    show layer master at losing_color

    #voice "audio/prologue/0006.ogg"
    # Girl looms — she's dominant in this exchange
    show girl_aldorith neutral at topleft:
        looming
    girl_aldorith "{cps=30}A prayer that's lasted too long. For minutes, sister. We've listened. Are you certain you're not harboring doubts?"

    # Kristin is cornered under pressure (no zoom to avoid exposing cropped art)
    show kristin neutral at topright:
        cornered
        tremble_soft

    voice "audio/prologue/0007.ogg"
    kristin "{cps=30}D-Doubts? No, sister."

    # Restore color before next beat
    show layer master at normal_colors

    # ── SCENE 8: Kristin pushes back — then gets hammered ──
    # Kristin gathers courage momentarily (no zoom variant to protect sprite crop)
    show kristin neutral at topright:
        resolve_step

    # voice "audio/prologue/0008.ogg" --> voicefile is cut off need updates
    kristin "{cps=30}But… What we did—what happened—was it really right? We killed the queen and her two sons."

    # ── Boy charges in — aggressive rebuttal ──
    # Quick swap + screen shake punctuates the aggression
    show girl_aldorith neutral at offscreenleft with fast_ease
    show layer master at impact_shake
    show boy_aldorith neutral at topleft with fast_ease:
        step_forward
        breathing

    # Kristin recoils
    show kristin neutral at topright:
        flinch
        tremble

    # Danger tint — things are getting hostile
    show layer master at danger_tint

    voice "audio/prologue/0009.ogg"
    boy_aldorith "{cps=30}What are you saying? That our Father was wrong?"

    # Kristin panics — shaking her head
    show kristin neutral at topright:
        head_shake
        tremble

    voice "audio/prologue/0010.ogg"
    kristin "{cps=30}N-no! I would never—why would I?"

    # Return from danger tint
    show layer master at normal_colors

    # ── Girl comes back — the cruelest line ──
    show boy_aldorith neutral at offscreenleft with fast_ease
    show layer master at impact_shake
    show girl_aldorith neutral at topleft with fast_ease:
        looming

    # Kristin is pressed back emotionally (no zoom to avoid crop reveal)
    show kristin neutral at topright:
        cornered
        tremble_soft

    # Slow desaturation during the cruelest words — hope draining
    show layer master at losing_color

    # voice "audio/prologue/0011.ogg" --> girl aldorith has no voice yet
    girl_aldorith "{cps=20}Your blood-brother Svante didn't hesitate. He slit their throats without blinking. He was useful. You? You pray for corpses."

    # ── Final blow — "Useless" ──
    show girl_aldorith neutral at offscreenleft with fast_ease

    # Brief darkness before the final word
    show tension_overlay at truecenter:
        alpha 0.0
        linear 0.2 alpha 0.15

    show layer master at impact_shake
    show boy_aldorith neutral at topleft with fast_ease:
        step_forward

    # Kristin crumbles (no zoom to avoid crop reveal)
    show kristin neutral at topright:
        crumble
        tremble

    voice "audio/prologue/0012.ogg"
    boy_aldorith "{cps=20}Useless."

    # Let the word hang — dramatic pause
    pause 0.8
    hide tension_overlay with dissolve

    # ── SCENE 9: Aftermath of "Useless" — shame settles in ──
    # Dim for narration, then undim to return to dialogue state.
    $ narr("Kristin dropped her gaze. Her hands trembled at her sides.")

    # Keep Kristin visible and fragile while she apologizes.
    show kristin neutral at topright:
        tremble_soft
        cornered
    voice "audio/prologue/0013.ogg"
    kristin "{cps=30}I’m very sorry… I just—"

    # Boy cuts in hard: step in + impact jolt for verbal force.
    show layer master at impact_shake
    show boy_aldorith neutral at topleft:
        speaking
        step_forward
    voice "audio/prologue/0014.ogg"
    boy_aldorith "{cps=30}We don’t need you anymore. You're only stalling."

    # Maintain pressure while he continues.
    show boy_aldorith neutral at topleft:
        speaking
        breathing
    voice "audio/prologue/0015.ogg"
    boy_aldorith "{cps=30}Count Vasily might have better use for someone like you."

    # Kristin turns to the right (flip, since default is left-facing) before forced exit.
    show kristin neutral at topright:
        toggle_flip
        tremble_soft

    # Kristin exits to the right with a subdued, hesitant pace.
    show kristin neutral at forced_exit_right with ease
    pause 0.5
    hide kristin

    # Narration beat while scene stays dim and heavy.

    $ narr("She didn’t argue. With her head bowed and hands trembling at her sides, Kristin turned and walked away.")
    scene bg 04_kristin_walks_away with dissolve
    play sound "audio/prologue/sfx/kristin_walks_away.ogg"
    # pause 5.0
    $ narr("Her footsteps echoed faintly down the underground tunnel—slow and hesitant.")

    scene bg tiangho_underground_1 with dissolve
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)

    # Reframe: boy to center as dominant figure after Kristin leaves.
    show boy_aldorith neutral at top:
        speaking
        step_forward

    # Girl enters from the left and flips to face right (default is left-facing).
    show girl_aldorith neutral at topleft:
        breathing
    with dissolve

    # Final narration beat with dim-and-undim rule.

    $ narr("The two Aldoriths watched her disappear into the dark before exchanging a glance.")

    #hide boy_aldorith
    #hide girl_aldorith

    scene bg 05_looking_at_bodies with dissolve

    $ narr("Their gazes drifted to the lifeless forms behind them: the Queen of Tianho, regal even in death, and her two sons, wrapped in the stillness of final silence.")

    # -- new cinematic to work on: like the other rules, ensure that the animation/ vibe or whatever matches the dialogues --
    # start from here

    scene bg tiangho_underground_1 with dissolve
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)
    # Re-stage both Aldoriths for a focused two-shot.
    # Boy default faces right, so flip at top-right so he faces inward (toward left).
    show boy_aldorith neutral at topright:
        toggle_flip
        speaking
        breathing

    # Girl default faces left, so flip at top-left so she faces inward (toward right).
    show girl_aldorith neutral at topleft:
        listening
        breathing

    # boy aldorith takes top right position then flip.
    voice "audio/prologue/0016.ogg"
    boy_aldorith "{cps=30}That Kristin... soft-hearted as ever."

    # Swap speaker emphasis so the reply feels alive.
    show boy_aldorith neutral at topright:
        listening
        breathing
    show girl_aldorith neutral at topleft:
        speaking
        breathing

    ### voice "audio/prologue/0017.ogg" --> reserved for girl aldorith, but no voice yet
    girl_aldorith "{cps=30}She won’t last. We both know Father only kept her around to control Svante."

    # Cinematic illustration beat: burial tableau with somber grading and torch ambience.
    scene bg black_background with slow_dissolve
    show layer master at desaturate
    show layer master at slow_zoom_in
    show torch_flicker at torchlight_flicker


    # narrator part again with dim-and-undim rule
    $ narr("They moved wordlessly to the bodies, the ritual of burial unfolding with grim familiarity. Cloth unrolled. Blood wiped. Limbs bound with reverent efficiency.")

    $ narr("Their hands worked swiftly—mechanical, practiced—but there was a flicker of hesitation behind their eyes.")

    # End illustration beat and return to dialogue framing.
    hide torch_flicker
    show layer master at zoom_reset
    show layer master at normal_colors
    scene bg tiangho_underground_1 with dissolve
    show layer master at cold_underground
    show torch_flicker at torchlight_flicker
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)

    # show the boy aldorith at top right and the girl aldoirht at the top left
    show boy_aldorith neutral at topright:
        toggle_flip
        speaking
        breathing
    show girl_aldorith neutral at topleft:
        listening
        breathing
    voice "audio/prologue/0018.ogg"
    boy_aldorith "{cps=30}Why do you think Father really wanted them dead?"

    ### voice "audio/prologue/0019.ogg" for girl aldorith, but no voice yet
    show boy_aldorith neutral at topright:
        listening
        breathing
    show girl_aldorith neutral at topleft:
        speaking
        breathing
    girl_aldorith "{cps=30} I don’t know. And I really don’t plan to ask. Best not to chase answers when you’re already neck-deep in secrets."

    hide boy_aldorith
    hide girl_aldorith
    scene bg black_background with slow_dissolve
    show layer master at desaturate
    show layer master at slow_zoom_in
    show torch_flicker at torchlight_flicker

    # narrator beat with dim-and-undim rule

    $ narr("She reached for the Queen’s hand, cold and graceful, and began to wrap the burial cloth tight around her wrist.")
    hide torch_flicker
    show layer master at zoom_reset
    show layer master at normal_colors
    scene bg tiangho_underground_1 with dissolve
    show layer master at cold_underground
    show torch_flicker at torchlight_flicker
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)
    show boy_aldorith neutral at topright:
        toggle_flip
        speaking
        breathing
    show girl_aldorith neutral at topleft:
        listening
        breathing

    show layer master at cold_underground

    # Boy leads, still framed right-facing inward.
    show boy_aldorith neutral at topright:
        speaking
        breathing
    voice "audio/prologue/0020-1.ogg"
    boy_aldorith "{cps=30}This feels… different. We’ve carried out assassinations before, but never like this."
    voice "audio/prologue/0020-2.ogg"
    boy_aldorith "{cps=30}A queen. Two princes. Royals of Tianho."

    ### voice "audio/prologue/0021.ogg" for girl aldorith, but no voice yet
    show boy_aldorith neutral at topright:
        listening
        breathing
    show girl_aldorith neutral at topleft:
        speaking
        breathing
    girl_aldorith "{cps=30}Exactly why we need to hurry. If anyone finds out what’s buried down here—before the earth swallows it whole—we’re finished."

    # Bring a slight tension shake under the next line.
    show layer master at impact_shake
    show boy_aldorith neutral at topright:
        speaking
        breathing
    voice "audio/prologue/0022.ogg"
    boy_aldorith "{cps=30}Still… Svante didn’t even blink. Just walked in and—"

    ### voice "audio/prologue/0023.ogg" for girl aldorith, but no voice yet
    show boy_aldorith neutral at topright:
        listening
        breathing
    show girl_aldorith neutral at topleft:
        speaking
        looming
    girl_aldorith "{cps=30}Cold as stone. That’s why he’s Father’s favorite. A metal channeler with no hesitation? That’s worth more than loyalty."
    
    ### voice "audio/prologue/0024.ogg" for girl aldorith, but no voice yet
    # Add a faint danger tint for the insult beat, then keep both sprites visible.
    show layer master at danger_tint
    show girl_aldorith neutral at topleft:
        speaking
        breathing
    girl_aldorith "{cps=30}Which is why he still keeps that skank Kristin…"

    hide boy_aldorith
    hide girl_aldorith

    scene bg black_background with dissolve

    $ narr("She tied the final knot, sealing the last shroud. The flickering torchlight danced across the linen, casting their silhouettes long and stretched across the stone.")

    scene bg tiangho_underground_1 with dissolve

    # Return color from danger tint before the closing line.
    show layer master at normal_colors
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)

    # go back to the characters.
    ### voice "audio/prologue/0025.ogg" for girl aldorith, but no voice yet
    show boy_aldorith neutral at topright:
        toggle_flip
        listening
        breathing
    show girl_aldorith neutral at topleft:
        speaking
        breathing
    girl_aldorith "{cps=30}And you should remember that."

    # here is the demonstration of silence, no dialogue, just breathing for a moment then the narrator.
    pause 0.6

    $ narr("A breath passed between them.")

    # apply a quick display of pressure here with filters and shit and other cinematic shit.
    # Build pressure with desaturation + darkening + camera pulse + heavy shake.
    show layer master at losing_color
    show tension_overlay at truecenter with dissolve:
        alpha 0.12
    show layer master at quick_zoom
    show layer master at screen_shake_heavy


    $ narr("A pressure, subtle at first, then sudden and suffocating, pressed down on the tunnel.")

    play ambience "audio/ambience/panic_start_ambience_cave.ogg"


    $ narr("The torches guttered, flames trembling like they, too, felt the change.")

    # Pressure escalates after the narration beat.
    show tension_overlay at truecenter with Dissolve(0.2):
        alpha 0.22
    show layer master at desaturate
    show layer master at quick_zoom
    show layer master at screen_shake_heavy
    with vpunch
    pause 0.2
    show layer master at screen_shake_heavy
    with hpunch
    pause 0.2
    show layer master at impact_shake
    pause 0.2
    
    show layer master at screen_shake_heavy

    # Look away from each other
    show boy_aldorith neutral at topright:
        toggle_flip_anim
    pause 0.1
    show girl_aldorith neutral at topleft:
        toggle_flip_anim
    with hpunch
    pause 0.15

    boy_aldorith "{cps=30}D-Do you feel that?"
    play sound "audio/prologue/sfx/shriek.ogg"
    pause 0.3
    show layer master at screen_shake_heavy
    with hpunch
    pause 0.25
    show layer master at impact_shake
    pause 0.2

    girl_aldorith "{cps=30}Did you hear that?"


    $ narr("A shriek—deep, guttural, wrong—ripped through the silences.")

    # Wall fractures under pressure: black flickers + escalating tremors.
    scene bg 06_wall_crack with hard_cut
    show layer master at desaturate
    show tension_overlay at truecenter:
        alpha 0.0

    play sound "audio/prologue/sfx/earthquake_sounds.ogg"

    # Flicker-to-black pulses while the chamber convulses.
    show tension_overlay at truecenter:
        alpha 0.0
        linear 0.05 alpha 0.72
        linear 0.06 alpha 0.0
        linear 0.05 alpha 0.64
        linear 0.06 alpha 0.0
        linear 0.05 alpha 0.82
        linear 0.05 alpha 0.0

    show layer master at screen_shake_heavy
    with hpunch
    pause 0.12
    show layer master at screen_shake_heavy
    with vpunch
    pause 0.1
    show layer master at impact_shake
    with hpunch
    pause 0.27
    stop sound fadeout 1.5

    # Last pre-impact shake lands with a hard blackout pulse.
    show tension_overlay at truecenter with Dissolve(0.08):
        alpha 0.92
    show layer master at screen_shake_heavy
    with hpunch
    pause 0.08
    show tension_overlay at truecenter with Dissolve(0.06):
        alpha 0.0

    # Explosion breach.
    scene bg 07_wall_explodes with hard_cut
    play sound "audio/prologue/sfx/wall_explodes.ogg"
    show white_flash at truecenter, flash_effect
    show layer master at impact_shake
    with vpunch

    $ narr("The wall exploded inward, a mass of claws, horns, and red-hot eyes surging forward. The Yaoguai King emerged from the rubble, obsidian-scaled and crowned in bone, the shadows clinging to his form like loyal hounds.")

    # Reveal frame of the Yaoguai King holding the breach.
    scene bg 08_yaoguai_king with slow_dissolve
    # Pressure beat: oppressive darkness + slow danger flicker, no camera zoom.
    show dark_overlay at truecenter with dissolve:
        alpha 0.33
    show tension_overlay at truecenter:
        alpha 0.08
        linear 0.75 alpha 0.2
        linear 0.95 alpha 0.1
        linear 0.8 alpha 0.24
        linear 0.9 alpha 0.12
        repeat
    yaoguai_king "{cps=30}You bury corpses… while your own hearts still beat? How generous. More for my yaoguai to feed on."

    hide tension_overlay with dissolve
    show layer master at normal_colors
    girl_aldorith "Enoch above…"

    scene bg tiangho_underground_1 with hard_cut
    show layer master at cold_underground
    show torch_flicker at torchlight_flicker
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)

    show girl_aldorith neutral at topleft:
        breathing_nervous
    show boy_aldorith neutral at top:
        step_forward
        breathing_nervous
    with dissolve

    show layer master at impact_shake
    with hpunch
    boy_aldorith "{cps=30}Sister, run!! I’ll hold him off-!"

    # Panic exit: she bolts right while he braces in place.
    show girl_aldorith neutral at topleft:
        flinch
        breathing_nervous
    hide girl_aldorith with dissolve

    show boy_aldorith neutral at top:
        step_forward
        tremble

    show layer master at screen_shake_heavy
    with vpunch

    $ narr("He slammed his palm to the ground, trying to channel earth. A ripple of stone shifted—but it was too late.")
    show layer master at impact_shake
    with hpunch

    # Reset to void for speed-feint assault framing.
    scene bg black_background with hard_cut
    hide torch_flicker
    hide boy_aldorith
    show layer master at desaturate
    show tension_overlay at truecenter:
        alpha 0.08

    # Full-body silhouette blinks around the chamber while closing distance.
    show yaoguai_king neutral at top:
        xoffset -620
        zoom 0.84
        alpha 0.0
        linear 0.05 alpha 1.0


    $ narr("The Yaoguai King blurred. One moment he was across the chamber—")

    hide yaoguai_king with Dissolve(0.06)
    show white_flash at truecenter, flash_effect
    show yaoguai_king neutral at top:
        xoffset 520
        zoom 0.92
        alpha 0.0
        linear 0.04 alpha 1.0
    with hpunch
    pause 0.08

    hide yaoguai_king with Dissolve(0.05)
    show yaoguai_king neutral at top:
        xoffset -180
        zoom 1.0
        alpha 0.0
        linear 0.03 alpha 1.0
    with vpunch
    pause 0.07

    hide yaoguai_king with Dissolve(0.04)
    show yaoguai_king neutral at top:
        xoffset 0
        zoom 1.1
        alpha 0.0
        linear 0.03 alpha 1.0
    show layer master at impact_zoom


    $ narr("The next, he was upon them.")
    hide tension_overlay with dissolve
    show layer master at normal_colors

    # Girl runs in from left, reaches center, then impact interruption.
    scene bg tiangho_underground_1 with hard_cut
    show layer master at cold_underground
    show torch_flicker at torchlight_flicker
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)

    show girl_aldorith neutral at offscreenleft:
        breathing_nervous
    show girl_aldorith neutral at top with ease:
        breathing_nervous
    pause 0.1
    show layer master at impact_shake
    with hpunch

    # Hard reset to void framing; keep girl at center, reveal Yaoguai behind her with flicker.
    scene bg black_background with hard_cut
    hide torch_flicker
    show layer master at desaturate
    show tension_overlay at truecenter:
        alpha 0.08

    show girl_aldorith neutral at top zorder 3:
        zoom 0.7
        yanchor 1.0
        yalign 1.0
        tremble

    show tension_overlay at truecenter:
        alpha 0.08
        linear 0.06 alpha 0.4
        linear 0.07 alpha 0.08
        linear 0.05 alpha 0.48
        linear 0.07 alpha 0.1

    show yaoguai_king neutral at top zorder 1:
        alpha 0.0
        linear 0.04 alpha 1.0

    # Attack presence spike before contact.
    show layer master at impact_shake
    with hpunch
    show layer master at screen_shake_light
    with hpunch
    girl_aldorith "{cps=15}AHHH!!! NO!!!"

    # Tear hit + violent throw offscreen.
    show red_flash at truecenter, flash_effect
    show layer master at impact_shake
    with hpunch
    show layer master at screen_shake_heavy
    with vpunch
    hide girl_aldorith with dissolve


    $ narr("His claws tore through the air and the girl aldorith fell, her body thudding against the stone in a lifeless heap.")

    # Return underground for the boy's reaction.
    scene bg tiangho_underground_1 with hard_cut
    hide tension_overlay
    hide yaoguai_king
    show layer master at cold_underground
    show torch_flicker at torchlight_flicker
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)
    show boy_aldorith neutral at top with dissolve:
        tremble
        breathing_nervous
    show layer master at impact_shake
    with hpunch
    boy_aldorith "{cps=30}Sister!!"

    # Snap back to black; Yaoguai flickers in center for the threat line.
    scene bg black_background with hard_cut
    hide torch_flicker
    hide boy_aldorith
    show layer master at desaturate
    show tension_overlay at truecenter:
        alpha 0.12

    show yaoguai_king neutral at top:
        alpha 0.0
        linear 0.04 alpha 1.0
    with hpunch
    yaoguai_king "{cps=30}Your turn, little one…"

    # Quick timed choice: if time runs out, one option is picked at random.
    $ prologue_qte_choice = renpy.call_screen(
        "timed_dual_qte",
        option_top_text="Try to raise a stone wall.",
        option_top_value="stone_wall",
        option_bottom_text="Dash toward the entrance of the burial tunnel.",
        option_bottom_value="dash_tunnel",
        timeout_seconds=3.0,
        prompt_speaker="Boy Aldorith",
        prompt_text="What should I do?",
    )

    if prologue_qte_choice == "stone_wall":
        hide tension_overlay with dissolve
        hide yaoguai_king


        $ narr("He dropped to one knee, forcing all his will into the trembling ground.")
    
        scene bg 09_wall_rising with hard_cut
        show layer master at desaturate
        show tension_overlay at truecenter:
            alpha 0.0
        show dark_overlay at truecenter with dissolve:
            alpha 0.32
        boy_aldorith "{cps=30}Come on, come on—!"


        $ narr("A slab of earth surged upward between him and the Yaoguai King.")

        # Mirror earlier breach intensity: tremor + blackout flicker + quake SFX.
        play sound "audio/prologue/sfx/earthquake_sounds.ogg"
        show tension_overlay at truecenter:
            alpha 0.0
            linear 0.05 alpha 0.72
            linear 0.06 alpha 0.0
            linear 0.05 alpha 0.64
            linear 0.06 alpha 0.0
            linear 0.05 alpha 0.82
            linear 0.05 alpha 0.0
        show layer master at screen_shake_heavy
        with hpunch
        pause 0.12
        show layer master at screen_shake_heavy
        with vpunch
        pause 0.1
        show layer master at impact_shake
        with hpunch
        $ narr("Then—CRACK!")

        stop sound fadeout 1.5
        show tension_overlay at truecenter with Dissolve(0.08):
            alpha 0.92
        show layer master at screen_shake_heavy
        with hpunch
        pause 0.08
        show tension_overlay at truecenter with Dissolve(0.06):
            alpha 0.0
    
        scene bg 10_wall_broken with hard_cut
        play sound "audio/prologue/sfx/wall_explodes.ogg"
        show layer master at screen_shake_heavy
        with vpunch
        show white_flash at truecenter, flash_effect

        $ narr("A single claw punctured through the wall—then shattered it in one swipe. The force sent him flying, crashing against the tunnel wall.")
    
        # Boy is launched across frame on a black impact stage.
        scene bg black_background with hard_cut
        show layer master at desaturate
        show red_flash at truecenter, flash_effect

        boy_aldorith "{cps=30}ARGHH!!!"

        show layer master at screen_shake_heavy
        with hpunch
        show layer master at screen_shake_heavy
        with vpunch
        show red_flash at truecenter, flash_effect

        $ narr("His ribs burned. Blood filled his mouth.")
    
        boy_aldorith "{cps=30}—gkkhh—!"

        $ narr("He collapsed.")

    elif prologue_qte_choice == "dash_tunnel":
        hide tension_overlay with dissolve
        hide yaoguai_king

        # Running sequence on black stage.
        scene bg black_background with hard_cut
        hide torch_flicker
        show layer master at desaturate


        $ narr("He bolted down the side corridor, heart hammering.")
        boy_aldorith "{cps=30}Come on… Come on…"


        $ narr("The Yaoguai King snarled—and gave chase.")
        yaoguai_king "{cps=30}Running away from me? Pathetic."


        $ narr("He didn’t make it ten steps.")
        $ narr("Too fast.")
    
        # Slash beat: Yaoguai behind, boy in front, then strike and fall.
        hide yaoguai_king
        show boy_aldorith neutral at top zorder 3:
            toggle_flip
            zoom 0.7
            yanchor 1.0
            yalign 1.0
            tremble
        show yaoguai_king neutral at top zorder 1:
            alpha 0.0
            linear 0.04 alpha 1.0

        show layer master at impact_shake
        with hpunch
        show red_flash at truecenter, flash_effect
        show layer master at screen_shake_heavy
        with vpunch
        show red_flash at truecenter, flash_effect
        hide boy_aldorith with dissolve


        $ narr("A blur. A slash. A body fell.")
    
        # End on blood tint.
        show layer master at danger_tint

    # Prologue closing beat.
    scene bg black_background with dissolve

    $ narr("Silence returned—oppressive and final.")
    $ narr("The Yaoguai King stood among the dead. His eyes drifted to the bodies wrapped in burial cloth: a queen and two princes, now claimed by darkness.")
    $ narr("He inhaled deeply, tasting the air.")

    scene bg tiangho_underground_1 with dissolve
    show layer master at cold_underground
    show bg tiangho_underground_1 at bg_focus_clear
    pause 0.2
    show bg tiangho_underground_1 at bg_focus_blur with Dissolve(0.2)
    show yaoguai_king neutral at top with dissolve:
        breathing

    yaoguai_king "{cps=30}Three royal corpses, wrapped so lovingly… yet buried in secret…"
    yaoguai_king "{cps=30}And not a whisper in the winds? No fanfare. No grief. No mourning bells."


    $ narr("His eyes narrowed. Slowly, he stepped closer to the bodies, talons clicking against the stone.")

    yaoguai_king "{cps=30}That old man… What are you plotting?"


    $ narr("He leaned down, baring rows of jagged teeth.")

    yaoguai_king "{cps=30}Tianho… it seems your game has begun again. And I’ve always loved a good hunt."

    scene bg black_background with fade_black
    $ narr("Chapter 1 Starts", alpha=0.65)
    jump chapter_01_part_1

