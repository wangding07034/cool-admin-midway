import { CoolController, BaseController } from '@cool-midway/core';
import { Body, Get, Inject, Post } from '@midwayjs/core';
import { UserInfoService } from '../../service/info';
import { UserCourseService } from '../../service/course';
import { CourseEntity } from '../../../store/entity/course';

/**
 * 用户信息
 */
@CoolController({
  api: ['page'],
  entity: CourseEntity,
  pageQueryOp: {
    fieldEq: ['storeId'],
  }
})
export class AppUserController extends BaseController {
  @Inject()
  ctx;

  @Inject()
  userCourseService: UserCourseService;
  
  @Inject()
  userInfoService: UserInfoService;

  // 课程列表
  @Get('/courseList', { summary: '课程列表' })
  async courseList() {
    // 课程列表
    return this.ok(await this.userCourseService.courseList(this.ctx.query));
  }

  @Post('/appointment', { summary: '预约课程' })
  async appointment(@Body() body) {
    // 预约课程
    return this.ok(await this.userCourseService.appointment(this.ctx.user.id, body));
  }
}
