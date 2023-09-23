import { Board } from "src/board/entities/board.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn({name:"user_id"})
    id: number;

    @Column({type: "varchar", length: 45})
    email: string;

    @Column({type: "tinyint", name: "login_type"})
    type: string;

    @OneToMany(()=>Board, (board)=>board.user)
    boards: Board[];

}
