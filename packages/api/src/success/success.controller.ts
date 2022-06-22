import { Controller } from '@nestjs/common';
import { SuccessService } from './success.service';

@Controller('success')
export class SuccessController {
  constructor(private successService: SuccessService) {}
}
