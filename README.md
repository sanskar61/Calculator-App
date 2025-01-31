# Calculator App

A modern, minimalistic calculator application built using **React** and **Vite**. This app features a clean and user-friendly interface, allowing users to perform basic arithmetic operations effortlessly.

## Features
- **Responsive Design**: Works seamlessly on all screen sizes.
- **Interactive Buttons**: Smooth hover and click animations.
- **Error Handling**: Displays "Error" for invalid expressions.
- **Customizable**: Easily modify the styles and functionality.

## Technologies Used
- **Frontend**: React, Vite
- **Styling**: CSS Modules
- **State Management**: React Hooks

## Installation
To run the app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd calculator-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

## File Structure
```
calculator-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ButtonsContainer.jsx  # Button grid
│   │   ├── Display.jsx           # Calculator display
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles
│   ├── main.jsx            # Entry point
├── vite.config.js          # Vite configuration
├── package.json            # Project metadata and dependencies
```

## Components

### `App.jsx`
- Manages the state of the calculator.
- Handles button click events and updates the display.

### `Display.jsx`
- Displays the current input or result.
- Props:
  - `displayValue`: The value to display.

### `ButtonsContainer.jsx`
- Renders calculator buttons in a grid layout.
- Props:
  - `onButtonClick`: Callback for button clicks.

## Styling
- **Global Styles**: Defined in `index.css`.
- **CSS Modules**: Scoped styles for each component to avoid conflicts.

## Example Usage
Perform basic arithmetic operations by clicking the buttons:
- Enter numbers and operators (`+`, `-`, `*`, `/`).
- Click `=` to see the result.
- Click `C` to clear the display.

## Screenshots
![Calculator Icon](./path-to-calculator-icon.png)

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any queries, feel free to reach out:
- **Name**: Sanskar Upadhyay
- **Email**: [sanskarupadhyay61@gmail.com](mailto:sanskarupadhyay61@gmail.com)
- **GitHub**: [sanskar61](https://github.com/sanskar61)
- **LinkedIn**: [Sanskar Upadhyay](https://www.linkedin.com/in/sanskar61/)

---

**Happy Coding!**
