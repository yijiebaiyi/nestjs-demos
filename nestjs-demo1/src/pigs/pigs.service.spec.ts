import { Test, TestingModule } from '@nestjs/testing';
import { PigsService } from './pigs.service';

describe('PigsService', () => {
  let service: PigsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PigsService],
    }).compile();

    service = module.get<PigsService>(PigsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
