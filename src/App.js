import React, { Component } from 'react';
import './css/admin.css';
import './css/pintuer.css';
import Page from './js/Page'
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
      componentDidMount(){
        $(function(){
  $(".leftnav h2").click(function(){
    $(this).next().slideToggle(200);  
    $(this).toggleClass("on"); 
  })
  $(".leftnav ul li a").click(function(){
      $("#a_leader_txt").text($(this).text());
      $(".leftnav ul li a").removeClass("on");
    $(this).addClass("on");
  })
});        
      }
  render() {
    return (
      <Router>
      <div>
      <div className="header bg-main">
        <div className="logo margin-big-left fadein-top">
          <h1>后台管理中心</h1>
        </div>
      </div>
      <div className="leftnav">
             <div className="leftnav-title">
                <strong><span className="icon-list"></span>菜单列表</strong>
             </div>
            <h2>
              <span className="icon-user"></span>基本设置
            </h2>
            <ul>
              <li>
                <Link to="/Page"><span className="icon-caret-right"></span>单页管理</Link>
              </li>      
              <li>
                    <span className="icon-caret-right"></span>栏目管理
              </li>
            </ul>
            <h2>
              <span className="icon-pencil-square-o"></span>栏目管理
            </h2>
            <ul>
              <li>
                  <a href="list.html" target="right">
                    <span className="icon-caret-right"> </span>内容管理
                  </a>
              </li>
              <li>
                <a href="add.html" target="right">
                  <span className="icon-caret-right"></span>添加内容
                </a>
              </li>
              <li>
                <a href="cate.html" target="right">
                  <span className="icon-caret-right"></span>分类管理
                </a>
              </li>        
            </ul>  
      </div>
      <ul className="bread">
           <li>
              <a href="{:U('Index/info')}" target="right" className="icon-home"> 首页</a>
            </li>
           <li>
              <a href="##" id="a_leader_txt">网站信息</a>
          </li>
      </ul>
           <Route path="/Page" component={Page}/>
      </div>
 
      </Router>
    );
  }
}

export default App;
