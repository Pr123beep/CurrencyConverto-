
# Currency Converto 🌍💱

Currency Converto is a sleek and user-friendly Progressive Web App (PWA) for converting currencies in real-time. With its minimalist design and powerful functionality, users can quickly switch between global currencies, making it perfect for travelers, business users, or anyone dealing with international transactions.

---

## 🌟 Features
- 🌐 **Real-Time Currency Conversion**: Powered by the [ExchangeRate-API](https://www.exchangerate-api.com/) for up-to-date rates.
- 🚀 **Offline Mode**: Fully functional offline thanks to caching via a service worker.
- 🔁 **Easy Switching**: Swap currencies with a single click.
- 📱 **Responsive Design**: Optimized for mobile and desktop use.
- 🌍 **Global Support**: Supports a vast range of currencies from around the world.
- 🔒 **Secure**: Hosted on HTTPS to ensure data security.

---

## 🖼️ Demo
[Live Demo on GitHub Pages](https://<your-github-username>.github.io/<repository-name>/)

---

## 🚀 Getting Started

### Prerequisites
- A modern browser with PWA support (e.g., Chrome, Firefox, Safari).
- Node.js and npm (if running locally for development).

### Installation (Local Development)
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-github-username>/<repository-name>.git
   cd <repository-name>
   ```
2. Serve the app locally using a live server:
   ```bash
   npx live-server
   ```
3. Open `http://localhost:8080` (or the URL provided by the live server) in your browser.

---

## 🧩 File Structure
| File/Folder         | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `index.html`        | Main HTML file for the app.                                                |
| `stylee.css`        | Stylesheet for app styling.                                                |
| `script.js`         | JavaScript to handle app logic, including API calls.                       |
| `codescurr.js`      | File containing the currency list and API key.                             |
| `service-worker.js` | Service worker for offline support.                                        |
| `manifest.json`     | Manifest file for PWA functionality.                                       |
| `Converto.png`      | App icon for branding.                                                     |

---

## 🔧 Technologies Used
- **HTML5**: Structure and layout of the app.
- **CSS3**: Styling and responsive design.
- **JavaScript**: Application logic, DOM manipulation, and API integration.
- **Service Workers**: Enable offline functionality and caching.
- **ExchangeRate-API**: Fetch real-time exchange rates.

---

## 📲 How to Install as a PWA
1. Open the app in a supported browser.
2. Click the browser menu (three dots).
3. Select **"Add to Home Screen"**.
4. Launch the app from your home screen like a native app!

---

## 🖥️ Deployment

### Deploy on GitHub Pages
1. Push the repository to GitHub.
2. Go to the **Settings** tab of the repository.
3. Scroll to **GitHub Pages**.
4. Select the `main` branch as the source.
5. Access the app at `https://<your-github-username>.github.io/<repository-name>/`.

### Deploy on Netlify
1. Drag and drop the project folder into the [Netlify Drop Zone](https://app.netlify.com/drop).
2. Access the app via the provided Netlify URL.

### Deploy on Vercel
1. Run the following commands:
   ```bash
   npm install -g vercel
   vercel
   ```
2. Follow the prompts to deploy your app.

---

## 🚀 API Key Setup
The API key for ExchangeRate-API is already included in the `codescurr.js` file:
```javascript
export const api = "64aed746af1c53de24bd4cf3";
```
Replace the key with your own for production use if needed.

---

## 📋 Known Issues
- Some browsers may not fully support all PWA features.
- Offline mode is limited to previously visited pages and cached resources.

---

## 🛠️ Future Enhancements
- 🌟 Add more visual themes for customization.
- 📈 Add graphs to display historical exchange rate trends.
- 🌐 Support for multilingual interfaces.
- 💬 Integration with voice assistants for conversion queries.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request on GitHub.

---

## 📄 License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 🙌 Acknowledgments
- [ExchangeRate-API](https://www.exchangerate-api.com/) for currency data.
- Inspiration from modern fintech applications.

---

