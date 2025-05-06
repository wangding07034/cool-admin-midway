import { Init, Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { Equal, Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { bookAClassInfoEntity } from '../entity/bookAClassInfo';
/**
 * 地址
 */
@Provide()
export class BookAClassInfoService extends BaseService {
  @Inject()
  ctx;

  @InjectEntityModel(bookAClassInfoEntity)
  bookAClassInfoEntity: Repository<bookAClassInfoEntity>;

  /**
   * 列表信息
   */
  // async update(body) {
  //   const result = await super.update(body);
  //   return result;
  // }


}
