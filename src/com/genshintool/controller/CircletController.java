package com.genshintool.controller;

import com.genshintool.pojo.CircletPojo;
import com.genshintool.pojo.Msg;
import com.genshintool.service.CircletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CircletController {
    @Autowired
    CircletService circletService;

    @ResponseBody
    @RequestMapping(value = "/circletSubmit",method = RequestMethod.POST)
    public Msg circletSubmit(CircletPojo circletPojo){
        circletService.doCircletSubmit(circletPojo);
        return Msg.success();
    }


}
