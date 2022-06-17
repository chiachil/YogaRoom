# YogaRoom

YogaRoom is a website that aims to assist yogi / yogini with their practice at home. It was born during the pandemic of COVID-19, when people can’t go to the yoga classes. Therefore, YogaRoom brings the experience from offline to online and tries to make yoga practice more personal, comfortable and convinient through a set of online tools, such as `Sequence Design`, `Visual and Auditory Guidance`, and `Saving Practices`.

YogaRoom 是一個輔助瑜珈自主練習的工具網站。它的誕生是源於疫情期間，為了幫助瑜珈學習者在家也能自在練習，因此打造了瑜珈課體驗的線上空間，引導學習者從自行設計瑜珈序列，到給予視/聽覺的示範輔助，以及儲存課程等功能，讓瑜珈練習變得更個人、舒適和方便的體驗。


## Content of Table

  * [Live Demo](#live-demo)
    + [Test Account](#test-account)
  * [Tech Stack](#tech-stack)
  * [Component Planning & State Management](#component-planning---state-management)
  * [Features](#features)


## Live Demo

[https://yogaroom-24504.firebaseapp.com/](https://yogaroom-24504.firebaseapp.com/)

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

前端開發：

1. 使用 **React Hook**，搭配 **React-Router** 實現單頁式應用，讓使用者體驗更好。
2. 使用 **React Context** 放在最上層的組件做會員狀態管理。
3. 使用 **JSX** 和 **Styled-components** 在JS內撰寫HTML元素和樣式，達到更語意化和直觀的寫法。
4. 運用 **第三方套件** ，實現網站中語音合成的功能。

後端開發使用 **Firebase** 後端服務平臺，進行網站的架設（Hosting）、會員系統（Auth）和資料庫（Firestore）的操作。

開發工具使用 **NPM** 進行套件管理、**Prettier** 統一程式碼風格、**GitHub** 做版本控制。


## Component Planning & State Management

Component planning manages routing according to the core functions, and is divided into four main components (Homepage, Flow, Practice, PracticeList), and then divided into sub-components according to the functional complexity of each component. Among them, Header is a shared component.

組件的規劃依照核心功能做路由的管理，分為四個主要組件(Homepage, Flow, Practice, PracticeList)，然後依據各自組件功能複雜度，再度切分成子組件。其中，Header為共用組件。

The position of the main function state management is in the parent layer of each of the four main components, and is passed to the child layer through props. Considering the burden of the database, unless there are stored practice, which is obtained from Firebase Firestore. Otherwise, other settings are passed between components of different routes through useNavigate and useLocation of React Router, and are recorded in the form of sessions.

主要功能狀態管理的位置都在四個主要組件各自的父層，並透過prop傳遞到子層。考量資料庫的負擔，除非是有儲存的課程資料才會是從Firebase Firestore撈取資料，否則其他設定都是透過React Router的useNavigate和useLocation實現不同路由的組件間的傳遞，並以session的方式紀錄。


## Features

### 1. ****Arrange Sequences and Adjust Time on Each Position****

Users can design a ideal sequences list by adding and removing any position they select. Besides, they are able to adjust the time on each position.

使用者可以透過新增和刪除動作來排序理想的瑜珈序列，另外，針對每個動作都還可以自定義理想的停留時間。

### 2. ****Visual and Auditory Guidance****

Users can customize the mat color in the visual demonstration and the language of the voice guidance, which supports in English and Mandarin.

使用者可以調整視覺示範中瑜珈墊的顏色以及聽覺示範的語言（支援中、英文），達到更符合個人化的練習輔助。

### 3. ****Create List for Your Favorite Practices****

Upon logging, users can save the practice and get a quick start for the same practice setting next time. In addition, for those practices that have been saved, users can further edit the sequences or delete it.

在登入情況下，使用者可以在課程結束後，收藏課程的序列設定，供下次練習快速開始。另外，針對儲存的課程，也可以再做序列的調整或是刪除收藏。
