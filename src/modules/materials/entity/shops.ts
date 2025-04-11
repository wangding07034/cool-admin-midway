import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, DataSource, Index } from 'typeorm';

console.log(DataSource);

/**
 * 插件信息
 */
@Entity('material_shops')
export class ShopsEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '名称' })
  name: string;

  @Column({ comment: '简介' })
  description: string;
 
}
