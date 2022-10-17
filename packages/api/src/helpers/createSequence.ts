import { Prisma, PrismaClient } from '@prisma/client';
import { SequenceService } from '../sequence/sequence.service';
const prisma = new PrismaClient();

export const createSequence = async (nombre: string, dto: any) => {
  try {
    let sequence = await prisma.sequence.findFirst({
      where: { nombre },
    });

    const codigo = sequence?.seq + 1 || 0;
    console.log('codigo1: ', codigo);
    if (sequence) {
      console.log('codigo2: ', codigo);
      sequence = await prisma.sequence.update({
        where: { nombre },
        data: { seq: codigo },
      });
      console.log('codigo3: ', codigo);
    } else {
      console.log('codigo4: ', codigo);
      await prisma.sequence.create({ data: {} });
      console.log('codigo5: ', codigo);
    }
    console.log('codigo6: ', codigo);
    return codigo;
    console.log('codigo7: ', codigo);
  } catch {
    throw new Error('Error al crear Voucher');
  }
};
