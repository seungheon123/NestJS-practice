import { Board } from "src/board/entities/board.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Community {
    @PrimaryGeneratedColumn({name:'community_id'})
    id:number;

    @Column({type:'varchar',length:45})
    name:string;

    @OneToMany(()=>Board, board => board.community)
    boards: Board[];
}
