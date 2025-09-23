# Reflektion

## Övergripande insikter

### Modul eller app?
Jag har märkt att mitt tankesätt blivit mer riktat mot hur jag skulle vilja ha den färdiga produkten. I modulen bör exempelvis inte pulszoner ha en beskrivning, eller träningsplanen ha färdiga träningspass. Detta är något som programmeraren som använder modulen bör bestämma. Mina matematiska uträkningar i dessa funktioner är generella och beprövade så att alla kan använda dem, men beskrivningarna är exempelvis på engelska och redan där begränsar användningen till ett interface som är på engelska.

### Konkreta exempel
Funktionen `describePulseZones()` returnerar hårdkodade engelska beskrivningar som "Very light activity, helps with recovery". En bättre design hade varit att bara returnera rådata (min/max puls) och låta användaren av modulen bestämma beskrivningar.

## Namngivning (kapitel 2)

| Namn | Förklaring | Reflektion och regler från Clean Code |
|------|------------|---------------------------------------|
| FitnessAnalyzer.js | Klassnamn (var PulseCalculator) | Omdöpt från tidigare PulseCalculator, ju mer klassen växte desto mer otydligt blev det tidigare namnet. Det nya namnet beskriver bättre vad klassen faktiskt gör. För att "Avoid Disinformation" och istället "Use intention-Revealing Names" |
| createCompleteProfile() | Huvudmetod i FitnessAnalyzer | Metod som använder hjälpmetoder, namnbeskrivningen tycker jag är bra och beskrivande. Osäker på hur man ska tänka kring SRP här, metoden gör ju en sak (av många andra saker). |
| calculateMaxPulse() | Hjälpmetod i FitnessAnalyzer | Hjälpmetod som har tydligt namn, dock är det inte optimalt att blanda pulse/heartrate, jag har även en metod som räknar ut vilopuls som heter calculateRestingHeartRate(). Borde hålla mig till ett val i hur jag beskriver. För att följa samma stil skulle denna kunna döpas om till calculateMaxHeartRate(). |
| generateWeeklyRunningPlan() | Metod i TrainingPlanGenerator | Bra namngivning som tydligt beskriver vad metoden gör. Klassen har också tydligt namn som beskriver bra vad den gör. |
| calculatePace() | Metod i RunningCalculator | Tycker att dessa korta beräkningar har lite samma etikett, dem beskriver tydligt vad dem gör men samtidigt inte. Svårt att veta hur man skulle göra om dessa. Med tanke på att metoders namn endast ska beskriva vad dem gör och inte hur. Parametrarna dessa har skvallrar ju dock om hur. Jag tycker att det krockar lite med "Use intention-Revealing Names" och "Avoid Disinformation". En idé skulle vara att döpa om till calculatePaceFromDistanceAndTime(), å andra sidan beskriver den då både vad och hur den gör något. |

### Reflektion kapitel 2
Desto mer jag har reflekterat över namngivningar har jag märkt hur svårt det är att hitta namn som är både tydliga och bra. Pulse vs heartrate är ett bra exempel där jag borde valt en term och hållit mig till den. Jag har också insett att namn som känns tydliga när man skriver koden kan bli otydliga när modulen växer, som med PulseCalculator som blev FitnessAnalyzer.

Det är en svår balans eftersom jag tycker att det ofta blivit att jag övertänker valen av namn och ifrågasätter om det kanske finns ett ännu bättre namn. Lätt att fastna i ett letande efter det perfekta namnet som kanske egentligen inte existerar.

## Funktioner (kapitel 3)

| Metodnamn | Länk eller kod | Antal rader (ej ws) | Reflektion |
|-----------|----------------|---------------------|------------|
| generateWeeklyRunningPlan() | TrainingPlanGenerator.js | 85+ | Metoden i sig är inte optimal enligt clean code. Den är lång och har en del hårdkodat som inte är optimalt för återanvändning. Bryter tydligt mot Clean Code principen om små metoder "Small".  Den bryter även principen "Do One Thing", funktionen gör flera saker. Den bestämmer dagar, träningstyper och formaterar output. Detta skulle kunna brytas ut i mindre funktioner likt createCompleteProfile() men jag väljer att ha kvar denna som ett exempel. |
| createCompleteProfile() | FitnessAnalyzer.js | 12 | Namnet beskriver tydligt vad metoden gör och följer "Use Descriptive Names". Bra exempel på hur man kan göra en tydlig huvudmetod som ändå följer "Do One Thing". Den kombinerar hjälpmetoder för att skapa en komplett profil. |
| paceToSpeed() | RunningCalculator.js | 3 | Kort funktion som bara gör en matematisk beräkning. Följer principen om "Do One Thing" |
| estimateVO2Max() | FitnessAnalyzer.js | 3 | Tydligt namn och gör en sak vilket är en matematisk beräkning av VO2Max. Den följer både "Small" och "Do One Thing". |
| predictRaceTime() | RacePredictor.js | 15 | Bra och tydligt namn tycker jag. Metoden har många if-satser för olika distanser men gör ändå bara en sak vilket är att den förutsäger tid baserat på tidigare prestationer. |

### Reflektion kapitel 3
Den stora skillnaden mellan mina metoder är längden och komplexiteten. generateWeeklyRunningPlan() sticker ut då den är lång, har mycket hårdkodad logik och gör egentligen flera saker samtidigt. Samtidigt har jag metoder som estimateVo2Max() som är mycket kortare och tydligare.

Jag har en del funktioner som gör beräkningar där distans och fart räknas i kilometer, jag har inget som koverterar till miles vilket skulle vara något för vidareutveckling. Detta var något som jag inte tänkte alls på i början men att bara ha det begränsat till kilometer kan möjligvis begräna återanvändbarheten. 