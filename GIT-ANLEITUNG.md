# Git-Anleitung für Bungalow-Komplett

## Repository initialisieren

```bash
cd /home/dci-student/Dokumente/Bungalow-Komplett

# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Bungalow Komplett Projekt mit allen Ansichten"
```

## Auf GitHub hochladen

### 1. Erstelle ein neues Repository auf GitHub
- Gehe zu https://github.com
- Klicke auf "New Repository"
- Name: `bungalow-komplett`
- Beschreibung: "Interaktives 3D-Bungalow Projekt mit Pool und Pergola"
- Klicke auf "Create repository"

### 2. Verknüpfe lokales Repo mit GitHub

```bash
# Füge Remote-Repository hinzu (ersetze USERNAME mit deinem GitHub-Namen)
git remote add origin https://github.com/USERNAME/bungalow-komplett.git

# Push zum GitHub
git branch -M main
git push -u origin main
```

## Spätere Updates

```bash
# Änderungen hinzufügen
git add .

# Commit erstellen
git commit -m "Beschreibung der Änderungen"

# Zu GitHub pushen
git push
```

## .gitignore erstellen

Erstelle eine `.gitignore` Datei:

```
# OS Files
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/

# Temp files
*.tmp
*.log
```
