import { ServiceInformationType } from "../service-information-type.enum";

export class CreateServiceInformationDto {
    type: ServiceInformationType;
    
    fee: number;
}