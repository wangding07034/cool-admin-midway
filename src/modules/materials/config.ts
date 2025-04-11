import { ModuleConfig } from '@cool-midway/core';

/**
 * 模块配置
 */
export default options => {
  return {
    // 模块名称
    name: '库存管理模块',
    // 模块描述
    description: '',
    // 中间件，只对本模块有效
    middlewares: [],
    // 中间件，全局有效
    globalMiddlewares: [],
    // 模块加载顺序，默认为0，值越大越优先加载
    order: 0,
    // jwt 生成解密token的
    jwt: {
      // 单点登录
      sso: false,
      // 注意： 最好重新修改，防止破解
      secret: 'd9f25f52-3d09-416e-9018-ed9c1dd29a2b',
      // token
      token: {
        // 2小时过期，需要用刷新token
        expire: 2 * 3600,
        // 15天内，如果没操作过就需要重新登录
        refreshExpire: 24 * 3600 * 15,
      },
    },
    // 基础插件配置
    hooks: {
      // 文件上传
      upload: {
        // 地址前缀
        domain: `http://127.0.0.1:${options?.app?.getConfig('koa.port')}`,
      },
    },
  } as ModuleConfig;
};
