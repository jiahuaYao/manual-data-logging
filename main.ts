input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    datalogger.log(
    datalogger.createCV("sound", input.soundLevel()),
    datalogger.createCV("light", input.lightLevel())
    )
    basic.clearScreen()
})
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
datalogger.setColumnTitles(
"sound",
"light"
)
