import { BoardImage } from "src/board_image/entities/board_image.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn({name:'image_id'})
    id:number;

    @Column({type:'text',name:'image_path'})
    path:string;

    @Column({type:'varchar',length:45})
    description: string;

    @OneToOne(()=>BoardImage, (boardImage)=>boardImage.image)
    boardImage: BoardImage;
}
