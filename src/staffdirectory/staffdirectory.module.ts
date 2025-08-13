import { Module } from '@nestjs/common';
import { StaffdirectoryService } from './staffdirectory.service';
import { StaffdirectoryController } from './staffdirectory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Staffdirectory,
  StaffdirectorySchema,
} from './entities/staffdirectory.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Staffdirectory.name,
        schema: StaffdirectorySchema,
      },
    ]),
  ],
  controllers: [StaffdirectoryController],
  providers: [StaffdirectoryService],
})
export class StaffdirectoryModule {}
