import { Module } from '@nestjs/common';
import { BoardImageService } from './board_image.service';
import { BoardImageController } from './board_image.controller';

@Module({
  controllers: [BoardImageController],
  providers: [BoardImageService],
})
export class BoardImageModule {}
