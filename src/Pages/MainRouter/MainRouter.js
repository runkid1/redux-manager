import React, { Component } from "react";
import { Menu, Icon, Button } from "antd";
import menu from "../../Redux/menu";

const { SubMenu } = Menu;
class MainRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("menu==", menu);
  }
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          {menu.map((item, index) => {
            return (
              <SubMenu
                key={item.moduleId}
                title={
                  <span>
                    <Icon type="setting" />
                    <span>{item.moduleName}</span>
                  </span>
                }
              >     
                  {
                      item.childModule.map((itemChild)=>{
                          return(
                                <Menu.Item key={itemChild.moduleId}>{itemChild.moduleName}</Menu.Item>
                          )
                      })
                  }
              </SubMenu>
            );
          })}
        </Menu>
      </div>
    );
  }
  handleClick = e => {
    console.log("click ", e);
  };
}

export default MainRouter;
