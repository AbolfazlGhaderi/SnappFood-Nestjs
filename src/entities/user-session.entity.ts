import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, UpdateDateColumn } from 'typeorm'
import { UserEntity } from './user.entity'
import { BaseEntity } from '@/common/abstracts/base.entity'
import { EntityName } from '@/common/enums/entity.name.enum'

@Entity({ name: EntityName.UserSessions })
export class UserSessionEntity extends BaseEntity
{
    @Column({ type:'text', unique: true, nullable: false })
    token: string

    @ManyToOne(() => UserEntity, (user) => user.user_session, {  nullable: false })
    @JoinColumn({ name: 'user_id' })
    user: UserEntity

    @Column({ type: 'timestamptz', nullable: false })
    last_activity_at: Date

    @Column({ type: 'enum', enum: [ 'active', 'expired' ], default: 'active' })
    status: 'active' | 'expired'

    @Column({ type: 'text', nullable: false })
    user_agent: string

    @UpdateDateColumn({ type: 'timestamptz' })
    update_at: Date

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    delete_at?: Date
}