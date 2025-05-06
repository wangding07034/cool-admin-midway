import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@cool-midway/core';

// 预约记录
@Entity('classAppointmentrecord')
export class ClassAppointmentrecordEntity extends BaseEntity {
  @Column({ comment: '课程id' })
  courseId: string;

  @Column({ comment: '门店id', nullable: true })
  storeId: string;
  @Column({ comment: '授课人员id', nullable: true })
  userId: string;

  @Column({ comment: '预约人员id', default: 1 })
  appointmentUserId: string;

  @Column({ comment: '预约时间', default: 1 })
  appointmentTime: string;
  
  @Column({ comment: '预约状态 0 待上课 1 进行中 2 已完成 3 已取消', default: 1 })
  courseStatus: number;


  
}
