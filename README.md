[English Version](#yogaroom-english-%EF%B8%8F) | [中文版](#yogaroom-中文-%EF%B8%8F)

# YogaRoom (English) 🧘🏻‍♀️

YogaRoom is a yoga practice tool website that aims to assist yogi / yogini with their practice at home. Built during the pandemic of COVID-19, YogaRoom brings the experience from offline to online and is designed with great UX to make yoga practice more personal, comfortable and convenient through a set of online tools, such as `Sequence Builder`, `Visual and Auditory Guidance`, and `Save Feature`.

## Content of Table

- [Live Demo](#live-demo)
  - [Test Account](#test-account)
- [Tech Stack](#tech-stack)
- [Component Planning & State Management](#component-planning--state-management)
- [Features](#features)
- [UX Optimization](#ux-optimization)

## Live Demo

<p align="center">
 <img src="https://i.imgur.com/KqA9QQD.gif">
</p>
<p align="center" src="https://yogaroom-24504.firebaseapp.com/">
 https://yogaroom-24504.firebaseapp.com/
</p>

### Test Account

You are free to experience YogaRoom as a guest or you might want to log in as a member to store your sequence settings after practice. For your testing, a set of account and password is provided below.

| Account  | yoga@yogaroom.com |
| -------- | ----------------- |
| Password | yoga123           |

## Tech Stack

<p align="center">
 <img src="https://i.imgur.com/JhGwuiR.png">
</p>

### Front-end Skills

1. Used `React Hook` and  `React-Router` to implement Single Page Application（**SPA**）, giving better user experience
2. Used `React Context` to pass member state through nested components tree
3. Used `JSX` and `Styled-components` to write HTML element and style right directly in the JS component, making writing more semantic and intuitive
4. Applied `Third-party Module` to achieve the text-to-speech function
5. Supported `RWD` by using CSS MEdia Queries and Flexbox

### Back-end Skills

Used `Firebase` back-end service platform to set up the website (Hosting), membership system (Auth) and database (Firestore) operation .

### Develop Tools

Used `NPM` for package management, `Prettier`, `ESLint`, `Stylelint` to unified coding style, and `GitHub` to do Git version control.

## Component Planning & State Management

<p align="center">
 <img src="https://i.imgur.com/6lZifBN.png">
</p>

Routers are designed to distinguish main components, including Homepage, Flow, Practice and PracticeList. Main components are then divided into sub-components based on the complexity of the component. In addition, Header is a shared component.

States are separatively stored in each of the four main components, and are passed to the child components through props and stored in sessionStorage by React Router. Particularly, Member states are stored in the highest layer of the App and are passed through the nested tree to child components by Context API. Save feature allows member to store data in Firebase Firestore.

## Features

### ⭐ **Build Your Own Sequences**

Users can design ideal sequences and adjust focus time on each position. YogaRoom makes practice more personal.

### ⭐ **Visual and Auditory Guidance**

Without memorizing sequences, users can focus more on position and breath. YogaRoom makes practice more comfortable.

### ⭐ **Create List for Your Favorite Practices**

Upon logging, users are allowed to save any practice and get a quick start for next time. YogaRoom makes practice more convenient.
## UX Optimization

1️⃣ Friendly navigation design: The bottom navigation bar makes CTA button clearer and more friendly to mobile users

2️⃣ Minimize image size: converted images to svg format and used `svgo` to minimize the file; converted gif to WebM format and used HTML video attributes, reducing the file size by 75%

3️⃣ Reduce blank page： Loading icon is displayed when waiting for external resources to be loaded

4️⃣ Increase website's attractiveness when sharing: set `OG tag` to display website thumbnail, title and description when the URL is shared in social media

---

# YogaRoom (中文) 🧘‍♂️

YogaRoom 是一個輔助瑜珈自主練習的工具網站。它是源於疫情期間，為了幫助瑜珈學習者在家也能自在練習，因此打造了瑜珈課體驗的線上空間，以流暢的 UX 設計，引導學習者從 `自行設計瑜珈序列` ，到 `給予視/聽覺的示範輔助` ，以及 `儲存課程的功能` ，讓瑜珈練習變得更個人、舒適和方便的體驗。

## 目錄

- [畫面 Demo](#畫面-demo)
  - [測試帳號](#測試帳號)
- [技術棧](#技術棧)
- [組件規劃 & 狀態管理](#組件規劃--狀態管理)
- [亮點功能](#亮點功能)
- [使用者體驗優化](#使用者體驗優化)

## 畫面 Demo

<p align="center">
 <img src="https://i.imgur.com/KqA9QQD.gif">
</p>
<p align="center" src="https://yogaroom-24504.firebaseapp.com/">
 https://yogaroom-24504.firebaseapp.com/
</p>

### 測試帳號

你可以透過訪客的方式體驗 YogaRoom 大多數的功能，也可以選擇登入會員，獲得儲存課程的功能，方便下次輕鬆快速開始你的練習。若希望測試會員功能，以下提供測試帳號及密碼供你使用。

| 帳號 | yoga@yogaroom.com |
| ---- | ----------------- |
| 密碼 | yoga123           |

## 技術棧

<p align="center">
 <img src="https://i.imgur.com/JhGwuiR.png">
</p>

### 前端開發

1. 使用 `React Hook`，搭配 `React-Router` 實現使用者體驗更好的單頁式應用。
2. 使用 `React Context` 放在最上層的組件做會員狀態管理。
3. 使用 `JSX` 和 `Styled-components` 在 JS 內撰寫 HTML 元素和樣式，達到更語意化和直觀的寫法。
4. 使用 CSS Media Queries 和 Flexbox 製作 `RWD`。
5. 運用 `第三方套件` ，實現網站中語音合成的功能。

### 後端開發

使用  `Firebase` 後端服務平臺，進行網站的架設（Hosting）、會員系統（Auth）和資料庫（Firestore）的操作。

### 開發工具

使用 `NPM` 進行套件管理、`Prettier`, `ESLint`, `Stylelint` 統一程式碼風格、`GitHub` 做版本控制。

## 組件規劃 & 狀態管理

<p align="center">
 <img src="https://i.imgur.com/6lZifBN.png">
</p>

根據組件的主要功能做路由區分跟管理，其中四個主要組件為 Homepage, Flow, Practice 和 PracticeList，再根據各自組件功能複雜度，再度切分成子組件。另外，Header 為共用組件。

狀態管理的位置主要在四個父組件內，透過 prop 傳遞到子組件，並透過 React Router 的 useNavigate 和 useLocation 實現不同路由的組件間的傳遞 (sessionStorage 的方式記錄)。關於會員登入狀態則是存放在 App 最上層，並透過 Context API 傳遞到組件樹內。另外，會員儲存的課程存放在 Firebase Firestore。

## 亮點功能

### ⭐ **自由設計序列**

使用者可以自行排序理想的瑜珈序列，針對每個動作也可以自定義理想的停留時間，達到更符合個人化的練習。

### ⭐ **視/聽覺輔助**

使用者不用去記序列，跟著視覺示範和聽覺輔助，達到更專注和舒服的練習。

### ⭐ **收藏練習**

在登入情況下，使用者可以收藏課程的序列設定，供下次練習快速開始，讓每次練習都更加方便。

## 使用者體驗優化

1️⃣ 增加導覽動線：仿 App 的置底導覽列設計，讓動線更明確，也對手機版使用者更友善

2️⃣ 降低圖片大小，加速載入：優先使用 svg 並使用 `svgo` 將檔案最小化；動態圖片使用 WebM 格式搭配 HTML video 屬性，相較 gif 檔案大小降低 75 %

3️⃣ 降低出現空白畫面：等待載入外部資源時，顯示 Loading 圖示，降低因空白頁面的跳出率

4️⃣ 增加網站被分享時的吸引力：設定 `OG tag` ，當網址被分享時，會顯示網站縮圖、標題及描述
