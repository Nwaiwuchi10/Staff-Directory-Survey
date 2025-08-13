import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Department, Unit } from '../entities/staffdirectory.entity';

export class CreateStaffdirectoryDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsOptional()
  @IsString()
  aboutYou: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  whatsappNumber: string;

  @IsEnum(Department)
  department: Department;

  @IsEnum(Unit)
  unit: Unit;

  @IsOptional()
  @IsString()
  interests?: string;

  @IsOptional()
  @IsString()
  superPower?: string;

  @IsOptional()
  @IsString()
  presidentPlans?: string;
}
