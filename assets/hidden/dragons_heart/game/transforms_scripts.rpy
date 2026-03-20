init python:
    # 1. The Logic (Standard Toggle)
    def flip_logic(trans, st, at):
        current_xzoom = trans.xzoom if trans.xzoom not in (None, 0.0) else 1.0
        trans.xzoom = -1.0 if current_xzoom > 0.0 else 1.0
        return None

    # 2. The Animated Logic
    def flip_anim_logic(trans, st, at):
        duration = 0.2

        if not hasattr(trans, "_flip_anim_initialized"):
            trans._flip_anim_initialized = True
            start_xzoom = trans.xzoom if trans.xzoom not in (None, 0.0) else 1.0
            trans._flip_anim_start = start_xzoom
            trans._flip_anim_end = -1.0 if start_xzoom > 0.0 else 1.0

        progress = st / duration if duration > 0.0 else 1.0
        if progress > 1.0:
            progress = 1.0

        trans.xzoom = trans._flip_anim_start + (trans._flip_anim_end - trans._flip_anim_start) * progress

        if progress < 1.0:
            return 0.0

        return None

# The Instant Toggle
transform toggle_flip: # call this method for instant flip (no animation)
    function flip_logic

# The Animated Toggle
transform toggle_flip_anim: # call this method for animated flip
    function flip_anim_logic