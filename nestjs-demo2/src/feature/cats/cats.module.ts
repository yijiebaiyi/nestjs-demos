import { Module } from '@nestjs/common';
import { CatsService } from './services/cats.service';
import { hello } from './services/hello';
import { CatsController } from './cats.controller';
import { DevMycatsService } from './services/dev-mycats.service';
import { ProdMycatsService } from './services/prod-mycats.service';
import { MycatsService } from './services/mycats';
import { AnimalAction } from './services/factory-animal';


@Module({
    providers: [
        // 1. 标准提供者
        CatsService,
        // 2. 值提供者
        // {
        //     provide: CatsService,
        //     useValue: {
        //         findAll: function () {
        //             console.log("this is useValue service")
        //         },
        //     }
        // }
        // 3. 非类提供者
        {
            provide: "HELLO",
            useValue: hello
        },
        // 4. 类提供者
        {
            provide: MycatsService,
            useClass: process.env.NODE_ENV === "development" ? DevMycatsService : ProdMycatsService
        },
        // 5. 别名提供者
        {
            provide: "AliasCatsService",
            useExisting: CatsService
        },
        // 6. 工厂提供者
        {
            provide: "ANIMAL_FACTORY",
            useFactory: (animalName: string) => {
                return new AnimalAction(animalName).creat();
            },
            inject: ['ANIMAL_NAME']
        },
        {
            provide: "ANIMAL_NAME",
            useValue: "cat"
        },

        // 7. 非服务提供者
        {
            provide: "CONFIG",
            useFactory: () => {
                return 1 == 1 ? ["name", "age"] : ["class"];
            },
        },

        // 8. 异步提供者
        {
            provide: "ASYNC_PROVIDER",
            useFactory: async () => {
                console.log("delaing....")
                await delay(5000);
                console.log("delaed")
                return "helloworld"
            },
        }

    ],
    controllers: [
        CatsController,
    ],

    //导出。可以根据token导出
    exports: ['ANIMAL_FACTORY']
})
export class CatsModule { }


function delay(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms) });
}