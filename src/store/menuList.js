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
  ]
  export default menuData
  