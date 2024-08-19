import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity
{
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @CreateDateColumn({ type: 'timestamp with time zone' })
    created_at: Date;
}
