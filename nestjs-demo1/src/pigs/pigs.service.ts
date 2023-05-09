import { Injectable } from '@nestjs/common';
import { Pigs } from './pigs.interface';

@Injectable()
export class PigsService {
    private readonly pigs: Pigs[] = []
    async createPig(pig: Pigs) {
        this.pigs.push(pig)
    }
    async findAll() {
        return this.pigs;
    }
}
