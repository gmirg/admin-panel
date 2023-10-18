import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    if (user?.password !== pass) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate and sign a JWT token
    const payload = { sub: user.userId, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
