const lights = {
    red: { color: "red", action: "Стоп!" },
    yellow: { color: "yellow", action: "Приготовьтесь!" },
    green: { color: "green", action: "Идите!" },
  };
  
  const buttons = document.querySelectorAll(".light");
  const actionText = document.getElementById("action-text");
  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      
      buttons.forEach((btn) => btn.classList.remove("active"));
  
    
      button.classList.add("active");
  
      
      const { color, action } = lights[button.id];
      actionText.textContent = action;
      actionText.style.color = color;
    });
  });
  