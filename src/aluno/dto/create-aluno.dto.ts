import { IsInt, IsString } from "class-validator";

export class CreateAlunoDto {
    @IsString()
    nome: string;
    @IsString()
    email: string;
    @IsInt()
    idade: number;
    @IsString()
    serie: string;
    @IsString()
    endereco: string;
}
