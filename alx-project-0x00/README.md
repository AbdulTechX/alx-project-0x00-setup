# React Genesis: Mastering Next.js Setup

## 📌 Project Description

This project is designed to teach the fundamentals of building modern web applications using **React**, **TypeScript**, and **Next.js**. The application takes inspiration from Airbnb’s user interface, featuring property listings with images, ratings, and interactive components. The focus is on **best practices**, **code quality**, and **responsive design**.

---

##  🎯 Learning Objectives

By completing this project, you will:
- Understand how to **scaffold a Next.js project with TypeScript**.
- Learn **Next.js folder structure and organization best practices**.
- Implement **basic routing** using the **Next.js Pages Router**.
- Create **reusable React components** with TypeScript.
- Define **TypeScript interfaces** for component props.
- Manage **assets and static files** in Next.js.
- Develop **responsive UI** using Tailwind CSS.
- Set up and configure **ESLint** for code quality.

---

## 🛠️ Tech Stack
- **Next.js v13+**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **ESLint**
- **Node.js v16+**
- **npm** or **yarn**

## Tasks

0. Scaffolding a project
   Objective: You will understand the essence of creating a project using cli-tools like npx, coupled with create-next-app. There are multiple ways you can create a project using the create-next-app cli-tool.
       * The first approach will be to use the command npx create-next-app@latest This option will provide you with multiple prompts to help set up your initial project
       * The next approach is to be familiar with the [options] ahead of creating the project. This is the option we will be using.
   
   ### Instructions:
     * Start a new visual studio code (vscode instance), open the terminal using the Terminal -> New Terminal
     * Navigate to your project directory
     * Run the command npx create-next-app@latest alx-project-0x00 –typescript
     * Select Yes for the following option [Eslint, Tailwind CSS, import alias]
     * Select No for /src directory and App Router
     * Start your application using the command npm run dev -- -p 3000