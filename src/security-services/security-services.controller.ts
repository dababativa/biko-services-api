import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SecurityServicesService } from './security-services.service';
import { CreateSecurityServiceDto } from './dto/create-security-service.dto';
import { UpdateSecurityServiceDto } from './dto/update-security-service.dto';

@Controller('security-services')
export class SecurityServicesController {
  constructor(private readonly securityServicesService: SecurityServicesService) {}

  @Post()
  create(@Body() createSecurityServiceDto: CreateSecurityServiceDto) {
    return this.securityServicesService.create(createSecurityServiceDto);
  }

  @Get()
  findAll() {
    return this.securityServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.securityServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSecurityServiceDto: UpdateSecurityServiceDto) {
    return this.securityServicesService.update(+id, updateSecurityServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.securityServicesService.remove(+id);
  }
}
