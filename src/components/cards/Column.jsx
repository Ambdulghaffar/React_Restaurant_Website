import React, { useState } from "react";

function Column({ img, alt, icon, name }) {
  // État pour gérer le survol de chaque image
  const [hover, setHover] = useState(false);
  const [hoverName, setHoverName] = useState(false);

  return (
    <div
      className="col text-center position-relative"
      style={{
        width: "600px",
        height: "300px",
        transform: hover ? "scale(0.95)" : "scale(1)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)} // Déclenché au survol
      onMouseLeave={() => setHover(false)} // Réinitialisé lorsque le survol est terminé
    >
      {/* Conteneur de l'image */}
      <img
        src={img}
        alt={alt}
        className="img-fluid"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.5)",
        }}
      />

      {/* Conteneur pour l'icône et le nom */}
      <div
        className="position-absolute  top-50 start-50 translate-middle text-center"
        style={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        <p
          className={`border border-3 text-center px-3 pb-2  text-white rounded-circle 
            ${hover ? "bg-warning" : ""}`}
            style={{ backgroundColor: hover ? "" : "#6f42c1" ,fontSize: "80px"}}
        >
          {icon}
        </p>
        {/* Affiche l'icône */}
        <p
          className={` fs-4 mb-0 ${hoverName ? "text-warning": "text-white"}`}
          onMouseEnter={() => setHoverName(true)}
          onMouseLeave={() => setHoverName(false)}
        >
          {name}
        </p>{" "}
        {/* Affiche le nom de l'image */}
      </div>
    </div>
  );
}

export default Column;
