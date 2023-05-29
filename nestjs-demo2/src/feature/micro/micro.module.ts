import { Module } from '@nestjs/common';
import { ClientsModule, ClientsModuleOptions, Transport } from '@nestjs/microservices';
import { MicroService } from './micro.service';

@Module({
    imports: [
        
    ],
    providers: [MicroService]
})
export class MicroModule {

}
