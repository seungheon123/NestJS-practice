import { BoardImage } from "src/board_image/entities/board_image.entity";
import { BoardLike } from "src/board_like/entities/board_like.entity";
import { Community } from "src/community/entities/community.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board {
    @PrimaryGeneratedColumn({name:'board_id'})
    id:number;

    @Column({type:'varchar',length:45})
    title:string;

    @Column({type:'varchar',length:1000})
    content:string;

    @Column({type:'tinyint'})
    views:number;

    @Column({type: 'tinyint'})
    likes: number;

    @CreateDateColumn({name:'created_at'})
    date:Date;

    @Column({type:'tinyint'})
    visible:number;

    @Column({type:'tinyint'})
    completion:number;

    @ManyToOne(()=>User, (user)=>user.id)
    @JoinColumn({name:'user_id'})
    user:User;

    @ManyToOne(()=>Community, (community)=>community.id)
    @JoinColumn({name:'community_id'})
    community:Community;

    @OneToMany(()=>BoardImage, (boardImage)=>boardImage.board)
    boardImages: BoardImage[];

    @OneToMany(()=>BoardLike, (boardLike)=>boardLike.board)
    boardLike: BoardLike[];
}
