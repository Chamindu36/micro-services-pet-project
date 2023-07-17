# micro-services-pet-project

Explore microservices, learning how to implement a microservice with Node.js and discussing how microservices are changing the practice of software development

## Microservices vs. monolithic applications

Microservices and monolithic applications represent two different architectural approaches for building software systems. Let's compare them in various aspects:

### 1. Structure:

- Monolithic: A monolithic application is composed as a single, tightly coupled unit where all components and functionalities are bundled together.
- Microservices: A microservices architecture divides the application into small, independent services, each responsible for a specific functionality.

### ### 2. Scalability:

- Monolithic: Scaling a monolithic application requires scaling the entire application, even if only certain components need more resources.
- Microservices: Microservices allow for individual service scalability. You can scale specific services independently based on their demand, optimizing resource usage and enhancing performance.

### 3. Flexibility:

- Monolithic: Making changes or introducing new features in a monolithic application can be challenging due to tight coupling. Modifications may require modifying the entire application.
- Microservices: Microservices offer flexibility as services are loosely coupled. Developers can make changes or introduce new features to individual services without affecting the entire system.

### 4. Fault Isolation:

- Monolithic: In a monolithic application, a fault in one component can bring down the entire system, as they share the same codebase and runtime environment.
- Microservices: Microservices provide fault isolation. If a service fails, only that specific service is affected, while others continue to operate independently, improving the overall system's resilience.

### 5. Deployment and Continuous Integration/Deployment (CI/CD):

- Monolithic: Deploying a monolithic application typically involves deploying the entire application as a single unit, making the process more complex and time-consuming.
- Microservices: Microservices support independent deployment of services. This enables teams to deploy changes to individual services more frequently, achieving faster time-to-market and enabling continuous integration and deployment practices.

### 6. Development Team Structure:

- Monolithic: With a monolithic application, a development team typically works on the same codebase, which can lead to coordination challenges and slower development cycles.
- Microservices: Microservices allow for smaller, decentralized development teams, each responsible for specific services. This structure promotes autonomy, faster development, and enables teams to work concurrently on different services.

### 7. Technology Diversity:

- Monolithic: A monolithic application usually employs a single technology stack and framework across the entire application.
- Microservices: Microservices offer the flexibility to use different technologies and frameworks for different services, based on their specific requirements.

It's important to note that the choice between microservices and monolithic applications depends on various factors such as the project's complexity, scalability requirements, team size, and development speed. Each approach has its own advantages and challenges, and the decision should be made considering the specific needs and constraints of the project.

### Communication between microservices

In a microservices architecture, communication between microservices is a crucial aspect that needs to be carefully designed and implemented. There are several common approaches for enabling communication between microservices:

### 1. Synchronous Communication:

- HTTP/REST: Microservices can communicate with each other over HTTP using RESTful APIs. This involves sending HTTP requests (GET, POST, PUT, DELETE) to specific endpoints exposed by the target microservice. JSON or XML is commonly used for data exchange.
- RPC (Remote Procedure Call): RPC frameworks facilitate communication between microservices by allowing them to invoke methods or procedures on remote services as if they were local. Examples include gRPC, Apache Thrift, and Apache Avro.

### 2. Asynchronous Communication:

- Message Queues: Microservices can communicate asynchronously using message queues or message brokers such as RabbitMQ, Apache Kafka, or AWS SQS. Services publish messages to a queue, and other services consume those messages asynchronously. This pattern enables decoupling and resilience.
- Event-driven architecture: Microservices can publish events to a message broker or event bus, and other services can subscribe to those events and react accordingly. This pattern promotes loose coupling and enables event sourcing and CQRS (Command Query Responsibility Segregation).

### 3. Service Mesh:

- A service mesh is an infrastructure layer that abstracts and manages communication between microservices. It typically uses sidecar proxies (e.g., Envoy, Linkerd) deployed alongside each microservice to handle traffic routing, load balancing, service discovery, security, and observability. This approach simplifies the development and management of communication between microservices.

### 4. API Gateways:

- An API gateway acts as a single entry point for client requests and provides a centralized interface for communication with multiple microservices. It handles request routing, protocol translation, authentication, authorization, and rate limiting. API gateways can be implemented using tools like NGINX, Kong, or Netflix Zuul.

When designing communication between microservices, it's essential to consider factors such as latency requirements, data consistency, security, and fault tolerance. Additionally, it's important to choose appropriate communication patterns based on the specific use cases and system requirements to ensure effective and reliable communication between microservices.
