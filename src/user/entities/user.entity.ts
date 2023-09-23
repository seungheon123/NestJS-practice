import { Board } from "src/board/entities/board.entity";
import { BoardLike } from "src/board_like/entities/board_like.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Scrap } from "src/scrap/entities/scrap.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn({name:"user_id"})
    id: number;

    @Column({type: "varchar", length: 45})
    email: string;

    @Column({type: 'varchar',length:45, name: "login_type"})
    type: string;

    @OneToMany(()=>Board, (board)=>board.user)
    boards: Board[];

    @OneToMany(()=>BoardLike, (boardLike)=>boardLike.user)
    boardLikes: BoardLike[];

    @OneToMany(()=>Scrap, (scrap)=>scrap.user)
    scraps: Scrap[];

    @OneToOne(()=>Profile, (profile)=>profile.user)
    profile: Profile;
}
