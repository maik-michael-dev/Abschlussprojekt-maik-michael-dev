# 🏠 Bungalow Komplett - Projekt

Ein interaktives 3D-Bungalow Projekt mit allen Ansichten, Swimmingpool und Pergola.

## 📁 Projektstruktur

```
Bungalow-Komplett/
├── index.html              # Hauptstartseite mit Navigation
├── assets/
│   ├── css/
│   │   ├── main.css       # Gemeinsame Styles
│   │   ├── left-side.css
│   │   ├── front.css
│   │   ├── back.css
│   │   ├── right-side.css
│   │   ├── roof.css
│   │   ├── interior.css
│   │   ├── pool.css
│   │   └── pergola.css
│   ├── images/            # Alle Bilder hier ablegen
│   └── js/                # JavaScript Dateien
└── views/
    ├── all-views.html     # Alle Ansichten auf einer Seite
    ├── front.html
    ├── left-side.html
    ├── right-side.html
    ├── back.html
    ├── roof.html
    ├── interior.html
    ├── pool.html
    └── pergola.html
```

## 🚀 Installation & Verwendung

### Methode 1: Bestehende Dateien kopieren

1. Kopiere alle Dateien aus deinen einzelnen Ordnern nach `Bungalow-Komplett/views/`
2. Kopiere alle Bilder nach `assets/images/`
3. Passe die Bildpfade in den CSS-Dateien an

### Methode 2: Automatisches Kopieren (empfohlen)

Führe diese Befehle aus:

```bash
# Wechsle in dein Abschlussprojekt
cd /home/dci-student/Dokumente/Abschlussprojekt

# Kopiere alle HTML-Dateien
cp Front-Ansicht/index.html ../Bungalow-Komplett/views/front.html
cp Rückseite/index.html ../Bungalow-Komplett/views/back.html
cp Rechte-Ansicht/index.html ../Bungalow-Komplett/views/right-side.html
cp Dach/index.html ../Bungalow-Komplett/views/roof.html

# Falls vorhanden: Pool und Pergola
# cp Pool/index.html ../Bungalow-Komplett/views/pool.html
# cp Pergola/index.html ../Bungalow-Komplett/views/pergola.html
```

## 🎨 Anpassungen

### Bildpfade ändern

In den CSS-Dateien, ändere:
```css
/* ALT */
background: url(../Bilder/holzfassade.jpg);

/* NEU */
background: url(../assets/images/holzfassade.jpg);
```

### Navigation anpassen

Jede View-Seite hat eine Navigation am unteren Rand. Passe sie nach Bedarf an.

## 📱 Features

✅ Zentrale Startseite mit allen Ansichten
✅ Navigation zwischen allen Seiten
✅ "Alle Ansichten auf einer Seite" - Übersichtsseite
✅ Responsive Design
✅ Moderne UI mit Hover-Effekten
✅ Gemeinsame CSS-Dateien

## 🔧 Nächste Schritte

1. ✅ Struktur erstellt
2. ⏳ Dateien aus einzelnen Repositories kopieren
3. ⏳ Bildpfade anpassen
4. ⏳ Alle CSS-Dateien für andere Ansichten erstellen
5. ⏳ Pool und Pergola hinzufügen
6. ⏳ Testen im Live Server

## 📞 Hilfe

Bei Fragen oder Problemen, einfach nachfragen! 😊
