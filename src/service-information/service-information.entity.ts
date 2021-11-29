import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceInformationType } from './service-information-type.enum';

@Entity()
export class ServiceInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: ServiceInformationType;

  @Column()
  fee: number;

  @Column()
  fkBiko: number;
}
