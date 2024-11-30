import { IsOptional } from 'class-validator';
import { IsString } from 'class-validator';

export class OrderQueryDto {
  @IsOptional()
  @IsString()
  status: string;
}
