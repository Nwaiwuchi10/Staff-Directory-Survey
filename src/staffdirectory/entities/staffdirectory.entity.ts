// src/form/schemas/form.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StaffdirectoryDocument = Staffdirectory & Document;

export enum Department {
  BizOps = 'Biz Ops',
  Engineering = 'Engineering',
  ProductMarketing = 'Product & Marketing',
  Research = 'Research and Intelligence Unit',
  Media = 'Media',
  HR = 'HR',
}

export enum Unit {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Mobile = 'Mobile',
  Projects = 'Projects',
  QualityAssurance = 'Quality Assurance',
  BusinessPartinership = 'Business & Partinership',
  CNTV = 'CNTV',
  Editorial = 'Editorial',
  DataAcquisation = 'Data Acquisation',
  CreativeDesign = 'Creative Design/Graphics',
  ProductDesign = 'Product Design UX',
  Marketing = 'Marketing',
  ProductManagement = 'Product Management',
  Copywriting = 'Copywriting',
}

@Schema({ timestamps: true })
export class Staffdirectory {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: false })
  aboutYou: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop()
  whatsappNumber: string;

  @Prop({ enum: Department, required: true })
  department: Department;

  @Prop({ enum: Unit, required: true })
  unit: Unit;

  @Prop()
  interests?: string;

  @Prop()
  superPower?: string;

  @Prop()
  presidentPlans?: string;
}

export const StaffdirectorySchema =
  SchemaFactory.createForClass(Staffdirectory);
