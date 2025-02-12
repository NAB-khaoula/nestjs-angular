import { UserRole } from "src/enums/user-role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsString, MinLength } from 'class-validator';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    @IsString()
    @MinLength(2)
    name: string;

    @Column({unique: true})
    @IsEmail()
    email: string;

    @Column({type: 'enum', enum: UserRole, default: UserRole.USER})
    role: UserRole;

    @Column()
    @IsString()
    @MinLength(8)
    password: string;
}
