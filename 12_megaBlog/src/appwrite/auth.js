import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  clint = new Client();
  account;
  constructor() {
    this.clint.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

    this.account = new Account(this.clint);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method

        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  async logout() {
    try {
        await this.account.deleteSessions();
    } catch (error) {
        throw error
        
    }
  }
}

const authService = new AuthService();

export default authService;
