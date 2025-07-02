📚 WISE Reflect – AI-Powered Reflection Chrome Extension
WISE Reflect is a Chrome extension designed to help students thoughtfully reflect on their work using the WISE decision-making framework. It allows users to write responses to 4 key questions, save them locally, and get instant, constructive AI feedback using OpenAI’s GPT model — all within the browser.

🚀 Features
📝 Prompts 4 WISE framework reflection questions:

What is the purpose of this task?

How did you arrive at your solution?

What would you do differently?

What did you learn from this process?

💾 Saves responses locally (no login or cloud needed)

🤖 Sends your responses to OpenAI’s GPT-3.5 for helpful feedback

🔐 Keeps your API key secure in a separate config.js file (not pushed to GitHub)

🧠 Designed for clarity, intentional thinking, and responsible AI use

📷 Screenshot
<img width="325" alt="image" src="https://github.com/user-attachments/assets/19c8c373-092a-4de6-b76e-a17a3fd21349" />


🛠️ How to Install and Use Locally
Clone this repo

bash
Copy
Edit
git clone https://github.com/your-username/wise-reflect-extension.git
cd wise-reflect-extension
Create a config.js file (this is ignored by Git):

js
Copy
Edit
const OPENAI_API_KEY = "sk-your-api-key-here";
Load the extension into Chrome:

Go to chrome://extensions

Turn on Developer mode

Click Load unpacked

Select this folder

Click the extension icon in your toolbar and start reflecting!

🧠 About the WISE Framework
The WISE framework encourages meaningful decision-making by prompting users to think critically about:

Why they’re doing a task

How they approached it

What they would change

What they learned

This extension brings that process into your workflow with support from AI — making reflection effortless and more insightful.

⚠️ API Key Security Notice
Your OpenAI API key is stored in config.js, which is excluded from Git via .gitignore. Be sure never to commit your key.

For production, consider using a secure server or extension backend to store API keys.

🧑‍💻 Built By
Talhah Raheem
Student @ CSUF • CS Major
