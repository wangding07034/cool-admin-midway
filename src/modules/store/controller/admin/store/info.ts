import { CoolController, BaseController } from '@cool-midway/core';
import { StoreEntity } from '../../../entity/store';

/**
 * 商品模块-商品信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: StoreEntity,
  pageQueryOp: {
    keyWordLikeFields: ['name']
  }
})
export class StoreController extends BaseController {
  
   
}
