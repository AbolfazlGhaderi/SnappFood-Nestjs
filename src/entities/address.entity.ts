import { UserEntity } from './user.entity';
import { EntityName } from '../common/enums/entity.name.enum';
import { BaseEntity } from '../common/abstracts/base.entity';

import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, UpdateDateColumn } from 'typeorm';

@Entity({ name: EntityName.UserAddress })
export class UserAddressEntity extends BaseEntity
{
    @Column()
    title: string;
    @Column()
    province: string;
    @Column()
    city: string;
    @Column()
    address: string;
    @Column({ unique: true, nullable: false })
    postal_code: string;
    @UpdateDateColumn({ type: 'timestamptz' })
    update_at: Date;
    @DeleteDateColumn({ type: 'timestamptz' })
    delete_at: Date;

    @ManyToMany(() => UserEntity, (user) => user.user_address, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;
}
