---
title: "Wie man Fotos aus alten 35-mm-Dias restauriert: KI-Verbesserung nach dem Scannen"
description: "Haben Sie Ihre alten 35-mm-Dias gescannt, aber die Bilder wirken verblasst, körnig oder unscharf? Dieser Leitfaden erklärt, wie KI-Restaurierungswerkzeuge wie ArtImageHub gescannte Dia-Aufnahmen ohne teure professionelle Dienste erheblich verbessern können."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya has spent 8 years helping families recover damaged and faded photographs using the latest AI restoration technology."
category: "How-To Guides"
tags: ["35mm Slides", "Photo Restoration", "AI Enhancement", "Slide Scanning", "Old Photos"]
image: "/blog/og-default.jpg"
coverColor: "#f5f0e8"
coverEmoji: "🖼️"
language: "de"
faq:
  - question: "Warum sehen gescannte 35-mm-Dias selbst bei einem guten Scanner verblasst oder ausgewaschen aus?"
    answer: "35-mm-Farbdias (Kodachrome, Ektachrome, Fujichrome) degradieren im Laufe der Jahrzehnte chemisch. Die drei Farbstoffschichten, die Farbe erzeugen, verblassen unterschiedlich schnell – Cyan-Farbstoffe neigen dazu, schneller zu verblassen als Magenta, welches wiederum schneller verblasst als Gelb. Das Ergebnis ist ein Farbungleichgewicht, das Dias orange, rot oder braun erscheinen lässt statt in ihren ursprünglichen Farben. Kodachrome-Dias aus den 1960er und 1970er Jahren gehören tatsächlich zu den stabilsten und lassen sich oft wunderschön einscannen, während Ektachrome aus derselben Epoche häufig einen starken Magenta- oder Cyan-Drift aufweist. Zusätzlich zur Farbdrift haben viele Dias Schimmelflecken entwickelt, Staub, der unter der Emulsion eingeschlossen ist, und Basisritzer, die sich direkt in den Scan übertragen. Ein Flachbettscanner mit Transparenzaufsatz erfasst all diese Schäden getreu – er korrigiert sie nicht. Deshalb sieht ein technisch guter Scan eines degradierten Dias ohne Nachbearbeitung immer noch schlecht aus."
  - question: "Mit welcher DPI sollte ich 35-mm-Dias für beste KI-Restaurierungsergebnisse einscannen?"
    answer: "Für 35-mm-Dias sollte man mit mindestens 2400 DPI scannen, idealerweise 3200 bis 4000 DPI. Ein 35-mm-Rahmen ist nur 36 mm x 24 mm groß – bei 2400 DPI ergibt das ein Bild von etwa 3400 x 2300 Pixeln, was KI-Tools wie Real-ESRGAN genug Ausgangsmaterial bietet. Beim Scannen unter 1200 DPI hat die KI-Restaurierung kaum etwas zum Hochskalieren – es entstehen starke Pixelation und verschmierte Details, unabhängig davon, wie gut das Restaurierungsmodell ist. Man sollte die ICE-Funktion (Image Correction and Enhancement) des Scanners nutzen, falls vorhanden, da sie Staub und Oberflächenkratzer optisch entfernt, bevor das Bild überhaupt digitalisiert wird. Keine eingebaute Schärfung oder Farbkorrektur des Scanners anwenden – den rohen Scan neutral durchlaufen lassen und dann die KI-Restaurierung auf die unbearbeitete Datei anwenden."
  - question: "Können KI-Tools den orangefarbenen oder magentafarbenen Farbstich korrigieren, der bei alten Dias häufig vorkommt?"
    answer: "Ja, mit einigen Einschränkungen. KI-Kolorierungsmodelle wie DDColor, das ArtImageHub verwendet, werden auf großen Datensätzen korrekt gefärbter Bilder trainiert und können oft plausible Farben rekonstruieren, selbst wenn der ursprüngliche Farbstoff stark verändert ist. Es gibt jedoch einen wichtigen Unterschied: KI-Kolorierung trifft eine fundierte Einschätzung darüber, welche Farben es hätten sein sollen – sie stellt die ursprünglichen Farbstoffe nicht wieder her. Bei Dias mit mäßigem Farbshift – dem typischen Orangestich eines alternden Ektachromes – sind KI-Ergebnisse oft nicht von einem korrigierten Original zu unterscheiden. Bei Dias, die fast alle Farbinformationen verloren haben, koloriert die KI im Wesentlichen von Grund auf neu – ähnlich wie bei der Kolorierung eines Schwarz-Weiß-Fotos. Das Ergebnis wird plausibel und oft schön aussehen, entspricht aber möglicherweise nicht dem, woran sich ein Beobachter, der damals dabei war, erinnern würde. Für die Verwendung als Familienerinnerungsstück ist das in der Regel völlig akzeptabel."
  - question: "Wie unterscheidet sich die KI-Verbesserung von der manuellen Korrektur von Dias in Lightroom oder Photoshop?"
    answer: "Die manuelle Korrektur in Lightroom umfasst das Anpassen des Weißabgleichs, das Anheben der Schatten, das Zurückziehen der Lichter und das Anwenden gezielter Farbverschiebungen – eine fachmännische Arbeit, die 15 bis 30 Minuten pro Dia dauern kann und Kenntnisse der Farbtheorie sowie der spezifischen Alterungsmerkmale jedes Filmtyps erfordert. KI-Tools wie ArtImageHub wenden neuronale Netzwerkmodelle an – Real-ESRGAN für die Hochskalierung, NAFNet für die Entrauschung, GFPGAN für die Gesichtsrekonstruktion – die auf Millionen von Bildpaaren trainiert wurden und komplexe, räumlich bewusste Korrekturen in unter 60 Sekunden durchführen können. Der Kompromiss ist die Kontrolle: Lightroom bietet präzise manuelle Steuerung; KI bietet Geschwindigkeit und ein gutes Ergebnis ohne technische Kenntnisse. Für die meisten Familien, die eine Schachtel geerbter Dias einscannen, ist der KI-Weg der praktische. Für einen professionellen Auftrag oder ein Archivprojekt, bei dem genaue Genauigkeit wichtig ist, ist die manuelle Korrektur durch einen Experten nach wie vor der Standard."
  - question: "Lohnt es sich, Dias zu Hause zu scannen, oder sollte ich einen professionellen Dienst nutzen?"
    answer: "Das heimische Scannen mit einem Flachbettscanner mit Transparenzaufsatz (Epson Perfection V600 ist die am häufigsten empfohlene Consumer-Option) liefert Ergebnisse, die für Familienarchive und das digitale Teilen hervorragend sind. Bei 3200 DPI ist die Qualität nach der KI-Verbesserung für Abzüge bis zu 20 mal 25 Zentimetern ausreichend. Professionelle Dia-Scan-Dienste wie ScanMyPhotos oder Legacybox bieten hochwertiges Trommelscanning bei sehr hohen DPI-Werten, das feinere Korndetails und subtile Schatteninformationen erfasst – relevant, wenn man große Abzüge anfertigen oder Bilder für Veröffentlichungen einreichen möchte. Für die meisten Menschen, die Dias für den persönlichen Gebrauch restaurieren, ist das heimische Scannen in Kombination mit der KI-Restaurierung bei ArtImageHub der kostengünstigste Workflow. Der einzige Bereich, in dem das professionelle Scannen klar vorne liegt, sind sehr wertvolle Dias – Originale der Pressefotografie, seltene historische Bilder oder Dias, bei denen eine maximale Auflösung benötigt wird."
---

Die meisten Menschen, die eine Sammlung von 35-mm-Dias erben, durchlaufen dieselbe Abfolge. Man begeistert sich für die Geschichte, die in diesen kleinen orangegerahmten Bildchen eingeschlossen ist, leiht oder kauft einen Scanner mit Transparenzaufsatz, digitalisiert eine Reihe von 40 oder 50 Dias – und dann öffnet man die Dateien und ist enttäuscht. Sie sehen ausgewaschen aus. Die Farben stimmen nicht. Gesichter sind unscharf und körnig. Die lebhaften Urlaubsbilder, die die Eltern beschrieben haben, sehen aus wie durch ein schmutziges Fenster fotografiert.

Das ist kein Scan-Fehler. Es ist das Ergebnis von 40 oder 50 Jahren chemischen Verfalls – und es ist behebbar.

## Warum sehen gescannte Dias selbst nach einem guten Scan so schlecht aus?

Ein 35-mm-Farb-Transparentbild ist kein Abzug – es ist der originale lichtempfindliche Film selbst, eingeschlossen zwischen zwei Glasscheiben oder Kartonrahmen. Im Gegensatz zu einem Papierdruck, der in einem Regal steht, wurden Dias oft in Kassetten oder Schachteln gelagert, in denen Temperatur und Feuchtigkeit über Jahrzehnte schwankten. Die drei Farbstoffschichten, die Vollfarbe erzeugen – Cyan, Magenta und Gelb – zerfallen nicht gleich schnell.

Ektachrome-Dias aus den 1960er und 1970er Jahren sind berüchtigt für ihren Magenta-Shift. Fujichrome aus den 1980er Jahren neigt manchmal zu einem starken Cyan-Stich. Selbst gut erhaltenes Kodachrome, einer der stabilsten Farbfilme aller Zeiten, kann Basisritzer und Staubverunreinigungen entwickeln, die sich direkt in den Scan übertragen.

Der Scanner macht seine Arbeit richtig, wenn er all diese Schäden getreu erfasst. Er ist eine Kamera, die auf ein beschädigtes Original gerichtet ist. Der Scan ist nicht das Problem – der Originalfilm ist es, und genau hier kommt die KI-Restaurierung ins Spiel.

## Was KI-Restaurierung tatsächlich mit einem Dia-Scan macht

Wenn man einen gescannten Dia zu [ArtImageHub](https://artimagehub.com) hochlädt, durchläuft das Bild mehrere neuronale Netzwerkmodelle in Folge, von denen jedes eine andere Klasse von Problemen behandelt.

**NAFNet** übernimmt die Entrauschung. Filmkorn in 35-mm-Dias wird auf Pixelebene nach dem Scannen sichtbar, besonders in Schattenbereichen. NAFNet identifiziert und glättet echtes Rauschen, während es strukturelle Kanten bewahrt – der Unterschied zwischen einem weich gerenderten Hintergrund und einer scharfen Motivkante bleibt erhalten, statt verschwommen zu werden.

**Real-ESRGAN** übernimmt die Hochskalierung. Selbst ein 3200-DPI-Scan eines 35-mm-Rahmens profitiert von der KI-Hochskalierung, die neue Details synthetisiert, anstatt einfach bestehende Pixel zu vergrößern. Feine Texturen, Gewebemuster, Haarsträhnen und Hintergrundlaub, die im Rohscan leicht unscharf wirken, lösen sich nach der Real-ESRGAN-Verarbeitung oft in merklich schärfere Details auf.

**GFPGAN** zielt speziell auf Gesichter ab. Das ist besonders wertvoll für Dia-Fotografie, wo Filmkorn und das kleine Bildformat bedeuten, dass Gesichter in Gruppenaufnahmen oft nur einige hundert Pixel groß sind. GFPGAN rekonstruiert Gesichtszüge mit einem auf Millionen von Gesichtsbildern trainierten Modell, schärft Augen, stellt Hauttonsdetails wieder her und rekonstruiert Merkmale, die im Original verschwommen oder verblasst sind.

**DDColor** adressiert den Farbshift. Anstatt eine pauschale Farbtonkorrektur anzuwenden (was Lightrooms Weißabgleich-Werkzeug tut), ist DDColor ein Kolorierungsmodell, das das gesamte Bild analysiert und plausible Farben für jeden Bereich rekonstruiert. Bei mäßig farbverschobenen Dias stellt es typischerweise etwas wieder her, das der ursprünglichen Farbpalette sehr nahe kommt. Bei stark verblassten Dias koloriert es im Wesentlichen von Grund auf – was schöne, natürlich wirkende Ergebnisse liefern kann, auch wenn sie technisch rekonstruiert statt wiederhergestellt sind.

## Dia-Scans vor dem Hochladen vorbereiten

Das Wirkungsvollste, was man tun kann, geschieht, bevor man ArtImageHub öffnet. Die Scanqualität setzt die Obergrenze dafür, was die KI-Restaurierung erreichen kann.

**Mit mindestens 2400 DPI scannen, 3200 bis 4000 DPI bevorzugt.** Ein 35-mm-Rahmen ist 36 mm x 24 mm groß. Bei 2400 DPI ergibt das etwa 3400 x 2300 Pixel – genug für die KI-Verarbeitung. Bei 1200 DPI hat man weniger als 900 x 600 Pixel, und Real-ESRGAN wird von fast nichts hochskalieren.

**ICE aktivieren, wenn der Scanner es unterstützt.** ICE (Image Correction and Enhancement) verwendet Infrarotlicht, um Staub und Oberflächenkratzer optisch zu erkennen und zu entfernen, bevor das Bild digitalisiert wird. Epsons V600 enthält diese Funktion. Sie reduziert erheblich den Aufwand der KI bei der Fleckenkorrektur.

**Keine scannerseitige Farbkorrektur oder Schärfung anwenden.** Den Rohscan in seinem wahren degradierten Zustand durchlaufen lassen. Überschärfte oder automatisch korrigierte Scans verwirren KI-Modelle manchmal, da sie Verarbeitungsartefakte einführen, die wie echte Details aussehen. Die Korrektur für die KI-Verarbeitung aufsparen.

**Als TIFF oder hochwertige JPEG exportieren.** TIFF bewahrt maximale Informationen. Bei Speicherplatzproblemen ist ein JPEG mit 95 % Qualität eine vernünftige Alternative. Keine stark komprimierten JPEGs mit 60 % oder weniger hochladen – Kompressionsartefakte werden Teil des "Schadens", den die KI umgehen muss.

## Schritt für Schritt: Vom Rohscan zum restaurierten Bild

1. Dias mit 3200 DPI scannen, ICE aktiviert, als TIFF exportieren.
2. Jede Datei öffnen und prüfen. Dias mit schweren physischen Schäden – Schimmel, Ritzer durch die Emulsion, vollständiger Farbverlust in großen Bereichen – sind es möglicherweise wert, übersprungen oder für professionelle Arbeit beiseitegelegt zu werden.
3. [artimagehub.com](https://artimagehub.com) aufrufen und den Scan hochladen.
4. Die für den Dia geeigneten Restaurierungsoptionen auswählen. Handelt es sich um einen Farbdia mit Farbshift, Kolorierung aktivieren. Sind Gesichter prominent, sollte die Gesichtsverbesserung (GFPGAN) standardmäßig aktiviert sein.
5. Das Ergebnis in der Vorschau prüfen. ArtImageHub bietet einen Vorher/Nachher-Vergleich, bevor man sich zum Herunterladen entscheidet.
6. Die einmalige Freischaltgebühr von 4,99 $ bezahlen und die vollständige HD-restaurierte Version herunterladen.

Die Gebühr von 4,99 $ fällt einmalig an – danach können so viele Fotos wie nötig in derselben Sitzung restauriert werden, oder man kann später ohne erneute Zahlung zurückkehren.

## Welche Ergebnisse kann man realistischerweise erwarten?

Bei Dias mit mäßiger Degradation – typischem Farbshift, Filmkorn, kleinen Oberflächenkratzern – liefert die KI-Restaurierung Ergebnisse, die die meisten Familien beeindruckend finden. Ein Dia, das schlammig orange aussah, wird zu einem natürlich aussehenden Foto. Gesichter, die verschwommen waren, lösen sich in erkennbare, scharfe Porträts auf.

Bei stark degradierten Dias – solchen mit großen Schimmelflecken, erheblichem Farbverlust über große Bereiche oder physischen Schäden wie starken Kratzern – verbessert die KI-Restaurierung das Bild erheblich, kann aber keine Informationen rekonstruieren, die wirklich verloren sind. Ein Dia, bei dem ein ganzes Gesicht durch Schimmel beschädigt wurde, wird durch KI allein kein vollständiges Gesicht erzeugen. Was KI tun kann, ist die umliegenden Bereiche dramatisch zu verbessern und gleichzeitig klar abzugrenzen, was verloren ist.

## Wann sollte man stattdessen einen professionellen Dienst in Betracht ziehen?

KI-Restaurierung bewältigt den Großteil typischer Dia-Degradation – Farbshift, Korn, geringere physische Schäden, Unschärfe vom kleinen Originalformat – besser, als die meisten Familien erwarten, und zu einem Bruchteil der professionellen Preise. Es gibt jedoch Fälle, in denen eine professionelle Restaurierung erwägenswert ist.

Bei Dias mit historischem oder monetärem Wert – Originale der Pressefotografie, seltene Dokumentarbilder, Dias bedeutender Ereignisse – stellt ein professioneller Scanner und die manuelle Restaurierung durch einen erfahrenen Retuscheur sicher, dass keine Entscheidungen durch Inference getroffen werden. Man erhält dokumentierte, nachvollziehbare Korrekturen statt KI-Rekonstruktion.

Für Familienarchive ist die Kombination aus heimischem Scannen und KI-Restaurierung bei [ArtImageHub](https://artimagehub.com) sowohl der schnellste als auch der wirtschaftlichste Weg, um diese Schachteln mit Dias in ein Format zu bringen, das die nächste Generation tatsächlich sehen und teilen kann.

## Restaurierte Dateien nach der Verarbeitung speichern

Sobald man hochwertige restaurierte Versionen der Dias hat, sollte man sie an mindestens zwei Orten speichern: einer lokalen Festplatte und einem Cloud-Backup. TIFF-Dateien aus einem 3200-DPI-Scan sind groß, aber die restaurierten JPEG-Ausgaben von ArtImageHub in voller HD-Auflösung sind in der Regel 2 bis 5 MB pro Bild – für die meisten Cloud-Speicherlösungen handhabbar.

Man sollte nach Jahrzehnt oder Anlass organisieren und den ursprünglichen, nicht restaurierten Scan neben der restaurierten Version aufbewahren. Zukünftige KI-Modelle werden wahrscheinlich noch besser sein als heutige, und das Vorhandensein des unbearbeiteten Originals bedeutet, dass die Restaurierung jederzeit mit neuen Werkzeugen erneut durchgeführt werden kann, ohne neu zu scannen.

Die 35-mm-Dias in der Kassette im Keller der Eltern sind nicht verloren. Sie brauchen nur die richtigen Werkzeuge, um wieder zum Leben zu erwachen.
