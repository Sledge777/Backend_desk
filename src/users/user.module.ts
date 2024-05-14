import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { User } from './user.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User]),
      forwardRef(() => AuthModule),
  ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}