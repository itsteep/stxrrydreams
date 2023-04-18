var btnToggle = true; 

const btn = document.getElementById("gal-btn"); 
const text = document.getElementById("gal-text"); 

function chClr() {
    if (btnToggle) {
        btn.textContent = "Revert Changes!"; 
        document.body.style.backgroundColor = "#c0e1bd"; 
        text.style.color = "#081196"; 
        btnToggle = false; 
        btn.style.backgroundColor = "#fed0d2"; 
    }
    else { 
        document.body.style.backgroundColor = "white"; 
        text.style.color = "#000"; 
        btnToggle = true; 
        btn.style.backgroundColor = "#fff"; 
        btn.textContent = "Change Colors!"; 
    }
}
