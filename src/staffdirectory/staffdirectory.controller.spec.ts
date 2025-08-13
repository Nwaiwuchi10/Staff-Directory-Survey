import { Test, TestingModule } from '@nestjs/testing';
import { StaffdirectoryController } from './staffdirectory.controller';
import { StaffdirectoryService } from './staffdirectory.service';

describe('StaffdirectoryController', () => {
  let controller: StaffdirectoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffdirectoryController],
      providers: [StaffdirectoryService],
    }).compile();

    controller = module.get<StaffdirectoryController>(StaffdirectoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
