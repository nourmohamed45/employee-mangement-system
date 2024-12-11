# Employee Management System

## Description
A TypeScript-based Employee Management System that demonstrates Object-Oriented Programming principles. This system provides a robust framework for managing employees, departments, and organizational hierarchy using modern TypeScript features.

## Project Structure
- `Employee.ts`: Base Employee class with core employee attributes and methods
- `Manager.ts`: Manager class extending Employee with additional team management capabilities
- `Department.ts`: Department class for organizing and managing groups of employees
- `tsconfig.json`: TypeScript configuration file
- `package.json`: Project dependencies and scripts

## Features
- Object-Oriented design with inheritance (Manager extends Employee)
- Strong typing with TypeScript
- Employee management with comprehensive information:
  - Personal details (name, age)
  - Professional information (position, salary)
  - Performance tracking
- Department organization and management
- Team management under managers
- Salary and bonus calculations
- Type-safe implementations

## Prerequisites
- Node.js (Latest LTS version recommended)
- npm (Node Package Manager)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd employee-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development
The project uses TypeScript v5.3.3 and includes the following development dependencies:
- TypeScript: ^5.3.3
- @types/node: ^20.10.5

## Scripts
- Build the project:
  ```bash
  npm run build
  ```
- Run the application:
  ```bash
  npm start
  ```

## Usage
The system can be used as a foundation for building employee management applications. Import the necessary classes to create and manage employees and departments:

```typescript
import { Employee } from './Employee';
import { Manager } from './Manager';
import { Department } from './Department';
```

## License
This project is licensed under the ISC License.
