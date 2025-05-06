import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@cool-midway/core';

// 课程预约信息
@Entity('bookAClassInfo')
export class bookAClassInfoEntity extends BaseEntity {
  
  @Column({ comment: '课程id', nullable: true })
  courseId: string;

  @Column({ comment: '授课人员id', nullable: true })
  userId: string;

  @Column({ comment: '上课地点' })
  address: string;

  @Column({ comment: '开始时间' })
  startTime: string;

  @Column({ comment: '结束时间' })
  endTime: string;

  @Column({ comment: '最大预约人数' })
  maxUsers: number;

  @Column({ comment: '已预约人数' })
  bookedUsers: number;

  
}
