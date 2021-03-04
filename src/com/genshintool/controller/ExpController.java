package com.genshintool.controller;


import com.genshintool.pojo.ExpPojo;
import com.genshintool.pojo.Msg;

import com.genshintool.service.ExpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ExpController {
    @Autowired
    ExpService expService;

    @ResponseBody
    @RequestMapping(value = "/expSubmit",method = RequestMethod.POST)
    public Msg expSubmit(ExpPojo expPojo){
        expService.doExpSubmit(expPojo);
        return Msg.success();
    }


}
