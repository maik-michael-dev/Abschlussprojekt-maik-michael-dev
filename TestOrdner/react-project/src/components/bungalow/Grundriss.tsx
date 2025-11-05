import React, { useState } from 'react'
// function wird eingefügt, um einzelne objekte dar zu legen
export default function Grundriss() {

  //const [hovered, setHovered] = useState<string | null>(null)
  const [winterGrown, setWinterGrown] = useState(false)
  const [schlafGrown, setSchlafGrown] = useState(false)
  const [kuecheGrown, setKuecheGrown] = useState(false)
  //const [wohnGrown, setWohnGrown] = useState(false)
  //const [aquaGrown, setAquaGrown] = useState(false)
  //const [flurGrown, setFlurGrown] = useState(false)
  //const [badGrown, setBadGrown] = useState(false)
  //const [pergoGrown, setPergoGrown] = useState(false)

  function klickSchlafzimmer() {
    console.log("Schlafzimmer geklickt")
    setSchlafGrown(prev => !prev)
  }

  function klickKueche() {
    console.log("Küche geklickt")
    setKuecheGrown(prev => !prev)
  }
  function klickWohnzimmer() {
    console.log("Wohnzimmer geklickt")
    //setWohnGrown(prev => !prev)
  }

  function klickWintergarten() {
    console.log("Wintergarten geklickt")
    setWinterGrown(prev => !prev)
  }

  function klickAquarium() {
    console.log("Aquarium geklickt")
    //setAquaGrown(prev => !prev)
  }

  function klickFlur() {
    console.log("Flur geklickt")
    //setFlurGrown(prev => !prev)
  }

  function klickBad() {
    console.log("Bad geklickt")
    //setBadGrown(prev => !prev)
  }

  function klickPergola() {
    console.log("Pergola")
    //setPergoGrown(prev => !prev)
  }




  return (
    <div>

      <svg width="1400" height="1000" viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
            .wall { fill: #ffffff; stroke: #000000; stroke-width: 4; }
            .room-label { font-family: Arial, Helvetica, sans-serif; font-size: 14px; fill: #111; }
            .dim { font-family: Arial, Helvetica, sans-serif; font-size: 12px; fill: #333; }
            .thin { stroke: #333; stroke-width: 1; }
          `}
          </style>
        </defs>

        {/* Hauptleiste: 11 m x 3 m (oben) */}
        <rect className="wall" x="0" y="0" width="550" height="150" />

        {/* Schlafzimmer: 5 m x 3 m (links oben) 
        - onClick ist für die einzelnen Objekte separat zu zeigen-      
      */}

        {(() => {
  const orig = { x: 0, y: 0, w: 250, h: 150 }
  const scale = schlafGrown ? 2 : 1
  const w = orig.w * scale
  const h = orig.h * scale
  const x = orig.x - (w - orig.w) / 2
  const y = orig.y - (h - orig.h) / 2

  return (
    <g>
      <rect
        onClick={klickSchlafzimmer}
        id="schlafzimmer"
        x={x}
        y={y}
        width={w}
        height={h}
        fill={schlafGrown ? "#F0FFF0" : "#ffffff"}
        stroke={schlafGrown ? "#FF8C00" : "#228822"}
        strokeWidth={schlafGrown ? 4 : 2}
        style={{ cursor: 'pointer', transition: "all 200ms ease" }}
        role="button"
        tabIndex={0}
        onKeyDown={(e: React.KeyboardEvent<SVGRectElement>) => {
          if (e.key === 'Enter' || e.key === ' ') klickSchlafzimmer()
        }}
      />
      <text x={x + 10} y={y + 30} className="room-label">Schlafz.</text>
      <text x={x + 10} y={y + 50} className="dim">5 m × 3 m</text>
    </g>
  )
})()}


        {/* Küche: 3 m x 3 m (neben Schlafzimmer) */}
        <rect onClick={klickKueche} className="wall" x="250" y="0" width="150" height="150" />
        <text x="260" y="25" className="room-label">Küche</text>
        <text x="260" y="45" className="dim">3 m × 3 m</text>

 {(() => {
          const orig = { x: 250, y: 0, w: 150, h: 150 };
          const scale = kuecheGrown ? 2 : 1;
          const w = orig.w * scale;
          const h = orig.h * scale;
          const x = orig.x - (w - orig.w) / 2;
          const y = orig.y - (h - orig.h) / 2;

          return (
            <g>
              <rect
                onClick={klickKueche}
                id="kueche"
                x={x}
                y={y}
                width={w}
                height={h}
                fill={kuecheGrown ? "#FFFDE6" : "#ffffff"}
                stroke={kuecheGrown ? "#FF8C00" : "#000000"}
                strokeWidth={kuecheGrown ? 4 : 2}
                style={{ cursor: 'pointer', transition: "all 200ms ease" }}
                role="button"
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent<SVGRectElement>) => {
                  if (e.key === 'Enter' || e.key === ' ') klickKueche()
                }}
              />
              <text x={x + 10} y={y + 25} className="room-label">Küche</text>
              <text x={x + 10} y={y + 45} className="dim">3 m × 3 m</text>
            </g>
          )
        })()}
        {/* Küchentür */}
        <circle cx="250" cy="150" r="2.5" fill="#3B220F" style={{ cursor: 'pointer' }} />
        <line x1="250" y1="150" x2="295" y2="150" stroke="#5C3B1A" strokeWidth="3" />
        <path d="M295 150 A45 45 0 0 0 250 105" fill="none" stroke="#5C3B1A" strokeWidth="2" strokeDasharray="2,2" />
        <text x="255" y="160" className="room-label">Küchentür (90 cm)</text>

        {/* Schlafzimmertür */}
        <circle cx="245" cy="150" r="2.5" fill="#3B220F" style={{ cursor: 'pointer' }} />
        <line x1="245" y1="150" x2="200" y2="150" stroke="#5C3B1A" strokeWidth="3" />
        <path d="M200 150 A45 45 0 0 1 245 105" fill="none" stroke="#5C3B1A" strokeWidth="2" strokeDasharray="2,2" />
        <text x="205" y="160" className="room-label">Schlafzimmertür (90 cm)</text>

        {/* Bad: 3 m x 2 m (unter Schlafzimmer) */}
        <rect onClick={klickBad} className="wall" x="0" y="150" width="150" height="100" />
        <text x="10" y="190" className="room-label">Bad</text>
        <text x="10" y="210" className="dim">3 m × 2 m</text>

        {/* Badtür */}
        <circle cx="150" cy="200" r="2.5" fill="#3B220F" style={{ cursor: 'pointer' }} />
        <line x1="150" y1="200" x2="120" y2="200" stroke="#5C3B1A" strokeWidth="3" />
        <path d="M120 200 A30 30 0 0 1 150 170" fill="none" stroke="#5C3B1A" strokeWidth="2" strokeDasharray="2,2" />
        <text x="60" y="205" className="room-label">Badtür (60 cm)</text>

        {/* Pergola: 5 m x 3 m */}
        <rect onClick={klickPergola} x="0" y="250" width="250" height="150" fill="#F6F6F6" stroke="#ccc" strokeWidth="1" />
        <text x="10" y="275" className="room-label">Pergola</text>
        <text x="10" y="295" className="dim">5 m × 3 m</text>

        {/* Holzverbindung */}
        <rect x="250" y="300" width="50" height="100" fill="#8B5A2B" stroke="#5C3B1A" strokeWidth="2" />
        <text x="255" y="315" className="room-label">Holz-Boden-Verbindung-2</text>
        <text x="255" y="330" className="dim">1 m × 2 m</text>
        <rect x="250" y="250" width="100" height="50" fill="#8B5A2B" stroke="#5C3B1A" strokeWidth="2" />
        <text x="260" y="275" className="room-label">Holz-Boden-Verbindung-1</text>
        <text x="260" y="290" className="dim">2 m × 1 m</text>

        {/* Wohnzimmer (oben rechts): 3 m × 3 m */}
        <rect onClick={klickWohnzimmer} className="wall" x="400" y="0" width="150" height="150" />
        <text x="410" y="20" className="room-label">Wohnzimmer</text>
        <text x="410" y="40" className="dim">3 m × 3 m</text>

        {/* Wohnungstür */}
        <circle cx="395" cy="150" r="2.5" fill="#3B220F" style={{ cursor: 'pointer' }} />
        <line x1="395" y1="150" x2="350" y2="150" stroke="#5C3B1A" strokeWidth="3" />
        <path d="M350 150 A45 45 0 0 1 395 105" fill="none" stroke="#5C3B1A" strokeWidth="2" strokeDasharray="2,2" />
        <text x="360" y="160" className="room-label">Wohnzimmertür (90 cm)</text>

        {/* Eingang: rechts neben dem Bad (3 m × 2 m) */}
        <rect onClick={klickFlur} x="150" y="150" width="150" height="100" fill="#F6F6F6" stroke="#000" strokeWidth="2" />
        <text x="160" y="185" className="room-label">Eingang</text>
        <text x="160" y="205" className="dim">3 m × 2 m</text>

        {/* Eingangstür */}
        <circle cx="300" cy="250" r="2.5" fill="#3B220F" style={{ cursor: 'pointer' }} />
        <line x1="300" y1="250" x2="250" y2="250" stroke="#5C3B1A" strokeWidth="3" />
        <path d="M250 250 A50 50 0 0 1 300 200" fill="none" stroke="#5C3B1A" strokeWidth="2" strokeDasharray="2,2" />
        <text x="255" y="260" className="room-label">Eingangstür</text>

        {/* Aquarium: 1 m × 2 m direkt unter der Küche */}
        <rect onClick={klickAquarium} x="300" y="150" width="50" height="100" fill="#99DDFF" stroke="#0077AA" strokeWidth="2" />
        <text x="305" y="175" className="room-label">Aquarium</text>
        <text x="305" y="190" className="dim">1 m × 2 m</text>

        {/*Wintergarten: 4 m × 3 m unter dem Wohnzimmer */}
        {/*<rect onClick={klickWintergarten} id="wintergarten" x="350" y="150" width="200" height="150" fill="#E6FFE6" stroke="#228822" strokeWidth="2" />*/}
        {(() => {
          const orig = { x: 350, y: 150, w: 200, h: 150 }
          const scale = winterGrown ? 2 : 1
          const w = orig.w * scale
          const h = orig.h * scale
          const x = orig.x - (w - orig.w) / 2
          const y = orig.y - (h - orig.y) / 2

          return (
            <g>
              <rect
                onClick={klickWintergarten}
                id="wintergarten"
                x={x}
                y={y}
                width={w}
                height={h}
                fill="#E6FFE6"
                stroke={winterGrown ? "#FF8C00" : "#228822"}
                strokeWidth={winterGrown ? 4 : 2}
                style={{ cursor: 'pointer', transition: "all 200ms ease" }}
                role="button"
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent<SVGRectElement>) => {
                  if (e.key === 'Enter' || e.key === ' ') klickWintergarten()
                }}
              />
              <text x={x + 10} y={y + 30} className="room-label">Wintergarten</text>
              <text x={x + 10} y={y + 50} className="dim">4 m × 3 m</text>
            </g>
          )
        })()}


        {/* Hilfsachsen / Maße */}
        <line className="thin" x1="0" y1="470" x2="550" y2="470" />
        <line className="thin" x1="0" y1="465" x2="0" y2="475" />
        <line className="thin" x1="550" y1="465" x2="550" y2="475" />
        <text x="260" y="490" className="dim">Gesamtlänge 11 m</text>
        <line className="thin" x1="630" y1="0" x2="630" y2="450" />
        <line className="thin" x1="625" y1="0" x2="635" y2="0" />
        <line className="thin" x1="625" y1="450" x2="635" y2="450" />
        <text x="640" y="230" className="dim" transform="rotate(90 640,230)">Max. Tiefe 6 m (Wohnzimmer)</text>

        {/* Kleine Beschriftungen bei Raumgrenzen (m) */}
        <text x="125" y="140" className="dim">5 m</text>
        <text x="325" y="140" className="dim">3 m</text>
        <text x="475" y="140" className="dim">3 m</text>
        <text x="525" y="140" className="dim">1 m</text>
        <text x="525" y="320" className="dim">3 m</text>

        {/* Skala unten links */}
        <rect x="10" y="420" width="150" height="30" fill="#fff" stroke="#ccc" />
        <text x="15" y="440" className="dim">Maßstab: 50 px = 1 m</text>

        {/* Button: Tür-öffnen (statisch, ohne Funktion) */}
        <rect x="170" y="420" width="140" height="30" fill="#eee" stroke="#333" rx="4" ry="4" />
        <text x="240" y="440" textAnchor="middle" className="dim">Tür-öffnen</text>
      </svg>


    </div>
  )
}
