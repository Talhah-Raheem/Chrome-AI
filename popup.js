//Import the API key from local file (for now)
//make sure this file is linted in the .gitignore


//Save the reflections
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

//Load the reflections
window.onload = () => {
    chrome.storage.local.get(["q1", "q2", "q3", "q4"], (data) => {
        if (data.q1) document.getElementById("q1").value = data.q1;
        if (data.q2) document.getElementById("q2").value = data.q2;
        if (data.q3) document.getElementById("q3").value = data.q3;
        if (data.q4) document.getElementById("q4").value = data.q4;
    });
};

//AI feedback
document.getElementById("aiFeedbackBtn").addEventListener("click", async () => {
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;
    const q4 = document.getElementById("q4").value;

    const combinedInput = `
    Student Reflection:
    1. ${q1}
    2. ${q2}
    3. ${q3}
    4. ${q4}
    
    Give concise, constructive feedback to help the student reflect better.
    `;

    const feedbackDiv = document.getElementById("feedback");
    feedbackDiv.textContent = "Thinking...";

    try{
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`   
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful reflection coach."},
                    { role: "user", content: combinedInput}
                ]
            })
        });

        const data = await response.json();
        feedbackDiv.textContent = data.choices[0].message.content;
    }
    catch (err) {
        feedbackDiv.textContent = "Something went wrong. Please try again.";
        console.error(err);
    }
});