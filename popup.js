document.getElementByID("saveBtn").addEventListener("click", () => {
    const answer = {
        q1: document.getElementById("q1").value,
        q2: document.getElementById("q2").value,
        q3: document.getElementById("q3").value,
        q3: document.getElementById("q4").value
    };

    chrome.storage.local.set(answers, () => {
        alert("Reflection Saved!");
    });
});

window.onload = () => {
    chrome.storage.local.get(["q1", "q2", "q3", "q4"], (data) => {
        if (data.q1) document.getElementById("q1").value = data.q1;
        if (data.q2) document.getElementById("q2").value = data.q2;
        if (data.q3) document.getElementById("q3").value = data.q3;
        if (data.q4) document.getElementById("q4").value = data.q4;
    });
};