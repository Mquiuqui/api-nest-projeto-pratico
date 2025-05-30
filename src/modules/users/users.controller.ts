import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Put,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "src/DTO/create-user.dto";
import { User } from "src/Interface/user";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body.name, body.email);
  }

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(":id")
  getUserById(@Param("id") id: string): User | undefined {
    return this.usersService.getUserById(Number(id));
  }

  @Put(":id")
  updateUser(@Param("id") id: string, @Body() body: CreateUserDto) {
    const resp = this.usersService.updateUser(
      Number(id),
      body.name,
      body.email,
    );
    if (!resp) {
      return { success: false, message: "usuário não encontrado" };
    }
    return resp;
  }

  @Delete(":id")
  deleteUser(@Param("id") id: string) {
    const success = this.usersService.deleteUser(Number(id));
    return { success };
  }
}
