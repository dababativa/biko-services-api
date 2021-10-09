import { ServiceType } from "../service-type.enum";

export class CreateServiceDto {
    type: ServiceType;
    
    fee: number;
}