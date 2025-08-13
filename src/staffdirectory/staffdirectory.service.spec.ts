import { Test, TestingModule } from '@nestjs/testing';
import { StaffdirectoryService } from './staffdirectory.service';

describe('StaffdirectoryService', () => {
  let service: StaffdirectoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffdirectoryService],
    }).compile();

    service = module.get<StaffdirectoryService>(StaffdirectoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
