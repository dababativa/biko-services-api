/* eslint-disable prettier/prettier */
import { ServiceType } from "src/services/service-type.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SecurityService {

    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    date: Date;

    @Column()
    type: ServiceType;
    
    @Column()
    fee: number;

    @Column()
    state: number;

    @Column()
    rating: number;

    @Column()
    startingTime: string;
    
    @Column()
    endTime: string; 

    @Column()
    groupSize: number;
}