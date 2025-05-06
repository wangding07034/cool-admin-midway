import { Init, Inject, Provide } from '@midwayjs/core';
import { BaseService, CoolCommException } from '@cool-midway/core';
import { Equal, Repository } from 'typeorm';
import { UserAddressEntity } from '../entity/address';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { CourseEntity } from '../../store/entity/course';
import { ClassAppointmentrecordEntity } from '../../store/entity/classAppointmentrecord';
/**
 * 地址
 */
@Provide()
export class UserCourseService extends BaseService {

  @InjectEntityModel(CourseEntity)
  courseEntity: Repository<CourseEntity>;

  @InjectEntityModel(ClassAppointmentrecordEntity)
  classAppointmentrecordEntity: Repository<ClassAppointmentrecordEntity>;


  @Inject()
  ctx;

  /**
   * 课程列表
   * @param userId
   * @param page
   * @param pageSize
   * @param courseId
   * @param courseName
   * @param courseType
   * @param courseStatus
   * @param courseStartTime
   * @param courseEndTime
   * @param coursePrice
   * @param coursePriceType
   * @param coursePriceStart
   * @param coursePriceEnd
   * @param courseSort
   * @param courseSortType
   * @param courseSortStart
   */
  async courseList(query) {
    console.log('query', query)
    const res = await this.sqlRenderPage(
      "select * from course ORDER BY id ASC",
      query,
      false
    );
    return res
  }

  /**
   * 预约课程
   * @param userId
   * @param body
   */
  async appointment(userId, body) {
    console.log('userId', userId, body)
    const { courseId } = body;
    const course = await this.courseEntity.findOneBy({
        id: courseId,
    });

    if (!course) {
      throw new CoolCommException('课程不存在');
    }
    console.log({
      courseId,
      storeId: course.storeId,
      userId: course.userId,
      appointmentUserId: userId,
      courseStatus: 0
    })
    await this.classAppointmentrecordEntity.save({
      courseId, // 课程id
      storeId: course.storeId, // 门店id
      userId: course.userId, // 授课人员id
      appointmentUserId: userId, // 预约人员id
      courseStatus: 0   // 预约状态 0 待上课 1 进行中 2 已完成 3 已取消
    });
    return '预约成功';
  }
}

