import { IsInt, IsNotEmpty, IsString, IsOptional, Min, Max } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateIssueDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(1)
  @Max(5)
  priority: number;

  @IsString()
  @IsOptional()
  stage?: string;

  @IsInt()
  @IsOptional()
  assigned_user?: number;

  @IsInt()
  owner_id: number;

  @IsInt()
  project_id: number;
}

export class UpdateIssueDto extends PartialType(CreateIssueDto) {}
