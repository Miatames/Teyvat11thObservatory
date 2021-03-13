package com.genshintool.controller;

import com.genshintool.pojo.ExpPojo;
import com.genshintool.pojo.ExpSumPojo;
import com.genshintool.pojo.Msg;

import com.genshintool.service.ExpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class ExpController {
    @Autowired
    ExpService expService;

    //提交经验书
    @ResponseBody
    @RequestMapping(value = "/expSubmit",method = RequestMethod.POST)
    public Msg expSubmit(ExpPojo expPojo){
        expService.doExpSubmit(expPojo);
        return Msg.success();
    }

    //获取列表
    @ResponseBody
    @RequestMapping("/expSumList/{botL}")
    public Msg expSumList(@PathVariable("botL") Integer botL) {
        List<ExpSumPojo> getExpSumList =expService.doGetExpSumList(botL);
        return Msg.success().add("exp", getExpSumList);
    }
}
