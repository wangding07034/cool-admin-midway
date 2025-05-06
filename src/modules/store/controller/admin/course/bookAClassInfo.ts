import { CoolController, BaseController } from '@cool-midway/core';
import { bookAClassInfoEntity } from '../../../entity/bookAClassInfo';
import { BookAClassInfoService } from '../../../service/bookAClassInfo';

/**
 * 商品模块-商品信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: bookAClassInfoEntity,
  service: BookAClassInfoService,
  pageQueryOp: {
    keyWordLikeFields: ['name']
  }
})
export class bookAClassInfoController extends BaseController {
   
}
