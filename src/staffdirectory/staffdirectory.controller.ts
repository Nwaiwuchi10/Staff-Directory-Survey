import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StaffdirectoryService } from './staffdirectory.service';
import { CreateStaffdirectoryDto } from './dto/create-staffdirectory.dto';
import { UpdateStaffdirectoryDto } from './dto/update-staffdirectory.dto';

@Controller('staffdirectory')
export class StaffdirectoryController {
  constructor(private readonly staffdirectoryService: StaffdirectoryService) {}

  @Post()
  async createForm(@Body() dto: CreateStaffdirectoryDto) {
    return this.staffdirectoryService.createForm(dto);
  }
  @Get()
  findAll() {
    return this.staffdirectoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffdirectoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStaffdirectoryDto: UpdateStaffdirectoryDto,
  ) {
    return this.staffdirectoryService.update(id, updateStaffdirectoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffdirectoryService.remove(id);
  }
}
