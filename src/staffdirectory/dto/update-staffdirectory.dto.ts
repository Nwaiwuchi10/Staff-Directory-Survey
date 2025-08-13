import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffdirectoryDto } from './create-staffdirectory.dto';

export class UpdateStaffdirectoryDto extends PartialType(CreateStaffdirectoryDto) {}
