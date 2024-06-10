Let's first update your `README.md` to match the current state of your project and then address the changes and commits.

### Updated README.md

```markdown
# Jest Testing Practice

Welcome to the Jest Testing Practice project. This repository contains a collection of basic tests and modules as part of The Odin Project curriculum.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project is designed to practice writing tests using Jest. It includes various modules and their corresponding test files to help understand the basics of unit testing in JavaScript.

## Project Structure

```
jest-testing-practice/
├── .eslintrc.js
├── babel.config.js
├── package.json
├── README.md
├── src/
│   ├── __tests__/
│   │   ├── analyzeArray.test.js
│   │   ├── caesarCipher.test.js
│   │   ├── calculator.test.js
│   │   ├── reverseString.test.js
│   │   └── capitalize.test.js
│   ├── index.js
│   └── modules/
│       ├── analyzeArray.js
│       ├── caesarCipher.js
│       ├── calculator.js
│       ├── reverseString.js
│       └── capitalize.js
└── node_modules/
```

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/erenova/jest-testing-practice.git
    ```

2. Navigate to the project directory:
    ```bash
    cd jest-testing-practice
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

This project includes various modules that can be used to perform different operations. You can import these modules into your own JavaScript files and use them as needed.

## Running Tests

To run the tests using Jest, use the following command:

```bash
npm test
```

This command will run all the test files located in the `src/__tests__` directory.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create a pull request. Ensure your code follows the existing style and passes all tests.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact me at [erenova6@gmail.com](mailto:erenova6@gmail.com).

---

Happy Testing!
