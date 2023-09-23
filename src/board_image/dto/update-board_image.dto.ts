import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardImageDto } from './create-board_image.dto';

export class UpdateBoardImageDto extends PartialType(CreateBoardImageDto) {}
