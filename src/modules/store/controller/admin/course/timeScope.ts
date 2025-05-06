import { CoolController, BaseController } from '@cool-midway/core';
import { CourseTimeScopeEntity } from '../../../entity/courseTimeScope';
/**
 * 商品模块-商品信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: CourseTimeScopeEntity,
  pageQueryOp: {
    keyWordLikeFields: ['name']
  }
})
export class CourseTimeScopeController extends BaseController {
   
}
