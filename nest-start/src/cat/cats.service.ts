import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable() // Nest IoC @Injectable() 컨테이너에서 관리할 수 있는 클래스 임을 선언하는 메타데이터를 연결합니다
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll() {
        return this.cats;
    }
}
