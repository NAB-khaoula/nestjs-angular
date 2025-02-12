import { IsEmail, IsEnum, IsString, MinLength } from "class-validator";
import { UserRole } from "src/enums/user-role.enum";
import { Column } from "typeorm";

export class CreateUserDto {

    @IsString()
    @MinLength(2)
    name: string;
    
    @IsEmail()
    email: string;
    
    @IsEnum(UserRole)
    role: UserRole;
    
    @MinLength(8)
    @IsString()
    password: string;
}
