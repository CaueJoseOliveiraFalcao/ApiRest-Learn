import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
@Entity()
export default class Tasks {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    title : string;
    @Column()
    descripiton : string;
    @Column({
        default : false
    })
    finished:boolean;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at : Date;



}