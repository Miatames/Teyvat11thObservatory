package com.genshintool.controller;

import com.genshintool.pojo.GobletPojo;
import com.genshintool.pojo.Msg;
import com.genshintool.service.GobletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class GobletController {
    @Autowired
    GobletService gobletService;

    @ResponseBody
    @RequestMapping(value = "/gobletSubmit",method = RequestMethod.POST)
    public Msg gobletSubmit(GobletPojo gobletPojo){
        gobletService.doGobletSubmit(gobletPojo);
        return Msg.success();
    }


}
