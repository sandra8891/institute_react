# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
  color: #333;
}

.courses-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
}

.course-details {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.text-content {
  flex: 1 1 55%;
  line-height: 1.7;
}

.text-content h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.text-content p {
  font-size: 16px;
  margin-bottom: 20px;
}

.text-content h3 {
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 15px;
}

.text-content ol {
  padding-left: 20px;
}

.text-content ol li {
  margin-bottom: 20px;
  font-size: 16px;
}

.text-content ul {
  padding-left: 20px;
  margin-top: 10px;
}

.text-content ul li {
  margin-bottom: 8px;
}

.image-section {
  flex: 1 1 35%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.course-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .course-details {
    flex-direction: column;
  }

  .image-section {
    margin-top: 30px;
  }
}