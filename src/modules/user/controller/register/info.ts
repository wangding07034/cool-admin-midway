import { CoolController, BaseController, CoolTag, TagTypes } from '@cool-midway/core';
import { Body, Get, Inject, Post } from '@midwayjs/core';
import { UserInfoService } from '../../service/info';
import { UserInfoEntity } from '../../entity/info';

/**
 * 用户信息
 */
@CoolController({
  api: [],
  entity: UserInfoEntity,
})
export class AppUserRegisterController extends BaseController {
  @Inject()
  ctx;
  
  @Inject()
  userInfoService: UserInfoService;

  // 注册
  @Post('/register', { summary: '注册' })
  async register(@Body() body) {
    const { phone, password } = body;
    await this.userInfoService.register(phone, password);
    return this.ok();
  }
}
