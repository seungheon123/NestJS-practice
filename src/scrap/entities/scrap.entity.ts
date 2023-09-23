import { Board } from "src/board/entities/board.entity";
import { User } from "src/user/entities/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Scrap {
    @PrimaryGeneratedColumn({name:'scrap_id'})
    id:number;

    @CreateDateColumn({name:'scrap_date'})
    date:Date;

    @ManyToOne(()=>User, (user)=>user.scraps)
    @JoinColumn({name:'user_id'})
    user:User;

    @ManyToOne(()=>Board, (board)=>board.scraps)
    @JoinColumn({name:'board_id'})
    board:Board;
}
