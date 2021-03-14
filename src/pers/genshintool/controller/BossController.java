package pers.genshintool.controller;

import pers.genshintool.pojo.BossPojo;
import pers.genshintool.pojo.Msg;
import pers.genshintool.service.BossService;
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
