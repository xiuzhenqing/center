import React, { Component } from 'react';
import '../css/admin.css';
import '../css/pintuer.css';
import '../css/page.css';
import $ from 'jquery';
class Page extends Component {
  render() {
    return (
      <div>
      <div className="panel admin-panel">
        <div className="panel-head">
            <strong>
              <span className="icon-pencil-square-o"></span> 单页信息
            </strong>
        </div>
        <div className="body-content">
          <form method="post" className="form-x" action="">      
            <div className="form-group">
              <div className="label">
                <label>标题：</label>
              </div>
        <div className="field">
          <input type="text" className="input" name="title" value="" />
          <div className="tips"></div>
        </div>
      </div>
      <div className="form-group">
        <div className="label">
          <label>图片：</label>
        </div>
        <div className="field">
          <input type="text" id="url1" name="img" className="input tips" value=""  data-toggle="hover" data-place="right" data-image="" />
          <input type="button" className="button bg-blue margin-left" id="image1" value="+ 浏览上传"/>
          <div className="tipss">图片尺寸：500*200</div>
        </div>
      </div>
      <div className="form-group">
        <div className="label">
          <label>内容：</label>
        </div>
        <div className="field">
          <textarea name="content"></textarea>
          <div className="tips"></div>
        </div>
      </div>
      <div className="form-group">
        <div className="label">
          <label></label>
        </div>
        <div className="field">
          <button className="button bg-main icon-check-square-o" type="submit"> 提交</button>
        </div>
      </div>
    </form>
  </div>
</div>
      </div>
    );
  }
}

export default Page;
