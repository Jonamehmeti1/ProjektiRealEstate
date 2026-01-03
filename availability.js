const { useState, useEffect } = React;

function AvailabilityToggle() {

  const [available, setAvailable] = useState(true);

  
  useEffect(() => {
    const randomAvailable = Math.random() > 0.3; 
    setAvailable(randomAvailable);
  }, []);

  return React.createElement(
    "button",
    {
      onClick: () => setAvailable(!available),
      className: "availability-btn",
      style: {
        backgroundColor: available ? "#22c55e" : "#ef4444",
        cursor: available ? "pointer" : "not-allowed",
      },
      disabled: !available,
    },
    available ? "✔ Available" : "✖ Not Available"
  );
}


const root = ReactDOM.createRoot(document.getElementById("availability-root"));
root.render(React.createElement(AvailabilityToggle));
