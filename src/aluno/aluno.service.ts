import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunoService {
  constructor(private prisma: PrismaService){}

  private mapToEntity(aluno: any): Aluno {
    return{
      id: aluno.id,
      nome: aluno.nome,
      email: aluno.email,
      idade: aluno.idade,
      serie: aluno.serie,
      endereco: aluno.endereco,
    }
  }

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const aluno = await this.prisma.alunoApi.create({
      data: createAlunoDto,
    })
    return this.mapToEntity(aluno);
  }

  async findAll(): Promise<Aluno[]>{
    const aluno = await this.prisma.alunoApi.findMany();
    return aluno.map((aluno) => this.mapToEntity(aluno));
  }

  async findOne(id: string): Promise<Aluno> {
    const aluno = await this.prisma.alunoApi.findUnique({
      where: {id}
    })
    if(!aluno){
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
    return this.mapToEntity(aluno);
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
    const aluno = await this.prisma.alunoApi.update({
      where: {id:id},
      data: updateAlunoDto
    })
    return this.mapToEntity(aluno);
  }

  async remove(id: string): Promise<Aluno> {
    const aluno = await this.prisma.alunoApi.delete({
      where: {id:id}
    })
    return this.mapToEntity(aluno);
  }
}
