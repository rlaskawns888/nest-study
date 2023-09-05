import { Injectable } from '@nestjs/common';
import { Cats } from './interfaces/cats.interface';

@Injectable() // Nest IoC @Injectable() 컨테이너에서 관리할 수 있는 클래스 임을 선언하는 메타데이터를 연결합니다
export class CatsService {
    private readonly cats: Cats[] = [];

    create(cat: Cats) {
        console.log('cats: ', this.cats);
        
        this.cats.push(cat);

        console.log('cats: ', this.cats);
        
    }

    findAll() {
        return this.cats;
    }
}
