import { Board } from "src/board/entities/board.entity";
import { Image } from "src/image/entities/image.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BoardImage {
    @PrimaryGeneratedColumn({name:'board_image_id'})
    id:number;

    @Column({type:'tinyint'})
    role:number

    @Column({type:'tinyint'})
    image_level:number;

    @ManyToOne(()=>Board, (board)=>board.id)
    @JoinColumn({name:'board_id'})
    board:Board

    @ManyToOne(()=>Image, (image)=>image.id)
    @JoinColumn({name:'image_id'})
    image:Image
}
