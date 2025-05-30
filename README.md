# 📅 Staffly – Time Off Request App

Staffly is a simple React Native app built with Expo where employees can submit time-off requests like vacations, sick leave, or personal days. It features date range selection, request filtering, and a clean, mobile-friendly interface.

## ✨ Features

- 📋 Submit requests with type and date range
- 📆 Custom date picker (range)
- 📊 Filter and view submitted requests
- 🔒 Disabled form states & validation
- ♿️ Accessibility-ready with labels and test IDs
- ✅ Unit tests with `@testing-library/react-native`

## 🛠 Tech Stack

- React Native (Expo)
- React Hook Form
- React Native Paper
- TypeScript
- Context API
- @testing-library/react-native

## 📸 Screenshots

<table>
  <tr>
    <td><img src="./assets/screenshots/login.PNG" width="200"/></td>
    <td><img src="./assets/screenshots/home.PNG" width="200"/></td>
  </tr>
  <tr>
    <td><img src="./assets/screenshots/requests.PNG" width="200"/></td>
    <td><img src="./assets/screenshots/profile.PNG" width="200"/></td>
  </tr>
</table>

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/user/staffly.git
cd staffly
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npx expo start
```

> 📱 Scan the QR code with **Expo Go** or launch on an emulator.

---

## 🧪 Run Tests

```bash
npm test
```

---

## 📦 Build APK (for Android)

### 1. Install EAS CLI

```bash
npm install -g eas-cli
```

### 2. Log in with your Expo account

```bash
eas login
```

### 3. Configure your project (once)

```bash
eas build:configure
```

### 4. Build APK for Android

```bash
eas build -p android --profile preview
```

> ⚠️ You’ll receive a link to download the `.apk` when the build completes.

---

## 📁 Folder Structure (Simplified)

```
src/
├── components/       # Reusable UI components
├── context/          # React contexts (auth, requests, profile)
├── screens/          # Main app screens
│   ├── home/
│   ├── profile/
│   └── request/
├── hooks/            # Custom hooks
├── types/            # TypeScript types
├── services/         # Request mock service
```

---

## 👩‍💻 Author

Ana Ruiz

---

## 📄 License

MIT – feel free to use and modify.
