# Coffee Shop API

This project is a **Serverless** CRUD (Create, Read, Update, Delete) application built with **Node.js**. The API provides basic CRUD operations for managing coffee orders using **Amazon API Gateway**, **Amazon DynamoDB**, and **The Serverless Framework**. This project is designed to operate fully serverlessly, leveraging AWS infrastructure for scalability and cost-effectiveness.

## Table of Contents
- [Coffee Shop API](#coffee-shop-api)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
  - [API Endpoints](#api-endpoints)
  - [HTTP Methods](#http-methods)
  - [Deployment](#deployment)
    - [Updating the API](#updating-the-api)
  - [Contributing](#contributing)

## Overview

The **Coffee Shop API** allows users to create, retrieve, update, and delete coffee orders. It uses **Amazon API Gateway** to handle HTTP requests and **Amazon DynamoDB** as the database for storing the coffee orders. The project is built with **Node.js** and uses **The Serverless Framework** to simplify the deployment and management of the application in AWS.

## Prerequisites

Before running or deploying the project, make sure you have the following installed and configured:

- **Node.js** and **npm** (Node Package Manager) installed on your local machine.
- **AWS CLI** (Amazon Web Services Command Line Interface) configured with access to your AWS account.
- **Serverless Framework** account created.
- **Serverless Framework** installed globally on your local CLI:

  ```bash
  npm install -g serverless
  ```

## Technologies Used

- **JavaScript (Node.js)**: The primary language used for developing the application.
- **Amazon API Gateway**: To expose the API endpoints and handle HTTP requests.
- **Amazon DynamoDB**: A NoSQL database used for storing and retrieving coffee order data.
- **The Serverless Framework**: Simplifies the deployment and management of the serverless application.

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/coffee-shop-api.git
   cd coffee-shop-api
   ```

2. **Install project dependencies**:

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Configure AWS CLI**:

   Make sure your AWS CLI is configured with the appropriate access:

   ```bash
   aws configure
   ```

4. **Deploy the Serverless Application**:

   After installing the dependencies, deploy the application to AWS using Serverless Framework:

   ```bash
   serverless deploy
   ```

## API Endpoints

The following endpoints are exposed by the Coffee Shop API:

| Method | Endpoint                            | Description                             |
|--------|-------------------------------------|-----------------------------------------|
| GET    | `/v1/orders/coffees`                | Retrieve all coffee orders              |
| POST   | `/v1/orders/coffees`                | Create a new coffee order               |
| PUT    | `/v1/orders/coffees/{order_id}`     | Update an existing coffee order         |
| DELETE | `/v1/orders/coffees/{order_id}`     | Delete a coffee order                   |
| GET    | `/v1/orders/coffees/status/{status}`| Retrieve orders filtered by status      |

## HTTP Methods

The following HTTP methods are supported by the Coffee Shop API:

- **GET**: Retrieves coffee orders from the DynamoDB table.
- **POST**: Creates a new coffee order and stores it in the DynamoDB table.
- **PUT**: Updates an existing coffee order, allowing modification of order details such as `status`, `size_ml`, and `accompaniment`.
- **DELETE**: Deletes an existing coffee order from the DynamoDB table.

## Deployment

Once your project is configured, you can deploy it using **Serverless Framework**. The following command will deploy your services to AWS:

```bash
serverless deploy
```

### Updating the API

Whenever changes are made, you can deploy the updates to AWS by running:

```bash
serverless deploy
```

To test the application locally, you can use **serverless-offline**:

```bash
serverless offline start
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Fork the repository and submit your changes for review.

