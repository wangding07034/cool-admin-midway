import { Init, Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { Equal, Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { CourseEntity } from '../entity/course';
/**
 * 地址
 */
@Provide()
export class CourseService extends BaseService {
  @Inject()
  ctx;

  @InjectEntityModel(CourseEntity)
  courseEntity: Repository<CourseEntity>;

  /**
   * 列表信息
   */
  async update(body) {
    const result = await super.update(body);
    return result;
  }

  async page(query) {
      let result = await super.page(query, {});
      return result;
    }

}
