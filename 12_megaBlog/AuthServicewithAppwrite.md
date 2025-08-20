# 🔐 AuthService with Appwrite

This module provides a simple **authentication service** built with [Appwrite](https://appwrite.io/) in JavaScript. It handles user sign-up, login, session management, and logout.

---

## 📂 File Structure

```bash
src/
 ├── conf/
 │    └── conf.js   # Appwrite configuration (endpoint, projectId)
 └── services/
      └── AuthService.js   # Authentication service class
```

---

## ⚙️ Configuration (`conf.js`)

Make sure you have your **Appwrite URL** and **Project ID** configured:

```js
const conf = {
  appwriteUrl: "https://cloud.appwrite.io/v1",  // Your Appwrite endpoint
  appwriteProjectId: "YOUR_PROJECT_ID",        // Your Appwrite project ID
};

export default conf;
```

---

## 📌 AuthService.js

### Import Dependencies

```js
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";
```

### Create AuthService Class

```js
export class AuthService {
  clint = new Client();
  account;

  constructor() {
    this.clint
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.clint);
  }
```

---

## 🚀 Features

### 1️⃣ Create Account

```js
async createAccount({ email, password, name }) {
  try {
    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (userAccount) {
      return this.login({ email, password });
    } else {
      return userAccount;
    }
  } catch (error) {
    throw error;
  }
}
```

✅ Creates a new account and logs in immediately after successful registration.

---

### 2️⃣ Login

```js
async login({ email, password }) {
  try {
    return await this.account.createEmailPasswordSession(email, password);
  } catch (error) {
    throw error;
  }
}
```

✅ Creates a session for the user with **email & password**.

---

### 3️⃣ Get Current User

```js
async getCurrentUser() {
  try {
    return await this.account.get();
  } catch (error) {
    throw error;
  }
  return null;
}
```

✅ Fetches details of the **currently logged-in user**.

---

### 4️⃣ Logout

```js
async logout() {
  try {
    await this.account.deleteSessions();
  } catch (error) {
    throw error;
  }
}
```

✅ Deletes all active sessions for the logged-in user.

---

## 📦 Export Service

```js
const authService = new AuthService();
export default authService;
```

Now you can import `authService` anywhere in your app:

```js
import authService from "./services/AuthService";

// Example usage
await authService.createAccount({
  email: "test@example.com",
  password: "mypassword",
  name: "John Doe"
});
```

---

## ✅ Summary

* 🔹 Easy-to-use wrapper for Appwrite authentication
* 🔹 Handles **signup, login, session, logout**
* 🔹 Centralized service for managing authentication logic

