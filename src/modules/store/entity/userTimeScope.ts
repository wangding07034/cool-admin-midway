import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@cool-midway/core';

@Entity('userTimeScope')
export class UserTimeScopeEntity extends BaseEntity {

  @Column({ comment: '教练id' })
  userId: string;

  @Column({ comment: '课程id' })
  courseId: string;

  @Column({ comment: '开始时间', nullable: true })
  startTime: string;

  @Column({ comment: '结束时间', nullable: true })
  endTime: string;
 
}
 