package pers.genshintool.controller;

import pers.genshintool.pojo.CTMPojo;
import pers.genshintool.pojo.CTMSumPojo;
import pers.genshintool.pojo.Msg;
import pers.genshintool.service.CTMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class CTMController {
    @Autowired
    CTMService ctmService;

    //提交角色天赋材料
    @ResponseBody
    @RequestMapping(value = "/ctmSubmit",method = RequestMethod.POST)
    public Msg ctmSubmit(CTMPojo ctmPojo){
        ctmService.doCTMSubmit(ctmPojo);
        return Msg.success();
    }

    //获取列表
    @ResponseBody
    @RequestMapping("/ctmSumList/{ctmL}")
    public Msg ctmSumList(@PathVariable("ctmL") Integer ctmL) {
        List<CTMSumPojo> getCTMSumList = ctmService.doGetCTMSumList(ctmL);
        return Msg.success().add("ctm", getCTMSumList);
    }
}
