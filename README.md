# my-portfolio

## 🤖 Introduction

Hi, this is my portfolio. Please take a moment to explore my website, which showcases my projects, work experience, technical skills, and more.

## ⚙️ Tech Stack

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Email JS
- Vite
- Tailwind CSS

## 🔋 Features

👉 **Interactive Experience and Work Sections**: Utilizes animations powered by framer motion for engaging user experience.

👉 **Contact Section with 3D Earth Model**:Integrates a 3D earth model with email functionality powered by emailjs.

👉 **Consistent Animations**: Implements cohesive animations throughout the website using framer motion.

👉 **Responsive Design**: Ensures optimal display and functionality across all devices.

and many more, including code architecture and reusability

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone git@github.com:adrianhajdin/project_3D_developer_portfolio.git
cd project_3D_developer_portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## 🗂️ Folder Structure

```
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── logo.svg
│   └── planet
│       └── scene.gltf
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── company
│   │   ├── tech
│   │   └── otherPictures
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   ├── Works.jsx
│   │   ├── canvas
│   │   │   ├── Earth.jsx
│   │   │   └── index.js
│   │   └── index.js
│   ├── constants
│   ├── hoc
│   │   └── SectionWrapper.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── styles.js
│   └── utils
│       └── motion.js
├── tailwind.config.js
└── vite.config.js
```

## 🕸️ Snippets

## Contact

For any queries or suggestions, please contact us at email:(xuma8821@gmail.com).
