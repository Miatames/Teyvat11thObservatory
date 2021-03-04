package com.genshintool.controller;

import com.genshintool.pojo.Msg;
import com.genshintool.pojo.WAMPojo;
import com.genshintool.service.WAMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WAMController {
    @Autowired
    WAMService wamService;

    @ResponseBody
    @RequestMapping(value = "/wamSubmit",method = RequestMethod.POST)
    public Msg wamSubmit(WAMPojo wamPojo){
        wamService.doWAMSubmit(wamPojo);
        return Msg.success();
    }


}
