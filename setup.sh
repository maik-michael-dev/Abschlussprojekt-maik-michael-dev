#!/bin/bash

# Farben für Output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🏠 Kopiere Bungalow-Projekt Dateien...${NC}\n"

# Basis-Pfade
SOURCE_DIR="/home/dci-student/Dokumente/Abschlussprojekt"
TARGET_DIR="/home/dci-student/Dokumente/Bungalow-Komplett"

# Erstelle Bilder-Ordner falls nicht vorhanden
mkdir -p "$TARGET_DIR/assets/images"

# Kopiere HTML und CSS Dateien von jedem Ordner
echo -e "${GREEN}📄 Kopiere Front-Ansicht...${NC}"
if [ -d "$SOURCE_DIR/Front-Ansicht" ]; then
    cp "$SOURCE_DIR/Front-Ansicht/index.html" "$TARGET_DIR/views/front.html" 2>/dev/null
    cp "$SOURCE_DIR/Front-Ansicht/style.css" "$TARGET_DIR/assets/css/front.css" 2>/dev/null
fi

echo -e "${GREEN}📄 Kopiere Rückseite...${NC}"
if [ -d "$SOURCE_DIR/Rückseite" ]; then
    cp "$SOURCE_DIR/Rückseite/index.html" "$TARGET_DIR/views/back.html" 2>/dev/null
    cp "$SOURCE_DIR/Rückseite/style.css" "$TARGET_DIR/assets/css/back.css" 2>/dev/null
fi

echo -e "${GREEN}📄 Kopiere Rechte Ansicht...${NC}"
if [ -d "$SOURCE_DIR/Rechte-Ansicht" ]; then
    cp "$SOURCE_DIR/Rechte-Ansicht/index.html" "$TARGET_DIR/views/right-side.html" 2>/dev/null
    cp "$SOURCE_DIR/Rechte-Ansicht/style.css" "$TARGET_DIR/assets/css/right-side.css" 2>/dev/null
fi

echo -e "${GREEN}📄 Kopiere Dach...${NC}"
if [ -d "$SOURCE_DIR/Dach" ]; then
    cp "$SOURCE_DIR/Dach/index.html" "$TARGET_DIR/views/roof.html" 2>/dev/null
    cp "$SOURCE_DIR/Dach/style.css" "$TARGET_DIR/assets/css/roof.css" 2>/dev/null
fi

echo -e "${GREEN}📄 Kopiere Innenansicht...${NC}"
if [ -d "$SOURCE_DIR/Innenansicht" ]; then
    cp "$SOURCE_DIR/Innenansicht/index.html" "$TARGET_DIR/views/interior.html" 2>/dev/null
    cp "$SOURCE_DIR/Innenansicht/style.css" "$TARGET_DIR/assets/css/interior.css" 2>/dev/null
fi

# Erstelle Platzhalter für Pool und Pergola falls nicht vorhanden
echo -e "${GREEN}📄 Erstelle Pool-Seite...${NC}"
if [ ! -f "$TARGET_DIR/views/pool.html" ]; then
    cat > "$TARGET_DIR/views/pool.html" << 'EOF'
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swimmingpool - Bungalow</title>
    <link rel="stylesheet" href="../assets/css/main.css">
    <link rel="stylesheet" href="../assets/css/pool.css">
</head>
<body>
    <a href="../index.html" class="home-btn">🏠 Zurück zur Übersicht</a>
    
    <div class="view-container">
        <h2 style="color: white; font-size: 2rem;">🏊 Swimmingpool</h2>
        <div class="pool-container">
            <div class="pool">
                <div class="water"></div>
                <div class="ladder"></div>
            </div>
        </div>
    </div>

    <div class="navigation">
        <a href="back.html">◀ Rückseite</a>
        <span>|</span>
        <a href="pergola.html">Pergola ▶</a>
    </div>
</body>
</html>
EOF
fi

echo -e "${GREEN}📄 Erstelle Pergola-Seite...${NC}"
if [ ! -f "$TARGET_DIR/views/pergola.html" ]; then
    cat > "$TARGET_DIR/views/pergola.html" << 'EOF'
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pergola - Bungalow</title>
    <link rel="stylesheet" href="../assets/css/main.css">
    <link rel="stylesheet" href="../assets/css/pergola.css">
</head>
<body>
    <a href="../index.html" class="home-btn">🏠 Zurück zur Übersicht</a>
    
    <div class="view-container">
        <h2 style="color: white; font-size: 2rem;">🌿 Pergola</h2>
        <div class="pergola-container">
            <div class="pergola">
                <div class="roof-beams"></div>
                <div class="posts"></div>
            </div>
        </div>
    </div>

    <div class="navigation">
        <a href="pool.html">◀ Pool</a>
        <span>|</span>
        <a href="front.html">Front ▶</a>
    </div>
</body>
</html>
EOF
fi

# Erstelle CSS für Pool
cat > "$TARGET_DIR/assets/css/pool.css" << 'EOF'
body {
    background: linear-gradient(135deg, #0093E9 0%, #80D0C7 100%);
}

.pool-container {
    perspective: 1000px;
}

.pool {
    width: 500px;
    height: 300px;
    background: linear-gradient(to bottom, #4A90E2 0%, #003D82 100%);
    border-radius: 20px;
    position: relative;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    border: 8px solid #B8860B;
}

.water {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
        rgba(74, 144, 226, 0.8) 0%, 
        rgba(0, 61, 130, 0.9) 100%);
    border-radius: 12px;
    animation: ripple 3s infinite;
}

@keyframes ripple {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.02); opacity: 1; }
}

.ladder {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 40px;
    height: 150px;
    border: 3px solid silver;
    border-top: none;
    background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 25px,
        silver 25px,
        silver 28px
    );
}
EOF

# Erstelle CSS für Pergola
cat > "$TARGET_DIR/assets/css/pergola.css" << 'EOF'
body {
    background: linear-gradient(135deg, #8EC5FC 0%, #E0C3FC 100%);
}

.pergola-container {
    perspective: 1000px;
}

.pergola {
    width: 600px;
    height: 400px;
    position: relative;
    transform: rotateX(10deg);
}

.roof-beams {
    width: 100%;
    height: 30px;
    background: repeating-linear-gradient(
        90deg,
        #8B4513,
        #8B4513 40px,
        transparent 40px,
        transparent 60px
    );
    position: absolute;
    top: 0;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.posts {
    position: absolute;
    width: 100%;
    height: 100%;
}

.posts::before,
.posts::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 370px;
    background: linear-gradient(to right, #654321, #8B4513);
    top: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.posts::before {
    left: 50px;
}

.posts::after {
    right: 50px;
}
EOF

echo -e "\n${BLUE}📁 Kopiere Bilder...${NC}"
# Kopiere Bilder falls vorhanden
if [ -d "$SOURCE_DIR/../Bilder" ]; then
    cp -r "$SOURCE_DIR/../Bilder/"* "$TARGET_DIR/assets/images/" 2>/dev/null
    echo -e "${GREEN}✅ Bilder kopiert${NC}"
else
    echo -e "${BLUE}ℹ️  Kein Bilder-Ordner gefunden. Erstelle ihn manuell falls nötig.${NC}"
fi

echo -e "\n${GREEN}✅ Fertig! Öffne jetzt:${NC}"
echo -e "${BLUE}   $TARGET_DIR/index.html${NC}\n"
