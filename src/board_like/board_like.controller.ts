import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoardLikeService } from './board_like.service';
import { CreateBoardLikeDto } from './dto/create-board_like.dto';
import { UpdateBoardLikeDto } from './dto/update-board_like.dto';

@Controller('board-like')
export class BoardLikeController {
  constructor(private readonly boardLikeService: BoardLikeService) {}

  @Post()
  create(@Body() createBoardLikeDto: CreateBoardLikeDto) {
    return this.boardLikeService.create(createBoardLikeDto);
  }

  @Get()
  findAll() {
    return this.boardLikeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardLikeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardLikeDto: UpdateBoardLikeDto) {
    return this.boardLikeService.update(+id, updateBoardLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardLikeService.remove(+id);
  }
}
