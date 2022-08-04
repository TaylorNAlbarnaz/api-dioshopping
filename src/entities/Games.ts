import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("games")
class Game {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    release_date: string;

    @Column()
    cover: string;

    @CreateDateColumn()
    added_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Game }
