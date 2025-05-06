import { CoolController, BaseController } from '@cool-midway/core';
import { GoodsEntity } from '../../../entity/goods';
import { Get } from "@midwayjs/core";

/**
 * 商品模块-商品信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: GoodsEntity,
})
export class GoodsController extends BaseController {
  /**
   * 其他接口
   */
    @Get("/otheraaa")
    async other() {
      return {
        a:123
      };
    }
}
