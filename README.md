
##  Project - Contacts Web App

### Features

- Live Website
- Send OTP to verified Contacts 
- Display Complete Contact List
- Display Complete Message List
- Create New Contacts(But can't send OTP until Contact verified.. due to Twilio working on a free Trial currently)


### Screenshots

![App Screenshot](https://i.postimg.cc/nzBWYh4Z/chrome-screenshot-2.png)

![chrome-screenshot-3.png](https://i.postimg.cc/R0Hmy97p/chrome-screenshot-3.png)

![chrome-screenshot-4.png](https://i.postimg.cc/G2tFd7pf/chrome-screenshot-4.png)
### Tech Stack

**Client:** React, Bootstrap

**Server:** Node, Express, MongoDB, Twilio


### Documentation

[Documentation](https://docs.google.com/document/d/12N8T_HIUBI1ttDsSncwO62zWSpJ_3n9eNqzycbAals8/edit?usp=sharing)


### Demo

[Live wesite](https://contacts-3dtu.onrender.com/)


### 🛠 Skills
Javascript, NodeJS, ReactJS, ExpressJS, MongoDB, Bootstrap, Twilio


### Lessons Learned

Build a professional Contacts Web App with the OTP SMS sending functionalty with help of Twilio 
### Optimizations

Add a new page for creating new contacts
### API Reference

#### Get complete contact list

```http
  GET /getAllContact
```
- For fetching data of all contacts List from the database
#### Get item

```http
  GET /getContactById/:contactId
```
-  For fetching data of contact by using contact Id from the database
- Required contactId

#### Create New Contact

```http
  POST /createContact
```
-  Requests get fired from the front end with contact details (but can't send OTP until Contact verified.. due to Twilio working on a free Trial currently) 
- Used proper validation for data of contact details then stored in the database

#### Create New Contact

```http
  GET /getOtp
```
- For getting OTP(every time new) 6 digits number

```http
  POST /sendMessage
```
- For sending the message(SMS) to contact(verified) with the help of Twilio along with OTP
- Storing message data in the database after suitable validations

```http
  GET /getMessages
```
- For fetching the message list from the database
### Run Locally

Clone the project

```bash
  git clone https://github.com/lavverma/Digiaccel.git
```
For server run

checkout branch server

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  node src/index.js
```

For Client run

checkout branch master

Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn run dev
```


### Author

- [Lav verma](https://github.com/lavverma)

