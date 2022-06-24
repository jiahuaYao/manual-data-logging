def on_button_pressed_a():
    basic.show_icon(IconNames.HEART)
    datalogger.log(datalogger.create_cv("sound", input.sound_level()),
        datalogger.create_cv("light", input.light_level()))
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

datalogger.set_column_titles("sound", "light")