import { Injectable } from "@nestjs/common";
import { User } from "src/Interface/user";

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  createUser(name: string, email: string): User {
    const newUser: User = { id: this.idCounter++, name, email };
    this.users.push(newUser);
    return newUser;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id: number, name: string, email: string): User | undefined {
    const user = this.getUserById(id);
    if (user) {
      user.name = name;
      user.email = email;
      return user;
    }
    return undefined;
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}
