import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@cool-midway/core';

@Entity('courseTimeScope')
export class CourseTimeScopeEntity extends BaseEntity {

  @Column({ comment: '课程id' })
  courseId: string;

  @Column({ comment: '课程开始时间', nullable: true })
  startTime: string;

  @Column({ comment: '课程结束时间', nullable: true })
  endTime: string;
 
}
 