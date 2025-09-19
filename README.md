# Roller Derby API

[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)  
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen?logo=node.js)](https://nodejs.org/)  
[![Angular](https://img.shields.io/badge/angular-client-red?logo=angular)](https://angular.dev/)  
[![Firebase](https://img.shields.io/badge/hosting-firebase-orange?logo=firebase)](https://firebase.google.com/docs/hosting)  

<p align="center">
  <img src="https://user-images.githubusercontent.com/4064770/235254208-51c0c4c0-1748-43d4-9633-8259c86c7259.png"
       alt="An array of rollerskating wheels in the shape of a skate"
       width="320" />
</p>

## Description

A simple, public API for roller derby data. It exposes four endpoints—**Structure**, **Rules**, **Official Types**, and **Officials**—so you can incorporate roller derby information into your app with ease. The API is backed by **Firestore** and the documentation site is an **Angular** client. Both are hosted on **Firebase**.

**Live demo:** [rollerderbyapi.web.app](https://rollerderbyapi.web.app)  
**Repo:** [github.com/quinise/rollerderbyapi](https://github.com/quinise/rollerderbyapi)

## Table of Contents
- [Features](#features)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
  - [GET /structure](#get-structure)
  - [GET /rules](#get-rules)
  - [GET /official-types](#get-official-types)
  - [GET /officials](#get-officials)
- [Client (Docs) App](#client-docs-app)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- Four read-only endpoints for commonly used roller derby information.
- JSON responses sourced from Firestore collections.
- Lightweight Node.js API + Angular documentation client.
- One-command local dev for API and client.

---

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- A Firebase project with Firestore enabled (for local development you can use the Firebase Emulator Suite if desired)

### Clone
```bash
git clone https://github.com/quinise/rollerderbyapi.git
cd rollerderbyapi
```

### Start the API (Node)
From the repo root:
```bash
npm install
npm run start:dev
```

The API will start on the configured port (commonly `http://localhost:3000` unless otherwise set).

### Start the Docs (Angular client)
```bash
cd client
npm install
npm start
```

This runs the Angular site locally (typically on `http://localhost:4200`). 

> Tip: For a unified DX, open two terminals—one for the API and one for the docs app.

---

## API Reference
### Base URLs

- **Production:** https://rollerderbyapi.web.app/api
- **Local (example):** http://localhost:3000/api

All responses are JSON.

> If you’re calling the API from a browser app, ensure CORS is configured appropriately for your environment.

## GET /structure
Returns the structure of roller derby (e.g., gameplay components, roles, or organizational breakdowns).

#### Request
```bash
curl -s https://<your-host>/api/structure
```

### Response (example)
```json
[
  {
    "id": "jam",
    "name": "Jam",
    "description": "A segment of play in which teams score points."
  }
]
```

---

## GET /rules
Returns a list of rule references and summaries.

### Request
```bash
curl -s https://<your-host>/api/rules
```

### Response (example)
```json
[
  {
    "id": "contact",
    "title": "Contact",
    "summary": "Guidelines on legal and illegal contact.",
    "reference": "WFTDA 2023 - Section 5"
  }
]
```

---

## GET /official-types
Returns recognized official roles/types in roller derby.

### Request
```bash
curl -s https://<your-host>/api/official-types
```

### Response (example)
```json
[
  { "id": "referee", "name": "Referee" },
  { "id": "nso", "name": "Non-Skating Official" }
]
```

---

## GET /officials
Returns officials (name + type and other attributes if available).

### Request
```bash
curl -s https://<your-host>/api/officials
```

### Response (example)
```json
[
  {
    "id": "abc123",
    "name": "Pat Quinn",
    "type": "Referee"
  }
]
```
> Note: The exact fields returned map to your Firestore documents.

---

## Client (Docs) App
The Angular client hosts documentation and examples of how to use the API. Start it locally with:
```bash
cd client
npm start
```
You can customize the docs UI or add demos showing fetch/curl examples for each endpoint. The production docs are hosted on Firebase.

---

## Project Structure
```
rollerderbyapi/
├─ api/                 # Node.js API (Express, Firestore access)
├─ client/              # Angular docs client
├─ .firebaserc          # Firebase project config
├─ firebase.json        # Firebase Hosting/Functions config (if present)
├─ package.json         # Root scripts (start API, etc.)
└─ README.md
```

---

## Tech Stack

- **API:** Node.js + Express, Firestore (Google Firebase)
- **Docs:** Angular
- **Hosting:** Firebase Hosting (and optionally Functions/Emulators)

References: [WFTDA](https://wftda.com/) and [WFTDA Rules](https://rules.wftda.com/) are great primary sources when curating structured derby data.

---

## Deployment
This repo is configured for Firebase hosting. A common setup:

### 1. Firebase login & init
```bash
npm install -g firebase-tools
firebase login
firebase init
```

### 2. Configure hosting targets for API (if using Cloud Functions/Hosting rewrites) and the Angular client.

### 3. Build & deploy
```bash
# From the client/ folder
npm run build
# From repo root (depending on your setup)
firebase deploy
```
Adjust steps to match your `firebase.json` and whether your API is deployed as Functions, a separate service, or behind rewrites.

---

## Contributing
Contributions, issues, and feature requests are welcome!

- Please open an issue describing the change.
- For PRs, include:
    - A short description of the intent
    - Any schema changes (if Firestore collections/fields are added/renamed)
    - Updated docs (README or client UI) if applicable
 
---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
