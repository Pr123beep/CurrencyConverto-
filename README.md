
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
[Live Demo on Netlify](https://thunderous-dolphin-da7ae4.netlify.app)

---

## 🚀 Getting Started

### Prerequisites
- A modern browser with PWA support (e.g., Chrome, Firefox, Safari).
- Node.js and npm (if running locally for development).

### Installation (Local Development)
1. Clone the repository:
   ```bash
   git clone https://github.com/Pr123beep/CurrencyConverto-.git
   cd CurrencyConverto-
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

### Deploy on Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop your project folder into the [Netlify Drop Zone](https://app.netlify.com/drop).
3. Alternatively, link your GitHub repository to Netlify:
   - Go to **Sites** > **New site from Git**.
   - Choose your repository and branch (`main`).
   - Netlify will automatically deploy your app and provide a URL (e.g., `https://thunderous-dolphin-da7ae4.netlify.app`).
4. Access the app via the provided Netlify URL.

### Redeploy Changes
1. Make changes to your project files locally.
2. Push changes to the `main` branch on GitHub.
3. Netlify will automatically redeploy your updated app.

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


## 🙌 Acknowledgments
- [ExchangeRate-API](https://www.exchangerate-api.com/) for currency data.
- Inspiration from modern fintech applications.
- This project is completely made and is worked on by PRATHAM JAIN.

---

