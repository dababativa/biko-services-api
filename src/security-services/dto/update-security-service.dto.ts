import { PartialType } from '@nestjs/mapped-types';
import { CreateSecurityServiceDto } from './create-security-service.dto';

export class UpdateSecurityServiceDto extends PartialType(CreateSecurityServiceDto) {}
