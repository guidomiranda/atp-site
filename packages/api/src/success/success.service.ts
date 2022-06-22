import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SuccessInterface } from './interfaces';

@Injectable()
export class SuccessService {
  constructor(
    @InjectModel('Success')
    private readonly successModel: Model<SuccessInterface>,
  ) {}
}
