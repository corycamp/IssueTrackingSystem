import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  details: string;

  @IsInt()
  commentor_id: number;

  @IsInt()
  issue_id: number;
}

export class UpdateCommentDto extends PartialType(CreateCommentDto) {}
