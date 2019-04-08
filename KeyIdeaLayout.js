import React from "react";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      backgroundColor: "purple"
    }}
  >
    {children}
  </div>
);
