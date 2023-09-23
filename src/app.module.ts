import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ProfileModule } from './profile/profile.module';
import { typeORMConfig } from './configs/typeorm.configs';
import { ConfigModule } from '@nestjs/config';
import { BoardModule } from './board/board.module';
import { CommunityModule } from './community/community.module';
import { ImageModule } from './image/image.module';
import { BoardImageModule } from './board_image/board_image.module';
import { FollowModule } from './follow/follow.module';
import { BoardLikeModule } from './board_like/board_like.module';
import { ScrapModule } from './scrap/scrap.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '12345678',
    //   database: 'nestjs',
    //   entities: ['dist/**/entities/*.entity.{ts,js}'],
    //   synchronize: true,
    //   logging: true
    // }),
    UserModule,
    ProfileModule,
    BoardModule,
    CommunityModule,
    ImageModule,
    BoardImageModule,
    FollowModule,
    BoardLikeModule,
    ScrapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
