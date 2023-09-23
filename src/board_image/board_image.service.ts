import { Injectable } from '@nestjs/common';
import { CreateBoardImageDto } from './dto/create-board_image.dto';
import { UpdateBoardImageDto } from './dto/update-board_image.dto';

@Injectable()
export class BoardImageService {
  create(createBoardImageDto: CreateBoardImageDto) {
    return 'This action adds a new boardImage';
  }

  findAll() {
    return `This action returns all boardImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardImage`;
  }

  update(id: number, updateBoardImageDto: UpdateBoardImageDto) {
    return `This action updates a #${id} boardImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardImage`;
  }
}
