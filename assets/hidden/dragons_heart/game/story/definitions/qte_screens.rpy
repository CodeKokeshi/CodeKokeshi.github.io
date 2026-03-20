## ─────────────────────────────────────────────────────────────────────────
## TIMED CHOICE / QTE SCREENS
## ─────────────────────────────────────────────────────────────────────────

transform qte_choice_top_motion:
    on show:
        alpha 0.0
        xoffset -120
        linear 0.16 alpha 1.0 xoffset 0
    on hide:
        linear 0.2 alpha 0.0 xoffset 1300


transform qte_choice_bottom_motion:
    on show:
        alpha 0.0
        xoffset 120
        linear 0.16 alpha 1.0 xoffset 0
    on hide:
        linear 0.2 alpha 0.0 xoffset -1300


screen timed_dual_qte(
    option_top_text,
    option_top_value,
    option_bottom_text,
    option_bottom_value,
    timeout_seconds=3.0,
    prompt_speaker="Boy Aldorith",
    prompt_text="What should I do?",
):
    modal True
    zorder 120

    key "dismiss" action NullAction()

    timer timeout_seconds action Return(option_bottom_value)

    add Solid("#00000055")

    vbox:
        xalign 0.5
        yalign 0.42
        spacing gui.choice_spacing

        textbutton option_top_text:
            style "choice_button"
            text_style "choice_button_text"
            at qte_choice_top_motion
            action Return(option_top_value)

        textbutton option_bottom_text:
            style "choice_button"
            text_style "choice_button_text"
            at qte_choice_bottom_motion
            action Return(option_bottom_value)

    # Native dialogue box at bottom (unnextable while this modal screen is open).
    window:
        id "window"
        style "window"

        if prompt_speaker is not None:
            window:
                id "namebox"
                style "namebox"
                text prompt_speaker id "who" style "say_label"

        text prompt_text id "what" style "say_dialogue"
