import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

const convertJSON = (csv) => {
  return csv.data;
  const lines = csv.split('\n');

  const result = [];

  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(',');

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
};

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.usuario.create({ data: { ...dto } });
  }

  async createAll(dto: any) {
    const bodyUsuario = dto;
    let arrayUsuario = [];
    const promises = [];

    if (Object.prototype.toString.call(bodyUsuario) === '[object Object]') {
      arrayUsuario.push(bodyUsuario);
    } else {
      arrayUsuario = bodyUsuario;
    }
    //console.log(arrayUsuario);

    await arrayUsuario.forEach((d) => {
      promises.push(console.log('ddddd:', d));
      promises.push(this.prisma.usuario.create({ data: { ...d } }));
    });

    await Promise.all(promises);

    return arrayUsuario;
    //return this.prisma.usuario.create({ data: { ...dto } });
  }

  async createCSV(dto: any) {
    const json = await convertJSON(dto);
    return json;
  }

  update(id: string, dto: any) {
    return this.prisma.usuario.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  delete(id: string) {
    return this.prisma.usuario.delete({ where: { id } });
  }

  getAll() {
    return this.prisma.usuario.findMany();
  }

  getOne(id: string) {
    return this.prisma.usuario.findFirst({ where: { id } });
  }

  getOneCodigo(codigo: string) {
    return this.prisma.usuario.findFirst({ where: { codigo } });
  }
}
