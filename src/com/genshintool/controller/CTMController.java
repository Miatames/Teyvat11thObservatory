package com.genshintool.controller;

import com.genshintool.pojo.CTMPojo;
import com.genshintool.pojo.Msg;
import com.genshintool.service.CTMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CTMController {
    @Autowired
    CTMService ctmService;

    @ResponseBody
    @RequestMapping(value = "/ctmSubmit",method = RequestMethod.POST)
    public Msg ctmSubmit(CTMPojo ctmPojo){
        ctmService.doCTMSubmit(ctmPojo);
        return Msg.success();
    }


}
