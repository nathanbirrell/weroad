import { Test, TestingModule } from '@nestjs/testing';
import { TravelsService } from './travels.service';

// TODO: write an integration test for this service
describe.skip('TravelsService', () => {
  let service: TravelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelsService],
    }).compile();

    service = module.get<TravelsService>(TravelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
