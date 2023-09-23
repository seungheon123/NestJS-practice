import { Injectable } from '@nestjs/common';
import { CreateBoardLikeDto } from './dto/create-board_like.dto';
import { UpdateBoardLikeDto } from './dto/update-board_like.dto';

@Injectable()
export class BoardLikeService {
  create(createBoardLikeDto: CreateBoardLikeDto) {
    return 'This action adds a new boardLike';
  }

  findAll() {
    return `This action returns all boardLike`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardLike`;
  }

  update(id: number, updateBoardLikeDto: UpdateBoardLikeDto) {
    return `This action updates a #${id} boardLike`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardLike`;
  }
}
