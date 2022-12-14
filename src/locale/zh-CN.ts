import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

// import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';

import localeLibrary from '@/views/library/locale/zh-CN';
import localeWorkshop from '@/views/workshop/locale/zh-CN';
import localeWorkplace from '@/views/workplace/locale/zh-CN';
import localeSystem from '@/views/system/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  // 'menu.dashboard': '仪表盘',
  // 'menu.server.dashboard': '仪表盘-服务端',
  // 'menu.server.workplace': '工作台-服务端',
  // 'menu.server.monitor': '实时监控-服务端',
  // 'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.arcoWebsite': 'EBook Workshop',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',

  'menu.library': '图书馆',
  'menu.workshop': '图书工坊',
  'menu.workplace': '图书工场',
  'menu.system': '系统设置',

  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
  ...localeLibrary,
  ...localeWorkshop,
  ...localeSystem,
};
