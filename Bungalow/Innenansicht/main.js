document.addEventListener("DOMContentLoaded", () => {
  const lampen = document.querySelectorAll(".lampe");

  lampen.forEach((lampe) => {
    lampe.addEventListener("click", () => {
      lampe.classList.toggle("lampe-an"); // Wechselt die Klasse nur für das geklickte Element
    });
  });
});

const fishes = [
  {
    element: document.getElementById("fish1"),
    x: Math.random() * 180,
    y: Math.random() * 85,
    speedX: (Math.random() - 0.5) * 1.5,
    speedY: (Math.random() - 0.5) * 1.5,
    direction: Math.random() > 0.5 ? 1 : -1,
  },
  {
    element: document.getElementById("fish2"),
    x: Math.random() * 180,
    y: Math.random() * 85,
    speedX: (Math.random() - 0.5) * 1.5,
    speedY: (Math.random() - 0.5) * 1.5,
    direction: Math.random() > 0.5 ? 1 : -1,
  },
  {
    element: document.getElementById("fish3"),
    x: Math.random() * 180,
    y: Math.random() * 85,
    speedX: (Math.random() - 0.5) * 1.5,
    speedY: (Math.random() - 0.5) * 1.5,
    direction: Math.random() > 0.5 ? 1 : -1,
  },
];

const aquarium = document.querySelector(".aquarium");
let mouseX = 100;
let mouseY = 50;

// Cursor-Position verfolgen
aquarium.addEventListener("mousemove", (e) => {
  const rect = aquarium.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

// Wenn die Maus das Aquarium verlässt
aquarium.addEventListener("mouseleave", () => {
  mouseX = 100;
  mouseY = 50;
});

// Animation-Loop
function animateFishes() {
  fishes.forEach((fish) => {
    // Leichte Anziehung zum Mauscursor
    const cursorInfluenceX = (mouseX - fish.x) / 300;
    const cursorInfluenceY = (mouseY - fish.y) / 300;

    // Geschwindigkeit anpassen
    fish.speedX += cursorInfluenceX + (Math.random() - 0.5) * 0.3;
    fish.speedY += cursorInfluenceY + (Math.random() - 0.5) * 0.3;

    // Geschwindigkeit begrenzen
    fish.speedX = Math.max(-1, Math.min(1, fish.speedX));
    fish.speedY = Math.max(-1, Math.min(1, fish.speedY));

    // Position aktualisieren
    fish.x += fish.speedX;
    fish.y += fish.speedY;

    // Aquarium-Rand prüfen
    if (fish.x < 0) {
      fish.x = 0;
      fish.speedX *= -1;
      fish.direction = 1;
    }
    if (fish.x > 210) {
      fish.x = 200;
      fish.speedX *= -1;
      fish.direction = -1;
    }
    if (fish.y < 0) {
      fish.y = 0;
      fish.speedY *= -1;
    }
    if (fish.y > 97) {
      fish.y = 97;
      fish.speedY *= -1;
    }

    // Fisch-Rotation basierend auf Bewegungsrichtung
    const angle = Math.atan2(fish.speedY, fish.speedX);

    // Fisch-Element aktualisieren
    fish.element.style.left = `${fish.x}px`;
    fish.element.style.top = `${fish.y}px`;
    fish.element.style.transform = `rotate(${angle}rad) scaleX(${fish.direction})`;
  });

  // Nächsten Frame anfordern
  requestAnimationFrame(animateFishes);
}

// Animation starten
animateFishes();

  // Initialer Zustand: Türen geschlossen
  let doorsAreOpen = false;

  // Liste aller Türen und deren Styles
  const doors = [
    {
      id: "bedRoomDoor",
      openStyle: {
        transform: "rotate(90deg)",
        transformOrigin: "right bottom"
      },
      closedStyle: {
        transform: "rotate(0deg)"
      }
    },
    {
      id: "kitchenDoor",
      openStyle: {
        transform: "translateY(-80px)",
      },
      closedStyle: {
        transform: "translateY(0)",
      }
    },
    {
      id: "kitchenDoor2",
      openStyle: {
        transform: "rotate(-90deg)",
        transformOrigin: "left bottom",
      },
      closedStyle: {
        transform: "rotate(0)",
      }
    },
    {
      id: "livingDoor",
      openStyle: {
        transform: "rotate(90deg)",
        transformOrigin: "top left",
        marginLeft: "5px",
      },
      closedStyle: {
        transform: "rotate(0)",
        marginLeft: "0",
      }
    },
    {
      id: "floorDoor",
      openStyle: {
        transform: "rotate(90deg)",
      transformOrigin: "right",
      },
      closedStyle: {
        transform: "rotate(0)",
      }
    },
    {
      id: "bathRoomDoor",
      openStyle: {
        transform: "translateX(50%) translateY(-60px)"
      },
      closedStyle: {
        transform: "translateX(50%)"
      }
    }
  ];

  // Toggle-Funktion für alle Türen
  function toggleAllDoors() {
    doors.forEach(door => {
      const el = document.getElementById(door.id);
      const styles = doorsAreOpen ? door.closedStyle : door.openStyle;

      for (let key in styles) {
        el.style[key] = styles[key];
      }
    });

    doorsAreOpen = !doorsAreOpen; // Zustand umkehren
  }

  // Event-Listener
  document.getElementById("toggleButton").addEventListener("click", toggleAllDoors);