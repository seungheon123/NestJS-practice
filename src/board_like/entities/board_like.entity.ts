import { Board } from "src/board/entities/board.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BoardLike {
    @PrimaryGeneratedColumn({name:'board_like_id'})
    id:number;

    @ManyToOne(()=>User, (user)=>user.id)
    @JoinColumn({name:'user_id'})
    user:User;

    @ManyToOne(()=>Board, (board)=>board.id)
    @JoinColumn({name:'board_id'})
    board:Board;

}
