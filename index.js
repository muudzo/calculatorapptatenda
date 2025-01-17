const display = document.getElementById("display");
const keysContainer = document.getElementById("keys");

// Defined the calculator buttons and their actions
const buttons = [
    { label: "+", type: "operator" },
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "-", type: "operator" },
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "*", type: "operator" },
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "/", type: "operator" },
    { label: "0", type: "number" },
    { label: ".", type: "number" },
    { label: "=", type: "calculate" },
    { label: "C", type: "clear" }
];


buttons.forEach(button => {
    const btn = document.createElement("button");
    btn.textContent = button.label;
    btn.className = button.type === "operator" ? "operator-btn" : "number-btn";

    // Add event listeners based on button type
    if (button.type === "number" || button.type === "operator") {
        btn.addEventListener("click", () => appendToDisplay(button.label));
    } else if (button.type === "calculate") {
        btn.addEventListener("click", calculate);
    } else if (button.type === "clear") {
        btn.addEventListener("click", clearDisplay);
    }

    keysContainer.appendChild(btn);
});

// Calculator function
function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Can't do that";//funny twist to a calculator 
        console.error("Error:", error);
    }
}

function clearDisplay() {
    display.value = "";
}
