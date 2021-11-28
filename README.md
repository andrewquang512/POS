# Restaurant POS 2.0
This is the Restaurant POS 2.0 web application project as the assignment for students during Software Engineer course, given by Faculty of Computer Science and copyrighted by Ho Chi Minh University of Technology

# Introduction to project
Point of sale (POS) or point of purchase is the time and place where a retail transaction is completed.At the point of sale, the merchant calculates the amount owed by the customer, indicates that amount,may prepare an invoice for the customer, and indicates the options for the customer to make payment.In restaurant business, POS systems often include table reservation, ordering food, alerts, billing, creditcard processing and customer management. Even before the COVID-19 crisis, POS systems had gained attraction across the industry. During the coronavirus pandemic, restaurants face greater peril than ever. Such systems are expected to increase business intelligence, reduce wasted effort and opportunity to scale to a large business. Moreover, the systems should support take-away options Our customers have multiple restaurants and have a need to develop a responsive web-based POS system that implement the current business flow as described below here (The current POS terminal can be replaced in this web-based solution)

![alt text](https://github.com/andrewquang512/POS/blob/master/report/workflow.png)

# How to install
If this is the first time you run, please do below steps in terminal:
Step 1: install client
```
cd client
npm install
```
Step 2: install server
```
cd server
npm install
```

# How to run
Step 1: run client
```
cd client
npm start
```
Step 2: run server
```
cd server
npm start
```

# [Requirement elicitation](https://github.com/andrewquang512/POS/blob/master/report/Requirement/Requirment.pdf)
Go [here](https://github.com/andrewquang512/POS/blob/master/report/Requirement/Requirment.pdf) for more details

**The context of this project:** A Restaurant POS system is a software that allows operators to start their own restaurant business.Due to the influence of the COVID pandemic, it is urgent to limit face-to-face communication, so this isthe main reason why restaurant POS software was born: to not only be an intermediary between customersand employees but also help conveniently observe, check, and manage the restaurant’s activities.

**Relevant stakeholders:**
  - Customer
  - Chef
  - Restaurant Owner
  - Clerk
  - Shipper
  - Restaurant manager

**Scope of the project:**
  - The interface mainly consists of food images, therefore there is not too much text. You only have to do a few actions to successfully place an order.
  - The system will have a server to retrieve customer information, Customer account information can only be accessed by customers who have registered for that account.
  - With phones, tablets, laptops with different browsers, the system must completely show basic functions as item selection, order confirmation, payment.
  - POS Store customer’s invoice information include: unique identifier for each checkout, the names of the products being paid and our prices, total amount of the invoice, promotion code is applied to the invoice payment form (if any).
  - For managers, POS can report sales, the list invoices, and the list of bills filtered for a specified determined date.
  - The POS only keeps the necessary information of the product when presented in-app: product name, product type, product price

**Use case diagram for whole system:**

![alt text](https://github.com/andrewquang512/POS/blob/master/report/Requirement/images/usecase_system.png)


# [System modeling](https://github.com/andrewquang512/POS/blob/master/report/System%20Modeling/System%20Modelling.pdf)
Go [here](https://github.com/andrewquang512/POS/blob/master/report/System%20Modeling/System%20Modelling.pdf) for more details

**Class diagram:**
![alt text](https://github.com/andrewquang512/POS/blob/master/report/System%20Modeling/images/class-diagram.png)

# [Architecture design](https://github.com/andrewquang512/POS/blob/master/report/Architectural%20Design/Architectural%20Design.pdf)
Go [here](https://github.com/andrewquang512/POS/blob/master/report/Architectural%20Design/Architectural%20Design.pdf) for more details

The software architecture describes the different components of the application, and the relationbetween them. In this restaurant POS 2.0, we follow Model – View – Controller (MVC) architecture.To implement this, we apply the MongoDB - Expressjs - React - Nodejs (MERN) technology stack.The view is generated in the browser using ReactJS, which communicates with the backend, whichhave routes to direct to different controllers. These controllers will access to schema, which in turn,calls the right mutation or query. The model takes care of accessing and retrieving the data fromMongoDB. The following two images are the structure of MERN stack and the MVC architecture.

![alt text](https://github.com/andrewquang512/POS/blob/master/report/Architectural%20Design/images/architecture-approach-1.png)
![alt text](https://github.com/andrewquang512/POS/blob/master/report/Architectural%20Design/images/architecture-approach-2.png)

# Preview UI

![alt text](https://github.com/andrewquang512/POS/blob/master/report/UI/menu-screen.PNG)

![alt text](https://github.com/andrewquang512/POS/blob/master/report/UI/detail.PNG)

![alt text](https://github.com/andrewquang512/POS/blob/master/report/UI/cart.png)

![alt text](https://github.com/andrewquang512/POS/blob/master/report/UI/input.PNG)

![alt text](https://github.com/andrewquang512/POS/blob/master/report/UI/all.png)

![alt text](https://github.com/andrewquang512/POS/blob/master/report/UI/ordermanage.PNG)
