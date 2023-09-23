import { User } from "src/user/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Follow {
    @PrimaryGeneratedColumn({name:'follow_id'})
    id:number;

    @ManyToOne(()=>User, (user)=>user.id)
    @JoinColumn({name:'follwer'})
    follower:User;

    @ManyToOne(()=>User, (user)=>user.id)
    @JoinColumn({name:'follower'})
    followee:User;
}
