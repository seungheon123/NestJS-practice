import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn({name:'image_id'})
    id:number;

    @Column({type:'text',name:'image_path'})
    path:string;

    @Column({type:'varchar',length:45})
    description: string;
}
