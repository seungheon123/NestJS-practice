import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn({name:"profile_id"})
    id:number;

    @Column({type:"varchar",length:45})
    nickname:string;

    @Column({name:"image_url",type:"text",nullable:true})
    url:string;

    @Column({type:"varchar",length:300,nullable:true})
    introduction:string;

    @CreateDateColumn({name:"join_date"})
    date: Date;

    @Column({type:"varchar",length:45})
    role: string;

    @OneToOne(()=>User)
    @JoinColumn({name:'user_id'})
    user: User

}
