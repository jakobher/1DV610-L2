# Reflektion

## Övergripande insikter

### Modul eller app?
Jag har märkt att mitt tankesätt blivit mer riktat mot hur jag skulle vilja ha den färdiga produkten. I modulen bör exempelvis inte pulszoner ha en beskrivning, eller träningsplanen ha färdiga träningspass. Detta är något som programmeraren som använder modulen bör bestämma. Mina matematiska uträkningar i dessa funktioner är generella och beprövade så att alla kan använda dem, men beskrivningarna är exempelvis på engelska och redan där begränsar användningen till ett interface som är på engelska.

### Konkreta exempel
Funktionen `describePulseZones()` returnerar hårdkodade engelska beskrivningar som "Very light activity, helps with recovery". En bättre design hade varit att bara returnera rådata (min/max puls) och låta användaren av modulen bestämma beskrivningar.