/* eslint-disable prettier/prettier */
import { ServiceInformationType } from "src/service-information/service-information-type.enum";
import { ServiceInformation } from "src/service-information/service-information.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SecurityService {

    @PrimaryGeneratedColumn()
    id: number; 

    @CreateDateColumn({type: 'timestamptz', nullable: true})
    date: Date;

    @Column()
    type: ServiceInformationType;
    
    @Column({nullable: true})
    fee: number;

    @Column({default: 1})
    state: number;

    @Column({nullable: true})
    rating: number;

    @Column()
    startingTime: string;
    
    @Column()
    endTime: string; 

    @Column()
    groupSize: number;
    
    @Column()
    fkCyclist: number;

    @ManyToOne(type=>ServiceInformation)
    fkServiceInformation: ServiceInformation;
}