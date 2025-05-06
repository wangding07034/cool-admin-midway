import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@cool-midway/core';

@Entity('course')
export class CourseEntity extends BaseEntity {
  @Column({ comment: '课程名称' })
  name: string;

  @Column({ comment: '门店id', nullable: true })
  storeId: string;

  @Column({ comment: '授课人员id', nullable: true })
  userId: string;

  @Column({ comment: '上课地点' })
  address: string;

  @Column({ comment: '是否可预约 1 可预约 0 不可预约', default: 1 })
  courseStatus: number;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;

  @Column({ comment: '可预约的天数', type: 'json', nullable: true })
  weekDays: number[]; 
}
