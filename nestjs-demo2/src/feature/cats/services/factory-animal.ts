/*
 * @Author: tuojinxin
 * @Date: 2023-05-12 16:30:25
 * @LastEditTime: 2023-05-12 17:16:56
 * @LastEditors: tuojinxin
 * @Description: 
 */
interface Animal {
    say(): string
}

class Dog implements Animal {
    say(): string {
        return "Woof";
    }
}

class Cat implements Animal {
    say(): string {
        return "Meao";
    }
}

export class AnimalAction {
    constructor(private animalName: string) { }
    private animal: Animal;

    creat(): Animal {
        if (this.animalName === "cat") {
            this.animal = new Cat();
        } else {
            this.animal = new Dog();
        }
        return this.animal;
    }

    say(): string {
        if (this.animalName === "cat") {
            return new Cat().say();
        } else {
            return new Dog().say();
        }
    }

}

