## Rename Page Shortcut plugin for Logseq

This [Logseq](https://github.com/logseq/logseq) plugin registers a keyboard shortcut to rename the current page. The default shortcut is 'Cmd/Ctrl+Shift+t'. Hitting the shortcut effectively puts the cursor into the page title, enabling the user to edit or copy the page title using the keyboard alone.

The implementation registers a new shortcut in Logseq and simply emulates the otherwise necessary mouse click into the title when the shortcut is triggered.
