import { Module } from '@nestjs/common';
import { BoardLikeService } from './board_like.service';
import { BoardLikeController } from './board_like.controller';

@Module({
  controllers: [BoardLikeController],
  providers: [BoardLikeService],
})
export class BoardLikeModule {}
