import { EntityName } from '../common/enums/entity.name.enum';
import { BaseEntity } from '../common/abstracts/base.entity';

import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, UpdateDateColumn } from 'typeorm';

@Entity({ name: EntityName.Categories })
export class CategoryEntity extends BaseEntity
{
    @Column()
    title: string;
    @Column({ unique: true, nullable: false })
    slug: string;
    @Column()
    image: string;
    @Column({ type: 'boolean' })
    show: boolean;
    @Column({ unique: true, nullable: false })
    postal_code: string;
    @ManyToOne(() => CategoryEntity, (category) => category.children, { onDelete: 'CASCADE' })
    @JoinColumn({ name:'parent_id' })
    parent: CategoryEntity;
    @OneToMany(() => CategoryEntity, (category) => category.parent)
    children: CategoryEntity[];

    @UpdateDateColumn({ type: 'timestamptz' })
    update_at: Date;
    @DeleteDateColumn({ type: 'timestamptz' })
    delete_at: Date;
}