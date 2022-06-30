# YogaRoom 🧘🏻‍♀️

YogaRoom is a yoga practice tool website that aims to assist yogi / yogini with their practice at home. It was built during the pandemic of COVID-19, therefore, YogaRoom brings the experience from offline to online and tries to make yoga practice more personal, comfortable and convinient through a set of online tools, such as `Sequence Builder`, `Visual and Auditory Guidance`, and `Save Feature`.

YogaRoom 是一個輔助瑜珈自主練習的工具網站。它的誕生是源於疫情期間，為了幫助瑜珈學習者在家也能自在練習，因此打造了瑜珈課體驗的線上空間，引導學習者從 `自行設計瑜珈序列` ，到 `給予視/聽覺的示範輔助` ，以及 `儲存課程的功能` ，讓瑜珈練習變得更個人、舒適和方便的體驗。


## Content of Table

  * [Live Demo](#live-demo)
    + [Test Account](#test-account)
  * [Tech Stack](#tech-stack)
  * [Component Planning & State Management](#component-planning--state-management)
  * [Features](#features)


## Live Demo

![](https://i.imgur.com/KqA9QQD.gif)

Try Here:  [https://yogaroom-24504.firebaseapp.com/](https://yogaroom-24504.firebaseapp.com/)
</p>

### Test Account

You are free to experience YogaRoom as a guest or you might want to log in, which allows you to store your sequence settings, making a faster way to get practice started. For your testing, a set of account and password is provided below.

你可以透過訪客的方式體驗 YogaRoom 大多數的功能，也可以選擇登入會員，獲得儲存課程的功能，方便下次輕鬆快速開始你的練習。若希望測試會員功能，以下提供測試帳號及密碼供你使用。

| Account | yoga@yogaroom.com |
| --- | --- |
| Password | yoga123 |


## Tech Stack

YogaRoom is constructed by using `React Hook` and  `React-Router` to implement Single Page Application（**SPA**）, making the user experience better; Using `React Context` to pass member state through nested components tree; Using `JSX` and `Styled-components` to write HTML element and style right directly in the JS component, making writing more semantic and intuitive; Using `Third-party Module` to achieve the text-to-speech function.

Using the `Firebase` back-end service platform to set up the website (Hosting), membership system (Auth), and database (Firestore) operation .

Using `NPM` for package management, `Prettier` to unified coding style, and `GitHub` to do Git version control.

### 前端開發

1. 使用 **React Hook**，搭配 **React-Router** 實現使用者體驗更好的單頁式應用。
2. 使用 **React Context** 放在最上層的組件做會員狀態管理。
3. 使用 **JSX** 和 **Styled-components** 在JS內撰寫HTML元素和樣式，達到更語意化和直觀的寫法。
4. 使用 CSS Media Queries 和 Flexbox 製作 **RWD**。
5. 運用 **第三方套件** ，實現網站中語音合成的功能。

### 後端開發
使用 **Firebase** 後端服務平臺，進行網站的架設（Hosting）、會員系統（Auth）和資料庫（Firestore）的操作。

### 開發工具
使用 **NPM** 進行套件管理、**Prettier** 統一程式碼風格、**GitHub** 做版本控制。


## Component Planning & State Management

Component planning manages routing according to the core functions, and is divided into four main components (Homepage, Flow, Practice, PracticeList), and then divided into sub-components according to the functional complexity of each component. Among them, Header is a shared component.

組件的規劃依照核心功能做路由的管理，分為四個主要組件(Homepage, Flow, Practice, PracticeList)，然後依據各自組件功能複雜度，再度切分成子組件。其中，Header為共用組件。

The position of the main function state management is in the parent layer of each of the four main components, and is passed to the child layer through props. Considering the burden of the database, unless there are stored practice, which is obtained from Firebase Firestore. Otherwise, other settings are passed between components of different routes through useNavigate and useLocation of React Router, and are recorded in the form of sessions.

主要功能狀態管理的位置都在四個主要組件各自的父層，並透過 prop 傳遞到子層。有儲存的課程資料會是從 Firebase Firestore 撈取資料，其他設定都是透過 React Router 的 useNavigate 和 useLocation 實現不同路由的組件間的傳遞 (sessionStorage 的方式紀錄)。


## Features

### 1. ****Build Your Own Sequences****

Users can design ideal sequences and adjust foucs time on each position. YogaRoom makes practice more personal.

使用者可以自行排序理想的瑜珈序列，針對每個動作也可以自定義理想的停留時間，達到更符合個人化的練習。

### 2. ****Visual and Auditory Guidance****

Without memorizing sequences, users can focus more on position and breathe. YogaRoom makes practice more comfortable.

使用者不用去記序列，跟著視覺示範和聽覺輔助，達到更專注和舒服的練習。

### 3. ****Create List for Your Favorite Practices****

Upon logging, users are allowed to save any practice and get a quick start for next time. YogaRoom makes practice more convinient.

在登入情況下，使用者可以收藏課程的序列設定，供下次練習快速開始，讓每次練習都更加方便。
