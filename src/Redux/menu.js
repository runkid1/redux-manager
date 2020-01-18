import Login from '../Pages/Login/Login'
import Test1 from '../Pages/Test1/Test1'

const menuData = [
    {
      moduleId: 'A1',
      moduleName: '会员管理',
      moduleParentId: '',
      childModule: [{
          moduleId: 'A1B1',
          moduleName: '团购列表',
          moduleParentId: 'A1',
          url: Login,
          exact:true
        },
        {
          moduleId: 'A1B2',
          moduleName: '团购列表',
          moduleParentId: 'A1',
          url: Test1
        },
      ]
    },
    // {
    //   moduleId: 'A2',
    //   moduleName: '商城管理',
    //   moduleParentId: '',
    //   childModule: [
    //     {
    //       moduleId: 'A2B7',
    //       moduleName: '首页',
    //       moduleParentId: 'A2',
    //       url: '/firstPage'
    //     },
    //     {
    //       moduleId: 'A2B6',
    //       moduleName: '二级页',
    //       moduleParentId: 'A2',
    //       url: '/secondPage'
    //     },
    //     {
    //       moduleId: 'A2B17',
    //       moduleName: '二级类目管理',
    //       moduleParentId: 'A2',
    //       url: '/secondaryCategoryManagement'
    //     },
    //     {
    //       moduleId: 'A2B8',
    //       moduleName: '首页轮播图',
    //       moduleParentId: 'A2',
    //       url: '/firstPageRunPics'
    //     },
    //     {
    //       moduleId: 'A2B9',
    //       moduleName: '加盟活动商品',
    //       moduleParentId: 'A2',
    //       url: '/joinActivityProducts'
    //     },
    //     {
    //       moduleId: 'A2B10',
    //       moduleName: '商品列表',
    //       moduleParentId: 'A2',
    //       url: '/commodityList'
    //     },
    //     {
    //       moduleId: 'A2B14',
    //       moduleName: '店铺公告',
    //       moduleParentId: 'A2',
    //       url: '/shopAnnouncement'
    //     },
    //     {
    //       moduleId: 'A2B15',
    //       moduleName: '启动页',
    //       moduleParentId: 'A2',
    //       url: '/startPage'
    //     },
    //     {
    //       moduleId: 'A2B16',
    //       moduleName: '店铺后台活动专题',
    //       moduleParentId: 'A2',
    //       url: '/activityProject'
    //     },
    //   ]
    // },
    // {
    //   moduleId: 'A3',
    //   moduleName: '仓库管理',
    //   moduleParentId: '',
    //   childModule: [{
    //       moduleId: 'A3B1',
    //       moduleName: '仓库列表',
    //       moduleParentId: 'A3',
    //       url: '/warehouseList'
    //     },
    //     {
    //       moduleId: 'A3B2',
    //       moduleName: '存管通商户列表',
    //       moduleParentId: 'A3',
    //       url: '/saveManageList'
    //     }
    //   ]
    // },
    // {
    //   moduleId: 'A4',
    //   moduleName: '商品管理',
    //   moduleParentId: '',
    //   childModule: [{
    //       moduleId: 'A4B1',
    //       moduleName: '同步商品库',
    //       moduleParentId: 'A4',
    //       url: '/synchronizeCommodityLibrary'
    //     },
    //     {
    //       moduleId: 'A4B2',
    //       moduleName: '商品',
    //       moduleParentId: 'A4',
    //       url: '/commodity'
    //     },
    //     {
    //       moduleId: 'A4B4',
    //       moduleName: '前台模块',
    //       moduleParentId: 'A4',
    //       url: '/frontModule'
    //     }, {
    //       moduleId: 'A4B5',
    //       moduleName: '品牌',
    //       moduleParentId: 'A4',
    //       url: '/brand'
    //     },
    //     {
    //       moduleId: 'A4B6',
    //       moduleName: '返利',
    //       moduleParentId: 'A4',
    //       url: '/rebate'
    //     },
    //     {
    //       moduleId: 'A4B7',
    //       moduleName: '标签',
    //       moduleParentId: 'A4',
    //       url: '/label'
    //     },
    //     {
    //       moduleId: 'A4B8',
    //       moduleName: 'spu管理',
    //       moduleParentId: 'A4',
    //       url: '/inquirySpu'
    //     },
    //     {
    //       moduleId: 'A4B9',
    //       moduleName: '原产地',
    //       moduleParentId: 'A4',
    //       url: '/originPlace'
    //     },
    //     {
    //       moduleId: 'A4B10',
    //       moduleName: '金蝶价目表',
    //       moduleParentId: 'A4',
    //       url: '/jindiePriceList'
    //     }
    //   ]
    // },
    // {
    //   moduleId: 'A5',
    //   moduleName: '营销活动',
    //   moduleParentId: '',
    //   childModule: [
    //     {
    //       moduleId: 'A5B1',
    //       moduleName: '优惠券列表',
    //       moduleParentId: 'A5',
    //       url: '/couponsList'
    //     },
    //     {
    //       moduleId: 'A5B4',
    //       moduleName: '活动列表',
    //       moduleParentId: 'A5',
    //       url: '/activityList'
    //     },
    //     {
    //       moduleId: 'A5B6',
    //       moduleName: '数据',
    //       moduleParentId: 'A5',
    //       url: '/datas'
    //     },
    //     {
    //       moduleId: 'A5B7',
    //       moduleName: '蟹卡提货名单',
    //       moduleParentId: 'A5',
    //       url: '/xieka'
    //     },
    //     {
    //       moduleId: 'A5B8',
    //       moduleName: '团购',
    //       moduleParentId: 'A5',
    //       url: '/group'
    //     },
    //     {
    //       moduleId: 'A5B9',
    //       moduleName: '推广二维码管理',
    //       moduleParentId: 'A5',
    //       url: '/qrCodeManager'
    //     },
    //     {
    //       moduleId: 'A5B10',
    //       moduleName: '中通创客大转盘',
    //       moduleParentId: 'A5',
    //       url: '/ztcoupon'
    //     },
    //     {
    //       moduleId: 'A5B11',
    //       moduleName: '素材生成工具',
    //       moduleParentId: 'A5',
    //       url: '/pingxiaosucai'
    //     },
    //     {
    //       moduleId: 'A5B13',
    //       moduleName: '摇摇节',
    //       moduleParentId: 'A5',
    //       url: '/bigTurntable'
    //     },
    //   ]
    // },
  
    // {
    //   moduleId: 'A18',
    //   moduleName: '团购管理',
    //   moduleParentId: '',
    //   childModule: [
    //     {
    //       moduleId: 'A18B1',
    //       moduleName: '团购列表',
    //       moduleParentId: 'A18',
    //       url: '/groupPurchase'
    //     },
    //   ]
    // },
    // {
    //   moduleId: 'A6',
    //   moduleName: '订单管理',
    //   moduleParentId: '',
    //   childModule: [{
    //       moduleId: 'A6B1',
    //       moduleName: '商品订单查询',
    //       moduleParentId: 'A6',
    //       url: '/commodityOrderInquiry'
    //     }, {
    //       moduleId: 'A6B2',
    //       moduleName: '退款申请表',
    //       moduleParentId: 'A6',
    //       url: '/refundApplicationForm'
    //     }, {
    //       moduleId: 'A6B3',
    //       moduleName: '未推送订单列表',
    //       moduleParentId: 'A6',
    //       url: '/notPushedOrderList'
    //     },
    //     {
    //       moduleId: 'A6B4',
    //       moduleName: '运费模板设置',
    //       moduleParentId: 'A6',
    //       url: '/freightFormwork'
    //     }
    //   ]
    // },
    // {
    //   moduleId: 'A7',
    //   moduleName: '财务管理',
    //   moduleParentId: '',
    //   childModule: [{
    //       moduleId: 'A7B1',
    //       moduleName: '提现记录列表',
    //       moduleParentId: 'A7',
    //       url: '/cashRecordsList'
    //     },
    //     {
    //       moduleId: 'A7B2',
    //       moduleName: '财务审核',
    //       moduleParentId: 'A7',
    //       url: '/financialAudit'
    //     },
    //     {
    //       moduleId: 'A7B6',
    //       moduleName: '财务报表',
    //       moduleParentId: 'A7',
    //       url: '/financialReport'
    //     },
    //     {
    //       moduleId: 'A7B3',
    //       moduleName: '交易完成报表',
    //       moduleParentId: 'A7',
    //       url: '/transactionCompletionReport'
    //     },
    //     {
    //       moduleId: 'A7B4',
    //       moduleName: '交易完成商品汇总表',
    //       moduleParentId: 'A7',
    //       url: '/transactionCompletedProductSummary'
    //     },
    //     {
    //       moduleId: 'A7B5',
    //       moduleName: '客户经理工资管理',
    //       moduleParentId: 'A7',
    //       url: '/salaryManagement'
    //     },
  
    //   ]
    // },
    // {
    //   moduleId: 'A11',
    //   moduleName: '权限管理',
    //   moduleParentId: '',
    //   childModule: [{
    //     moduleId: 'A11B1',
    //     moduleName: '部门管理',
    //     moduleParentId: 'A11',
    //     url: '/departmentManagement'
    //   }, {
    //     moduleId: 'A11B2',
    //     moduleName: '成员管理',
    //     moduleParentId: 'A11',
    //     url: '/memberManagement'
    //   }, {
    //     moduleId: 'A11B3',
    //     moduleName: '模块管理',
    //     moduleParentId: 'A11',
    //     url: '/moduleManagement'
    //   }]
    // },
    // {
    //   moduleId: 'A12',
    //   moduleName: '发现管理',
    //   moduleParentId: '',
    //   childModule: [{
    //       moduleId: 'A12B1',
    //       moduleName: '轮播图',
    //       moduleParentId: 'A12',
    //       url: '/runPics'
    //     },
    //     {
    //       moduleId: 'A12B2',
    //       moduleName: '话题管理',
    //       moduleParentId: 'A12',
    //       url: '/customizeTopic'
    //     },
    //     // {
    //     //   moduleId: 'A12B3',
    //     //   moduleName: '素材管理',
    //     //   moduleParentId: 'A12',
    //     //   url: '/materialManage'
    //     // },
    //     {
    //       moduleId: 'A12B4',
    //       moduleName: '素材管理',
    //       moduleParentId: 'A12',
    //       url: '/newmaterialManage'
    //     }
    //   ]
    //   // {
    //   //                            moduleId: 'A12B3',
    //   //                            moduleName: '发布箱',
    //   //                            moduleParentId: 'A12',
    //   //                            url: '/publishBox'
    //   //                        },{
    //   //                            moduleId: 'A12B4',
    //   //                            moduleName: '草稿箱',
    //   //                            moduleParentId: 'A12',
    //   //                            url: '/draftBox'
    //   //                        },{
    //   //                            moduleId: 'A12B5',
    //   //                            moduleName: '定时发布箱',
    //   //                            moduleParentId: 'A12',
    //   //                            url: '/timingPublishBox'
    //   //                        }
    // },
    // {
    //   moduleId: 'A13',
    //   moduleName: '返利体系',
    //   moduleParentId: '',
    //   childModule: [{
    //       moduleId: 'A13B1',
    //       moduleName: '高级返利',
    //       moduleParentId: 'A13',
    //       url: '/highRebate'
    //     },
    //     {
    //       moduleId: 'A13B2',
    //       moduleName: '任务系统',
    //       moduleParentId: 'A13',
    //       url: '/promotionTask'
    //     }
    //   ]
    // },
    // {
    //   moduleId: 'A14',
    //   moduleName: '金币管理',
    //   moduleParentId: '',
    //   childModule: [{
    //       moduleId: 'A14B1',
    //       moduleName: '金币池管理',
    //       moduleParentId: 'A14',
    //       url: '/goldPoolManagement'
    //     },
    //     {
    //       moduleId: 'A14B2',
    //       moduleName: '金币发放',
    //       moduleParentId: 'A14',
    //       url: '/goldPayment'
    //     }, {
    //       moduleId: 'A14B3',
    //       moduleName: '金币扣除',
    //       moduleParentId: 'A14',
    //       url: '/goldDeduction'
    //     }, {
    //       moduleId: 'A14B4',
    //       moduleName: '查看日志',
    //       moduleParentId: 'A14',
    //       url: '/viewGoldLog'
    //     },
    //     {
    //       moduleId: 'A14B5',
    //       moduleName: '金币统计',
    //       moduleParentId: 'A14',
    //       url: '/goldCoin'
    //     }
    //   ]
    // },
    // {
    //   moduleId: 'A15',
    //   moduleName: '王卡管理',
    //   moduleParentId: '',
    //   childModule: [{
    //     moduleId: 'A15B1',
    //     moduleName: '联通王卡',
    //     moduleParentId: 'A15',
    //     url: '/unicomSimcard'
    //   }]
    // },
    // {
    //   moduleId: 'A16',
    //   moduleName: '工单对接设置',
    //   moduleParentId: '',
    //   childModule: [{
    //     moduleId: 'A16B1',
    //     moduleName: '工单对接设置',
    //     moduleParentId: 'A16',
    //     url: '/sevenFishWork'
    //   }]
    // },
    // {
    //   moduleId: 'A17',
    //   moduleName: '短信云',
    //   moduleParentId: '',
    //   childModule: [{
    //     moduleId: 'A17B1',
    //     moduleName: '发送短信',
    //     moduleParentId: 'A17',
    //     url: '/sendShortMessage'
    //   }]
    // }
  ]
  export default menuData
  