# Winnie-Portfolio

## 🤖 Introduction

Hi, this is my portfolio. Please take a moment to explore my website, which showcases my projects, work experience, technical skills, and more.

## ⚙️ Tech Stack

- React.js
- Three.js (Javascript library for creating 3D web graphics on top of WebGL)
- React Three Fiber (A React renderer for three.js.)
- React Three Drei (A collection of useful helpers and abstractions for React Three Fiber)
- Email JS
- Vite (Build tool)
- Tailwind CSS
- Tilt (Animate library)
- Vertical-timeline-component
- Framer Motion (Motion library for React)

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
git clone https://github.com/winnie-ma/Winnie-Portfolio.git
cd Winnie-Portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## 🗂️ Folder Structure

public folder to save some static assets that not processed by build like 3d file.
assets folder save images used in components.
constants folder save constants like experiences, projects object.
utils save helper function of motions.
hoc extract high order component sectionWrapper since each section have similar padding and motion.

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

### Motion

The core of Motion is the motion component. Think of it as a plain HTML or SVG element, supercharged with animation capabilities.

Variants are sets of pre-defined targets. By giving a component and its children variants with matching names, whole React trees can be animated by changing a single prop.

Elements can animate as they enter and leave the viewport with the handy whileInView and initial prop.

```javascript
<motion.section
  variants={staggerContainer()}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
>
  <span className="hash-span" id={idName}>
    &nbsp;
  </span>
  <Component />
</motion.section>
```

### 3D

The 3d component basically composed of Scene and Camera and use renderer to draw the portion of the 3D scene.

Scenes allow you to set up what is to be rendered by three.js and where it is in 3D coordinates.

The Renderer displays the scene onto a HTML Canvas Element.

The camera properties describe a Frustum which are the dimensions inside the scene that will be rendered while the fov, near, far, position define the Frustum area. [Frustum-Area](./images/canvasCamera.png)

```javascript
<const Earth = () => {
  //get the scene material as an object
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
```

## 🔗 Links

- [Three.js](https://threejs.org/manual/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Tailwind](https://tailwindcss.com/docs/installation)
- [Tilt](https://www.npmjs.com/package/react-tilt)
- [Vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component)
- [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

For any queries or suggestions, please contact us at email:(xuma8821@gmail.com).
