package com.genshintool.controller;

import com.genshintool.pojo.BossPojo;
import com.genshintool.pojo.Msg;
import com.genshintool.service.BossService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class BossController {
    @Autowired
    BossService bossService;

    @ResponseBody
    @RequestMapping(value = "/bossSubmit",method = RequestMethod.POST)
    public Msg bossSubmit(BossPojo bossPojo){
        bossService.doBossSubmit(bossPojo);
        return Msg.success();
    }


}
