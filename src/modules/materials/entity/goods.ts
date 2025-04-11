import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, DataSource, Index } from 'typeorm';

console.log(DataSource);

/**
 * 插件信息
 */
@Entity('material_goods')
export class GoodsEntity extends BaseEntity {
  @Column({ comment: '商品名称' })
  name: string;

  @Column({ comment: '商品分类' })
  goodsType: string;

  @Column({ comment: '商品图片' })
  img: string;

}
