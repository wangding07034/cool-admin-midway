import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@cool-midway/core';

@Entity('store')
export class StoreEntity extends BaseEntity {
  @Column({ comment: '门店名称' })
  name: string;

  @Column({ comment: '地址', nullable: true })
  address: string;

  @Column({ comment: '联系方式', nullable: true })
  phone: string;

  @Column({ comment: '营业时间', nullable: true })
  businessHours: string;

  @Column({ comment: '状态 1-营业中 0-已关闭', default: 1 })
  status: number;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;
}
