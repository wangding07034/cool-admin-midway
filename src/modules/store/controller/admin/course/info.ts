import { CoolController, BaseController } from '@cool-midway/core';
import { CourseEntity } from '../../../entity/course';
import { CourseService } from '../../../service/course';
/**
 * 商品模块-商品信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: CourseEntity,
  service: CourseService,
  pageQueryOp: {
    keyWordLikeFields: ['name']
  }
})
export class CourseController extends BaseController {
   
}
