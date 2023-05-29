import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import {GrpcMethod} from '@nestjs/microservices'

@Controller()
export class HeroController {
    @GrpcMethod('HeroesService', 'findOne')
    findOne(data: {id:number}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
        const items = [
            {id: 1, name:"John"},
            {id: 2, name:"James"},
        ];
        return items.find(({id}) => id === data.id);
    }
}
