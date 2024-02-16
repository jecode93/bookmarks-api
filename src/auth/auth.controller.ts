import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth') // For global prefix route /auth
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup') // Route to sign up - /auth/signup
  signup() {
    return this.authService.signup();
  }

  @Post('signin') // Route to sign in - /auth/signin
  signin() {
    return this.authService.signin();
  }
}