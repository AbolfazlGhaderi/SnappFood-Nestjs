import { UserAddressEntity } from './address.entity'
import { BaseEntity } from '../common/abstracts/base.entity'
import { EntityName } from '../common/enums/entity.name.enum'

import { Column, DeleteDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm'

@Entity({ name: EntityName.Users })
export class UserEntity extends BaseEntity
{
    @Column({ nullable: false })
    first_name: string
    @Column({ nullable: true })
    last_name: string
    @Column({ nullable: false, unique: true })
    mobile: string
    @Column({ nullable: false, unique: true })
    email: string
    @Column({ nullable: false, unique: true })
    invite_code: string
    @Column({ default: 0 })
    score: number
    @Column({ nullable: true })
    agentId: number // maybe not needed
    @UpdateDateColumn({ type: 'timestamp with time zone' })
    update_at: Date
    @DeleteDateColumn({ type: 'timestamp with time zone' })
    delete_at: Date
    @OneToMany(() => UserAddressEntity, (address) => address.user)
    user_address: UserAddressEntity[]
}
